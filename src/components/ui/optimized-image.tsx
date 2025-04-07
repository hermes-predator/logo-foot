
import React, { useEffect, useState, useMemo } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(priority);
  const [error, setError] = useState(false);
  
  // Resize and optimize image URL if it's on our domain
  const optimizedSrc = useMemo(() => {
    if (src.startsWith('/') || src.includes('logo-foot.com')) {
      // Add query params to resize image if it's our own
      return `${src}${src.includes('?') ? '&' : '?'}w=${width}&quality=80`;
    }
    return src;
  }, [src, width]);

  // Generate webp version if the image is not already a webp
  const isWebP = optimizedSrc.toLowerCase().endsWith('.webp');
  const imgSrc = isWebP ? optimizedSrc : optimizedSrc;
  
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
    setIsLoaded(true); // Consider it "loaded" to remove skeleton
  };

  // Add protection against screen capture
  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    // Ajouter un watermark dynamique à l'image si nécessaire
    // Ceci est juste une fonction de démonstration, le vrai watermark serait fait côté serveur
    const addWatermark = () => {
      // Cette fonction pourrait être implémentée pour ajouter un watermark via canvas
      // mais idéalement le watermark devrait être ajouté côté serveur
    };

    if (isInView) {
      addWatermark();
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
          <img
            ref={imgRef}
            src={shouldLoad ? imgSrc : '/placeholder.svg'}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
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
