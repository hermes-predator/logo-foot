
import { useState } from 'react';
import { BlogPost } from '../data/blogPosts';

export const ITEMS_PER_PAGE = 6;

export const usePagination = (items: BlogPost[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const paginatedItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems
  };
};

