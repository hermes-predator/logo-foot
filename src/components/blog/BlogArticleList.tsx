
import React from 'react';
import { BlogPost } from '../../types/blog';
import BlogArticleCard from './BlogArticleCard';

interface BlogArticleListProps {
  articles: BlogPost[];
  isLoading?: boolean;
}

const BlogArticleList = ({ articles, isLoading = false }: BlogArticleListProps) => {
  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 px-4">
        {[...Array(6)].map((_, i) => (
          <div 
            key={`skeleton-${i}`} 
            className="h-60 bg-gray-100 animate-pulse rounded-xl"
            style={{ animationDelay: `${i * 100}ms` }}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-4 animate-fade-in">
        <p className="text-gray-600 text-lg">Aucun article trouvé.</p>
      </div>
    );
  }

  return (
    <section 
      className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 px-4" 
      aria-label="Liste des articles"
    >
      {articles.map((post, index) => (
        <div 
          key={`post-${post.id}`}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <BlogArticleCard post={post} />
        </div>
      ))}
    </section>
  );
};

export default BlogArticleList;
