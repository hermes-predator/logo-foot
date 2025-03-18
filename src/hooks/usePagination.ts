
import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';

export const usePagination = (items: BlogPost[], itemsPerPage: number = 9) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calcul du nombre total de pages
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  
  // Assurer que la page courante est valide
  const [validCurrentPage, setValidCurrentPage] = useState(1);

  useEffect(() => {
    // Assurer que currentPage est dans les limites valides
    setValidCurrentPage(Math.min(Math.max(1, currentPage), totalPages));
  }, [currentPage, totalPages]);
  
  // Calculate paginated items
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  // Log détaillé pour le débogage
  console.log('Pagination debug details:', {
    totalItems: items.length,
    itemsPerPage,
    currentPage,
    validCurrentPage,
    totalPages,
    startIndex,
    endIndex: startIndex + itemsPerPage,
    displayedItems: paginatedItems.length,
    firstItemId: paginatedItems[0]?.id,
    lastItemId: paginatedItems[paginatedItems.length - 1]?.id
  });
  
  return {
    currentPage: validCurrentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems: items.length
  };
};
