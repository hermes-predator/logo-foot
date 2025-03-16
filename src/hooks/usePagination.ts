
import { useState } from 'react';
import { BlogPost } from '../types/blog';

export const ITEMS_PER_PAGE = 6;

export const usePagination = (items: BlogPost[], category?: BlogPost['category']) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredItems = category 
    ? items.filter(item => item.category === category)
    : items;
    
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems: filteredItems.length
  };
};
