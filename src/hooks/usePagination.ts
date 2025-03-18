
import { useState, useEffect, useMemo } from 'react';
import { BlogPost } from '../types/blog';

export const usePagination = (items: BlogPost[], itemsPerPage: number = 9) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calcul du nombre total de pages de façon mémorisée
  const totalPages = useMemo(() => Math.max(1, Math.ceil(items.length / itemsPerPage)), [items.length, itemsPerPage]);
  
  // Assurer que la page courante est valide de façon mémorisée
  const validCurrentPage = useMemo(() => {
    return Math.min(Math.max(1, currentPage), totalPages);
  }, [currentPage, totalPages]);
  
  // Calculer les éléments paginés de façon mémorisée
  const paginatedItems = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, validCurrentPage, itemsPerPage]);

  // Log détaillé pour le débogage
  useEffect(() => {
    console.log('Pagination debug details:', {
      totalItems: items.length,
      itemsPerPage,
      currentPage,
      validCurrentPage,
      totalPages,
      startIndex: (validCurrentPage - 1) * itemsPerPage,
      endIndex: (validCurrentPage - 1) * itemsPerPage + itemsPerPage,
      displayedItems: paginatedItems.length,
      firstItemId: paginatedItems[0]?.id,
      lastItemId: paginatedItems[paginatedItems.length - 1]?.id
    });
  }, [items.length, itemsPerPage, currentPage, validCurrentPage, totalPages, paginatedItems]);
  
  return {
    currentPage: validCurrentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems: items.length
  };
};
