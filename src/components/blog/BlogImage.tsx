
import React from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { AspectRatio } from '../ui/aspect-ratio';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  isDefault?: boolean;
  width?: number;
  height?: number;
  title?: string;
}

const BlogImage = ({ 
  src, 
  alt, 
  className = "", 
  isDefault = false,
  width = 800,
  height = 800,
  title
}: BlogImageProps) => {
  const { isInView, imgRef } = useLazyLoading();
  
  // Ensure we have a proper title attribute for SEO
  const imageTitle = title || alt;
  
  // Extract the file name from the src for structured data
  const fileName = src.split('/').pop() || 'image';

  return (
    <div className="my-8" itemScope itemType="https://schema.org/ImageObject">
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg shadow-md">
        <img
          ref={imgRef}
          src={isInView ? src : '/placeholder.svg'}
          alt={alt}
          title={imageTitle}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${isDefault ? 'opacity-90' : ''} ${className}`}
          loading="lazy"
          itemProp="contentUrl"
        />
      </AspectRatio>
      <p className="mt-2 text-sm text-gray-500 text-center italic" itemProp="caption">{alt}</p>
      <meta itemProp="name" content={imageTitle} />
      <meta itemProp="description" content={alt} />
      <meta itemProp="representativeOfPage" content={isDefault ? "false" : "true"} />
    </div>
  );
};

export default BlogImage;
