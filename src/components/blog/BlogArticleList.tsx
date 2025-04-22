
import React, { memo } from 'react';
import { BlogPost } from '../../types/blog';
import BlogArticleCard from './BlogArticleCard';

interface BlogArticleListProps {
  articles: BlogPost[];
  isLoading?: boolean;
}

// Utiliser memo pour éviter les re-renders inutiles
const BlogArticleList = memo(({ articles, isLoading = false }: BlogArticleListProps) => {
  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 px-4">
        {[...Array(6)].map((_, i) => (
          <div 
            key={`skeleton-${i}`} 
            className="h-60 bg-gray-100 animate-pulse rounded-xl"
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-600 text-lg">Aucun article trouvé.</p>
      </div>
    );
  }

  return (
    <section 
      className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 px-4" 
      aria-label="Liste des articles"
    >
      {articles.map((post) => (
        <BlogArticleCard key={`post-${post.id}`} post={post} />
      ))}
    </section>
  );
});

// Ajouter un displayName pour faciliter le débogage dans React DevTools
BlogArticleList.displayName = 'BlogArticleList';

export default BlogArticleList;
