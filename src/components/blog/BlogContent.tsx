
import React from 'react';
import { BlogPost } from '../../types/blog';
import BlogArticleList from './BlogArticleList';
import BlogPagination from './BlogPagination';

interface BlogContentProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  paginatedItems: BlogPost[];
}

const BlogContent = ({ 
  posts, 
  currentPage, 
  totalPages, 
  setCurrentPage, 
  paginatedItems 
}: BlogContentProps) => {
  return (
    <div className="space-y-12">
      {/* En-tête de section avec meilleure typographie */}
      <div className="text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Derniers Articles
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {posts.length} article{posts.length > 1 ? 's' : ''} disponible{posts.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Liste d'articles paginée avec transition fluide */}
      <div className="transition-all duration-500 ease-out">
        <BlogArticleList articles={paginatedItems} />
      </div>

      {/* Pagination avec espacement amélioré */}
      {totalPages > 1 && (
        <div className="flex justify-center pt-8">
          <BlogPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default BlogContent;
