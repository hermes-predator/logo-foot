
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
 * Affiche une liste d'articles liés basée sur la catégorie et les mots-clés
 */
const RelatedPosts = ({ currentPost, allPosts, maxPosts = 3 }: RelatedPostsProps) => {
  // Fonction pour calculer le score de pertinence entre deux articles
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
    
    // Correspondance de mots-clés
    const currentKeywords = currentPost.keywords?.toLowerCase().split(',').map(k => k.trim()) || [];
    const postKeywords = post.keywords?.toLowerCase().split(',').map(k => k.trim()) || [];
    
    // Calculer les correspondances de mots-clés
    currentKeywords.forEach(keyword => {
      if (postKeywords.includes(keyword)) {
        score += 1;
      }
      
      // Vérifier si le mot-clé apparaît dans le titre
      if (post.title.toLowerCase().includes(keyword)) {
        score += 2;
      }
    });
    
    // Bonus pour les articles récents (moins de 60 jours)
    const postDate = new Date(post.date);
    const daysDifference = (new Date().getTime() - postDate.getTime()) / (1000 * 3600 * 24);
    if (daysDifference < 60) {
      score += 1;
    }
    
    return score;
  };
  
  // Trouver les articles les plus pertinents
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
