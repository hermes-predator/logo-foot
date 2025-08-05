
import React, { useEffect, useState, useMemo } from 'react';
import { useLazyLoading } from '@/hooks/useLazyLoading';
import { useImageOptimization } from '@/hooks/useImageOptimization';
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
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width = 800,
  height = 800,
  aspectRatio = 1,
  priority = false,
  objectFit = 'cover',
  quality = 80,
}: OptimizedImageProps) {
  const { isInView, imgRef } = useLazyLoading();
  const [isLoaded, setIsLoaded] = useState(priority);
  const [error, setError] = useState(false);
  
  // Utilisation du nouveau hook d'optimisation avec WebP automatique
  const { optimizedSrc, supportsWebP, isOptimized } = useImageOptimization({
    src,
    width,
    height,
    quality,
    format: 'auto' // Conversion automatique WebP si supporté
  });
  
  // Générer le srcSet pour différentes tailles d'écran
  const { srcSet, sizes } = useMemo(() => 
    generateSrcSet(optimizedSrc, [320, 640, 768, 1024, 1280, 1536, width], quality),
  [optimizedSrc, width, quality]);

  // Performance monitoring avec info sur l'optimisation
  useEffect(() => {
    if (isLoaded && window.performance && window.performance.mark) {
      window.performance.mark(`image-loaded-${src}`);
      
      // Log des optimisations appliquées
      if (isOptimized) {
        console.debug(`Image optimized: ${src} → ${optimizedSrc}`, {
          webpSupport: supportsWebP,
          originalSize: width + 'x' + height,
          quality: quality
        });
      }
    }
  }, [isLoaded, src, optimizedSrc, isOptimized, supportsWebP, width, height, quality]);

  const handleLoad = () => {
    setIsLoaded(true);
    
    if (window.performance && window.performance.mark) {
      window.performance.mark(`image-loaded-${src.split('/').pop()}`);
    }
  };

  const handleError = () => {
    console.error(`Failed to load image: ${optimizedSrc}`);
    setError(true);
    setIsLoaded(true);
  };

  const shouldLoad = priority || isInView;

  return (
    <div className="relative overflow-hidden protected-content">
      <AspectRatio ratio={aspectRatio} className="bg-gray-900/95">
        {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
        {error ? (
          <div className="flex items-center justify-center w-full h-full bg-gray-900/95 text-muted-foreground">
            <span className="text-sm">Image unavailable</span>
          </div>
        ) : (
          <>
            {/* Préchargement pour les images prioritaires */}
            {priority && <link rel="preload" as="image" href={optimizedSrc} />}
            
            <img
              ref={(el) => {
                imgRef.current = el;
                if (el && priority) {
                  el.setAttribute('fetchpriority', 'high');
                }
              }}
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
