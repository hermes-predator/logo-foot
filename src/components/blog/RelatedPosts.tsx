
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

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
    
    // Même sous-catégorie = score bonus
    if (post.subCategory && post.subCategory === currentPost.subCategory) {
      score += 3;
    }
    
    // Traitement optimisé des mots-clés
    const currentKeywords = currentPost.keywords?.toLowerCase().split(',').map(k => k.trim()) || [];
    const postKeywords = post.keywords?.toLowerCase().split(',').map(k => k.trim()) || [];
    
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
    
    // Calculer les correspondances de mots-clés avec pondération
    const keywordMatchScore = currentKeywords.reduce((total, keyword) => {
      // Base match: keyword exists in other post's keywords
      if (postKeywords.includes(keyword)) {
        total += 1;
      }
      
      // Title match: keyword appears in post title (more important)
      if (postTitle.includes(keyword)) {
        total += 2;
      }
      
      // Content match: keyword appears in post content (if possible to check)
      if (post.content && post.content.toLowerCase().includes(keyword)) {
        // Pondérer selon la fréquence d'apparition
        const keywordRegex = new RegExp(keyword, 'gi');
        const occurrences = (post.content.match(keywordRegex) || []).length;
        total += Math.min(3, occurrences * 0.5); // Plafonner à 3 points
      }
      
      return total;
    }, 0);
    
    score += keywordMatchScore;
    
    // Bonus pour les articles récents (moins de 60 jours)
    const postDate = new Date(post.date);
    const daysDifference = (new Date().getTime() - postDate.getTime()) / (1000 * 3600 * 24);
    if (daysDifference < 60) {
      score += 2;
    } else if (daysDifference < 120) {
      score += 1;
    }
    
    // Vérifier une éventuelle relation contextuelle (ex: même joueur, même équipe)
    // Pour les articles d'analyse de joueurs ou de logos d'équipes
    if (
      (currentTitle.includes('analyse') && postTitle.includes('analyse')) ||
      (currentTitle.includes('logo') && postTitle.includes('logo'))
    ) {
      // Recherche d'entité commune (nom d'équipe/joueur)
      const commonEntity = findCommonEntity(currentTitle, postTitle);
      if (commonEntity) {
        score += 6; // Fort bonus pour les articles sur la même entité
      }
    }
    
    return score;
  };
  
  // Fonction utilitaire pour trouver une entité commune entre deux titres
  const findCommonEntity = (title1: string, title2: string): string | null => {
    // Liste des équipes et joueurs importants (pourrait être étendue)
    const commonEntities = [
      'real madrid', 'barcelona', 'psg', 'manchester city', 'bayern', 'juventus', 'liverpool',
      'chelsea', 'milan', 'inter', 'dortmund', 'arsenal', 'atletico',
      'messi', 'ronaldo', 'mbappe', 'haaland', 'neymar', 'wirtz', 'bellingham'
    ];
    
    for (const entity of commonEntities) {
      if (title1.includes(entity) && title2.includes(entity)) {
        return entity;
      }
    }
    
    return null;
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
  
  return (
    <div className="mt-10 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
        Articles liés
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {relatedPosts.map(post => (
          <Card key={post.id} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-4">
              <Link 
                to={`/blog/${post.id}`} 
                className="block group"
              >
                <h4 className="text-base font-semibold mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h4>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  
                  <span className="text-purple-600 flex items-center gap-1 text-xs font-medium group-hover:translate-x-0.5 transition-transform">
                    Lire <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
