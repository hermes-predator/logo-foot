import { useState, useEffect } from 'react';
import { GalleryItem } from '../types/gallery';

export const useGalleryPagination = (items: GalleryItem[], itemsPerPage: number = 12) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState<GalleryItem[]>([]);
  
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
  }, [items, currentPage, totalPages, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems: items.length
  };
};