
import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';

export const usePagination = (items: BlogPost[], itemsPerPage: number = 12) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(items.length);
  
  useEffect(() => {
    setTotalItems(items.length);
    // Reset to page 1 if we're on a page that no longer exists
    const maxPage = Math.ceil(items.length / itemsPerPage);
    if (currentPage > maxPage) {
      setCurrentPage(1);
    }
  }, [items.length, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log('Pagination debug:', {
    totalItems,
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
    totalItems
  };
};
