
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
      <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 px-4">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="h-64 bg-gray-100 animate-pulse rounded-xl"
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-600 text-lg">Aucun article trouvé.</p>
      </div>
    );
  }

  return (
    <section 
      className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 px-4" 
      aria-label="Liste des articles"
    >
      {articles.map((post) => (
        <BlogArticleCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default BlogArticleList;
