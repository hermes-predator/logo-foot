
import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';

export const usePagination = (items: BlogPost[], itemsPerPage: number = 9) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState<BlogPost[]>([]);
  
  // Calculate total pages safely
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  
  // Update current page if it's out of bounds after items change
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [items, totalPages, currentPage]);
  
  // Update paginated items whenever dependencies change
  useEffect(() => {
    // Ensure current page is valid
    const validCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
    
    // Calculate paginated items
    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    
    // Safely slice the array
    const newPaginatedItems = items.slice(startIndex, endIndex);
    setPaginatedItems(newPaginatedItems);
    
    // Debug logging
    console.log('Pagination calculated:', {
      totalItems: items.length,
      itemsPerPage,
      currentPage: validCurrentPage,
      totalPages,
      startIndex,
      endIndex,
      displayedItemsCount: newPaginatedItems.length
    });
    
    // Log first and last displayed items for debugging
    if (newPaginatedItems.length > 0) {
      console.log('First displayed item:', {
        id: newPaginatedItems[0].id,
        title: newPaginatedItems[0].title
      });
      
      console.log('Last displayed item:', {
        id: newPaginatedItems[newPaginatedItems.length - 1].id,
        title: newPaginatedItems[newPaginatedItems.length - 1].title
      });
    }
  }, [items, currentPage, totalPages, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems: items.length
  };
};
