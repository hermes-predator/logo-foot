
import React from 'react';
import { BlogPost } from '../../types/blog';
import RelatedArticlesBox from './RelatedArticlesBox';
import { useRelatedArticles } from '../../hooks/useRelatedArticles';
import { Sparkles, Trophy, Globe, Target } from 'lucide-react';

interface ArticleRecommendationsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  position?: 'top' | 'middle' | 'bottom';
}

const ArticleRecommendations = ({ 
  currentPost, 
  allPosts, 
  position = 'middle' 
}: ArticleRecommendationsProps) => {
  
  const suggestions = useRelatedArticles({ currentPost, allPosts });
  
  // Icônes selon la position et le type de contenu
  const getIcon = (filterBy: string) => {
    switch (filterBy) {
      case 'league': return Trophy;
      case 'country': return Globe;
      case 'club': return Target;
      default: return Sparkles;
    }
  };
  
  // Sélectionner la suggestion appropriée selon la position
  const selectedSuggestion = suggestions[position === 'top' ? 0 : position === 'middle' ? 1 : 2] || suggestions[0];
  
  if (!selectedSuggestion) {
    return null;
  }
  
  return (
    <RelatedArticlesBox
      currentPost={currentPost}
      allPosts={allPosts}
      title={selectedSuggestion.title}
      icon={getIcon(selectedSuggestion.filterBy)}
      filterBy={selectedSuggestion.filterBy}
      filterValue={selectedSuggestion.filterValue}
      maxArticles={3}
    />
  );
};

export default ArticleRecommendations;
