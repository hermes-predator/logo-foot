
import React from 'react';
import { BlogPost } from '../../types/blog';
import BlogArticleCard from './BlogArticleCard';

interface BlogArticleListProps {
  articles: BlogPost[];
}

const BlogArticleList = ({ articles }: BlogArticleListProps) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 text-lg">Aucun article trouvé.</p>
      </div>
    );
  }

  return (
    <section 
      className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 px-4" 
      aria-label="Liste des articles"
    >
      {articles.map((post) => (
        <BlogArticleCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default BlogArticleList;
