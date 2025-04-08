
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Calendar, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxPosts?: number;
}

/**
 * Affiche une liste d'articles liés basée sur la catégorie, les mots-clés et l'analyse contextuelle
 */
const RelatedPosts = ({ currentPost, allPosts, maxPosts = 3 }: RelatedPostsProps) => {
  // Fonction améliorée pour calculer le score de pertinence entre deux articles
  const calculateRelevanceScore = (post: BlogPost): number => {
    if (post.id === currentPost.id) return -1; // Exclure l'article actuel
    
    let score = 0;
    
    // Même catégorie = score élevé
    if (post.category === currentPost.category) {
      score += 5;
    }
    
    // Même sous-catégorie = score bonus très important
    if (post.subCategory && post.subCategory === currentPost.subCategory) {
      score += 8; // Augmenté pour favoriser les articles de même sous-catégorie
    }
    
    // Traitement optimisé des mots-clés
    const currentKeywords = currentPost.keywords?.toLowerCase().split(',').map(k => k.trim()) || [];
    const postKeywords = post.keywords?.toLowerCase().split(',').map(k => k.trim()) || [];
    
    // Recherche de mots-clés communs avec pondération
    for (const keyword of currentKeywords) {
      if (postKeywords.includes(keyword)) {
        score += 2; // Augmenté pour favoriser les correspondances de mots-clés exacts
      }
      
      // Vérification des variations ou sous-chaînes des mots-clés
      for (const postKeyword of postKeywords) {
        if (keyword !== postKeyword) {
          if (keyword.includes(postKeyword) || postKeyword.includes(keyword)) {
            // Mots-clés partiellement communs (ex: "logo-real-madrid" et "real-madrid")
            score += 1;
            break;
          }
        }
      }
    }
    
    // Analyse du titre pour trouver des entités communes (noms propres, équipes, joueurs)
    const currentTitle = currentPost.title.toLowerCase();
    const postTitle = post.title.toLowerCase();
    
    // Identifier les segments communs potentiels (entités nommées)
    const currentTitleSegments = currentTitle.split(/[:()-]/).map(s => s.trim());
    const postTitleSegments = postTitle.split(/[:()-]/).map(s => s.trim());
    
    // Vérifier si des segments importants sont communs
    for (const segment of currentTitleSegments) {
      if (segment.length > 3 && postTitleSegments.some(s => s.includes(segment))) {
        score += 4; // Forte correspondance thématique
        break;
      }
    }
    
    // Détection d'entités géographiques communes (pays, villes)
    const countries = ['france', 'italie', 'espagne', 'allemagne', 'angleterre', 'portugal', 'brésil', 'argentine', 'pays-bas', 'belgique'];
    for (const country of countries) {
      if ((currentTitle.includes(country) || currentPost.content?.toLowerCase().includes(country)) && 
          (postTitle.includes(country) || post.content?.toLowerCase().includes(country))) {
        score += 3; // Bonus pour les articles concernant le même pays
        break;
      }
    }
    
    // Détection de compétitions communes
    const competitions = ['ligue 1', 'ligue 2', 'premier league', 'liga', 'serie a', 'bundesliga', 'champions league', 'europa league', 'coupe du monde'];
    for (const competition of competitions) {
      if ((currentTitle.includes(competition) || currentPost.content?.toLowerCase().includes(competition)) && 
          (postTitle.includes(competition) || post.content?.toLowerCase().includes(competition))) {
        score += 3; // Bonus pour les articles concernant la même compétition
        break;
      }
    }
    
    // Détection de clubs communs majeurs
    const clubs = ['psg', 'marseille', 'om', 'lyon', 'barcelona', 'real madrid', 'juventus', 'inter', 'milan', 'bayern', 'manchester'];
    for (const club of clubs) {
      if ((currentTitle.includes(club) || currentPost.content?.toLowerCase().includes(club)) && 
          (postTitle.includes(club) || post.content?.toLowerCase().includes(club))) {
        score += 4; // Bonus important pour les articles concernant le même club
        break;
      }
    }
    
    // Bonus pour les articles récents (moins de 60 jours)
    const postDate = new Date(post.date);
    const daysDifference = (new Date().getTime() - postDate.getTime()) / (1000 * 3600 * 24);
    if (daysDifference < 30) {
      score += 3; // Bonus augmenté pour les articles très récents (< 1 mois)
    } else if (daysDifference < 90) {
      score += 1; // Bonus maintenu pour les articles récents (< 3 mois)
    }
    
    // Vérifier si l'article cible est mentionné dans l'article actuel (ou vice versa)
    if (currentPost.content && post.id && currentPost.content.includes(`blog/${post.id}`)) {
      score += 10; // Bonus majeur si l'article actuel lie déjà vers l'article cible
    }
    
    // Vérification de la longueur des contenus pour privilégier les articles complets
    if (post.content && post.content.length > 3000) {
      score += 2; // Favoriser les articles détaillés
    }
    
    return score;
  };
  
  // Trouver les articles les plus pertinents avec l'algorithme amélioré
  const relatedPosts = allPosts
    .map(post => ({ 
      post, 
      score: calculateRelevanceScore(post) 
    }))
    .filter(item => item.score > 0) // Uniquement les articles pertinents
    .sort((a, b) => b.score - a.score) // Tri par score décroissant
    .slice(0, maxPosts) // Limite au nombre maximum d'articles
    .map(item => item.post); // Extraire juste les articles
  
  if (relatedPosts.length === 0) {
    return null; // Ne rien afficher s'il n'y a pas d'articles liés
  }
  
  // Ajout d'un lien "Voir tous les articles" vers la page principale du blog
  const viewAllLink = (
    <Link 
      to="/blog" 
      className="flex items-center justify-center gap-1.5 text-sm text-purple-600 font-medium hover:text-purple-800 transition-colors py-2 border-t border-gray-100 mt-3"
    >
      <span>Voir tous les articles</span>
      <ExternalLink className="h-3.5 w-3.5" />
    </Link>
  );
  
  return (
    <div className="mt-8 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 inline-block pb-1">
          Articles liés
        </h3>
        <Link to="/blog" className="text-sm text-purple-600 hover:text-purple-800 transition-colors">
          Tous les articles →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPosts.map(post => (
          <Card 
            key={post.id} 
            className="hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-purple-200 group"
          >
            <CardContent className="p-4">
              <Link 
                to={`/blog/${post.id}`} 
                className="block group"
              >
                {/* Vignette avec catégorie */}
                <div className="relative bg-gray-100 rounded-md mb-3 aspect-video overflow-hidden">
                  <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm text-xs px-2 py-0.5 rounded text-purple-700 font-medium shadow-sm">
                    {post.subCategory || post.category}
                  </div>
                  {post.galleryImageId ? (
                    <img
                      src={`/blog-images/${post.id}.png`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400 text-xs">Image non disponible</span>
                    </div>
                  )}
                </div>
                
                <h4 className="text-base font-semibold mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <time dateTime={post.date}>
                      {format(new Date(post.date), 'dd MMM yyyy')}
                    </time>
                  </div>
                  
                  <span className="text-purple-600 flex items-center gap-1 font-medium group-hover:translate-x-0.5 transition-transform">
                    Lire <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Lien "Voir tous les articles" centré en bas */}
      <div className="text-center mt-4">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors text-sm font-medium"
        >
          <span>Découvrir plus d'articles</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedPosts;
