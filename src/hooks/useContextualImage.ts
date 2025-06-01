
import { useMemo } from 'react';
import { getBlogImagePath, getGalleryImagePath } from '../utils/blogImagePaths';

interface UseContextualImageProps {
  imageId?: number;
  customSrc?: string;
  context?: 'blog' | 'gallery';
}

export const useContextualImage = ({ 
  imageId, 
  customSrc, 
  context = 'blog' 
}: UseContextualImageProps) => {
  const imageSrc = useMemo(() => {
    if (customSrc) return customSrc;
    if (!imageId) return '/placeholder.svg';
    
    return context === 'blog' 
      ? getBlogImagePath(imageId) 
      : getGalleryImagePath(imageId);
  }, [customSrc, imageId, context]);

  const isValidImage = useMemo(() => {
    return !!(customSrc || imageId);
  }, [customSrc, imageId]);

  return {
    imageSrc,
    isValidImage
  };
};
