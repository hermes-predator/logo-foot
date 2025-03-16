
import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';

export const usePagination = (items: BlogPost[], itemsPerPage: number = 12) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  // Use useEffect to handle page updates safely
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  // Calculate paginated items after ensuring current page is valid
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
