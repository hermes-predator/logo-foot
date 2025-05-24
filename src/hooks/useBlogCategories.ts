
import { useMemo } from 'react';
import { BLOG_CATEGORIES, BlogCategory } from '../types/blog';

export const useBlogCategories = (currentCategory?: string | null) => {
  const availableCategories = useMemo(() => {
    return Object.entries(BLOG_CATEGORIES).filter(([key]) => key !== 'legacy');
  }, []);

  const currentCategoryInfo = useMemo(() => {
    if (!currentCategory) return null;
    return BLOG_CATEGORIES[currentCategory as BlogCategory];
  }, [currentCategory]);

  const currentCategoryDescription = useMemo(() => {
    return currentCategoryInfo?.description || 
      "Découvrez notre collection d'articles sur les logos du football mondial, des analyses et des conseils techniques.";
  }, [currentCategoryInfo]);

  return {
    availableCategories,
    currentCategoryInfo,
    currentCategoryDescription
  };
};
