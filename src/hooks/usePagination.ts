
import { useState } from 'react';
import { BlogPost } from '../types/blog';

export const usePagination = (items: BlogPost[], itemsPerPage: number = 9) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  // Ensure current page is valid
  const validCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
  
  // Calculate paginated items
  const paginatedItems = items.slice(
    (validCurrentPage - 1) * itemsPerPage,
    validCurrentPage * itemsPerPage
  );

  // Log all items for debugging
  console.log('Pagination debug:', {
    totalItems: items.length,
    itemsPerPage,
    currentPage: validCurrentPage,
    totalPages,
    displayedItems: paginatedItems.length,
    firstItem: paginatedItems[0]?.title,
    lastItem: paginatedItems[paginatedItems.length - 1]?.title
  });
  
  // Find articles that might be missing
  const hasJuventus = items.some(item => item.title.toLowerCase().includes('juventus'));
  const hasChelsea = items.some(item => item.title.toLowerCase().includes('chelsea'));
  
  console.log('Articles spécifiques présents dans la liste complète:', {
    juventus: hasJuventus,
    chelsea: hasChelsea,
  });

  return {
    currentPage: validCurrentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems: items.length
  };
};
