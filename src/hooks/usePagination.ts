
import { useState, useCallback } from 'react';
import { BlogPost } from '../types/blog';

export const usePagination = (items: BlogPost[], itemsPerPage: number = 12) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset current page if we're on a page that no longer exists
  if (currentPage > totalPages) {
    setCurrentPage(1);
  }

  console.log('Pagination debug:', {
    totalItems: items.length,
    itemsPerPage,
    currentPage,
    totalPages,
    displayedItems: paginatedItems.length,
    firstItem: paginatedItems[0]?.title,
    lastItem: paginatedItems[paginatedItems.length - 1]?.title
  });

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems: items.length
  };
};
