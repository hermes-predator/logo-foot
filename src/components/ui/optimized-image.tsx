
import React from 'react';
import { useLazyLoading } from '@/hooks/useLazyLoading';
import { AspectRatio } from './aspect-ratio';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export function OptimizedImage({
  src,
  alt,
  className,
  width = 800,
  height = 800,
  aspectRatio = 16 / 9,
  priority = false,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const { isInView, imgRef } = useLazyLoading();
  const [isLoaded, setIsLoaded] = React.useState(priority);
  const [error, setError] = React.useState(false);

  // Generate webp version if the image is not already a webp
  const isWebP = src.toLowerCase().endsWith('.webp');
  const imgSrc = isWebP ? src : src;
  
  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
    setIsLoaded(true); // Consider it "loaded" to remove skeleton
  };

  // If the image is priority, we want to load it right away
  const shouldLoad = priority || isInView;

  return (
    <div className="relative overflow-hidden">
      <AspectRatio ratio={aspectRatio} className="bg-muted/20">
        {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
        {error ? (
          <div className="flex items-center justify-center w-full h-full bg-muted/30 text-muted-foreground">
            <span className="text-sm">Image unavailable</span>
          </div>
        ) : (
          <img
            ref={imgRef}
            src={shouldLoad ? imgSrc : '/placeholder.svg'}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              `w-full h-full transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`,
              `object-${objectFit}`,
              className
            )}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
          />
        )}
      </AspectRatio>
    </div>
  );
}
