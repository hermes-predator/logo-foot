
import React from 'react';
import { OptimizedImage } from '../ui/optimized-image';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  hidden?: boolean;
}

export const BlogImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  hidden = false
}: BlogImageProps) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      hidden={hidden}
    />
  );
};

export default BlogImage;
