
import React, { useEffect, useState, useMemo } from 'react';
import { useLazyLoading } from '@/hooks/useLazyLoading';
import { AspectRatio } from './aspect-ratio';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';
import { generateSrcSet } from '@/lib/core-web-vitals';

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
  aspectRatio = 1, // Changé de 16/9 à 1 (carré)
  priority = false,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const { isInView, imgRef } = useLazyLoading();
  const [isLoaded, setIsLoaded] = useState(priority);
  const [error, setError] = useState(false);
  
  // Générer le srcSet pour différentes tailles d'écran
  const { srcSet, sizes } = useMemo(() => 
    generateSrcSet(src, [320, 640, 768, 1024, 1280, 1536, width], 80),
  [src, width]);
  
  // Optimize image URL with size and format parameters
  const optimizedSrc = useMemo(() => {
    if (src.startsWith('/') || src.includes('logo-foot.com')) {
      const params = new URLSearchParams();
      params.append('w', width.toString());
      params.append('q', '80');
      params.append('auto', 'format');
      
      // Add WebP support if available
      if (window.navigator.userAgent.includes('Chrome') || 
          window.navigator.userAgent.includes('Firefox') || 
          window.navigator.userAgent.includes('Safari')) {
        params.append('fm', 'webp');
      }
      
      const separator = src.includes('?') ? '&' : '?';
      return `${src}${separator}${params.toString()}`;
    }
    return src;
  }, [src, width]);

  // Performance monitoring
  useEffect(() => {
    if (isLoaded && window.performance && window.performance.mark) {
      window.performance.mark(`image-loaded-${src}`);
      
      // Report to analytics if needed
      if (window.performance.getEntriesByName) {
        const loadTime = window.performance.getEntriesByName(`image-loaded-${src}`)[0]?.duration;
        if (loadTime && loadTime > 3000) {
          console.warn(`Slow image load (${loadTime}ms):`, src);
        }
      }
    }
  }, [isLoaded, src]);

  const handleLoad = () => {
    setIsLoaded(true);
    
    // Report to analytics
    if (window.performance && window.performance.mark) {
      window.performance.mark(`image-loaded-${src.split('/').pop()}`);
    }
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
    setIsLoaded(true);
  };

  // Add protection against screen capture
  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    if (isInView) {
      // Protection logic here if needed
    }
  }, [isInView, imgRef]);

  // If the image is priority, we want to load it right away
  const shouldLoad = priority || isInView;

  return (
    <div className="relative overflow-hidden protected-content">
      <AspectRatio ratio={aspectRatio} className="bg-muted/20">
        {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
        {error ? (
          <div className="flex items-center justify-center w-full h-full bg-muted/30 text-muted-foreground">
            <span className="text-sm">Image unavailable</span>
          </div>
        ) : (
          <>
            {/* Préchargement pour les images prioritaires */}
            {priority && <link rel="preload" as="image" href={optimizedSrc} />}
            
            <img
              ref={imgRef}
              src={shouldLoad ? optimizedSrc : '/placeholder.svg'}
              srcSet={shouldLoad ? srcSet : ''}
              sizes={sizes}
              alt={alt}
              width={width}
              height={height}
              onLoad={handleLoad}
              onError={handleError}
              loading={priority ? 'eager' : 'lazy'}
              decoding={priority ? 'sync' : 'async'}
              fetchPriority={priority ? 'high' : 'auto'}
              className={cn(
                `w-full h-full transition-opacity duration-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`,
                `object-${objectFit}`,
                className
              )}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </>
        )}
      </AspectRatio>
    </div>
  );
}
