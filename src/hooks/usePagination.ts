
import { useState, useEffect, useMemo } from 'react';
import { BlogPost } from '../types/blog';

export const usePagination = (items: BlogPost[], itemsPerPage: number = 9) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages in a memoized way
  const totalPages = useMemo(() => 
    Math.max(1, Math.ceil(items.length / itemsPerPage)), 
    [items.length, itemsPerPage]
  );
  
  // Ensure current page is valid in a memoized way
  const validCurrentPage = useMemo(() => 
    Math.min(Math.max(1, currentPage), totalPages),
    [currentPage, totalPages]
  );
  
  // Automatically adjust current page if it becomes invalid
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);
  
  // Calculate paginated items in a memoized way
  const paginatedItems = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, validCurrentPage, itemsPerPage]);

  // Detailed log for debugging
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
