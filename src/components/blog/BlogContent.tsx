
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
    <>
      {/* Liste d'articles paginée */}
      <BlogArticleList articles={paginatedItems} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <BlogPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default BlogContent;
