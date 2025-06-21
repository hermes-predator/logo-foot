
import { useMemo } from 'react';
import { BlogPost } from '../types/blog';

interface UseRelatedArticlesProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  strategy?: 'smart' | 'category' | 'random';
}

export const useRelatedArticles = ({ 
  currentPost, 
  allPosts, 
  strategy = 'smart' 
}: UseRelatedArticlesProps) => {
  
  return useMemo(() => {
    // Suggestions intelligentes basées sur le contenu de l'article
    const suggestions = [];
    
    // Détecter le type d'article pour proposer des suggestions contextuelles
    const title = currentPost.title.toLowerCase();
    const content = currentPost.content.toLowerCase();
    
    // Suggestions pour articles de clubs
    if (title.includes('psg')) {
      suggestions.push(
        { filterBy: 'league' as const, filterValue: 'ligue 1', title: "Autres clubs de Ligue 1" },
        { filterBy: 'club' as const, filterValue: 'om', title: "Rivalités légendaires" }
      );
    }
    
    if (title.includes('real madrid')) {
      suggestions.push(
        { filterBy: 'league' as const, filterValue: 'liga', title: "Autres clubs de Liga" },
        { filterBy: 'club' as const, filterValue: 'barcelona', title: "El Clasico" }
      );
    }
    
    if (title.includes('manchester')) {
      suggestions.push(
        { filterBy: 'league' as const, filterValue: 'premier league', title: "Premier League" },
        { filterBy: 'country' as const, filterValue: 'angleterre', title: "Football anglais" }
      );
    }
    
    // Suggestions pour articles nationaux
    if (title.includes('france') || content.includes('équipe de france')) {
      suggestions.push(
        { filterBy: 'country' as const, filterValue: 'france', title: "Football français" },
        { filterBy: 'category' as const, filterValue: 'national-logos', title: "Autres sélections" }
      );
    }
    
    // Suggestions pour compétitions
    if (title.includes('champions league')) {
      suggestions.push(
        { filterBy: 'category' as const, filterValue: 'competition-logos', title: "Autres compétitions" },
        { filterBy: 'league' as const, filterValue: 'europa', title: "Coupes européennes" }
      );
    }
    
    // Suggestions par défaut si aucune spécifique
    if (suggestions.length === 0) {
      suggestions.push(
        { filterBy: 'category' as const, filterValue: currentPost.category, title: "À lire aussi" }
      );
    }
    
    return suggestions;
  }, [currentPost, allPosts, strategy]);
};
