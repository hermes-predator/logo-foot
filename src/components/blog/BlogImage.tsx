
import React from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { AspectRatio } from '../ui/aspect-ratio';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  isDefault?: boolean;
}

const BlogImage = ({ src, alt, className = "", isDefault = false }: BlogImageProps) => {
  const { isInView, imgRef } = useLazyLoading();

  return (
    <div className="my-8">
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg shadow-md">
        <img
          ref={imgRef}
          src={isInView ? src : '/placeholder.svg'}
          alt={alt}
          className={`w-full h-full object-cover ${isDefault ? 'opacity-90' : ''} ${className}`}
          loading="lazy"
        />
      </AspectRatio>
      <p className="mt-2 text-sm text-gray-500 text-center italic">{alt}</p>
    </div>
  );
};

export default BlogImage;
