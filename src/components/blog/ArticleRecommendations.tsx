
import React from 'react';
import { BlogPost } from '../../types/blog';
import RelatedArticlesBox from './RelatedArticlesBox';
import { useRelatedArticles } from '../../hooks/useRelatedArticles';

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
      filterBy={selectedSuggestion.filterBy}
      filterValue={selectedSuggestion.filterValue}
      maxArticles={3}
    />
  );
};

export default ArticleRecommendations;
