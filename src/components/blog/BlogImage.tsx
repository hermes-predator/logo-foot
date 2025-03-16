
import React from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlogImage = ({ src, alt, className = "" }: BlogImageProps) => {
  const { isInView, imgRef } = useLazyLoading();

  return (
    <div className="my-8">
      <img
        ref={imgRef}
        src={isInView ? src : '/placeholder.svg'}
        alt={alt}
        className={`w-full rounded-lg shadow-md ${className}`}
        loading="lazy"
      />
      <p className="mt-2 text-sm text-gray-500 text-center italic">{alt}</p>
    </div>
  );
};

export default BlogImage;
