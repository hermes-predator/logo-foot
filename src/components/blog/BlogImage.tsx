import React, { useEffect, useRef } from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { useImageOptimization } from '../../hooks/useImageOptimization';
import { AspectRatio } from '../ui/aspect-ratio';
import { getBlogImagePath } from '../../utils/blogImagePaths';

interface BlogImageProps {
  src?: string;
  galleryImageId?: number;
  alt: string;
  className?: string;
  isDefault?: boolean;
  width?: number;
  height?: number;
  title?: string;
  priority?: boolean;
  aspectRatio?: number;
  quality?: number;
}

const BlogImage = ({ 
  src,
  galleryImageId,
  alt, 
  className = "", 
  isDefault = false,
  width = 800,
  height = 800,
  title,
  priority = false,
  aspectRatio = 1,
  quality = 85
}: BlogImageProps) => {
  const { isInView, imgRef } = useLazyLoading();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Déterminer la source de l'image
  const imageSrc = src || (galleryImageId ? getBlogImagePath(galleryImageId) : '/placeholder.svg');
  
  // Utilisation du nouveau hook d'optimisation avec WebP automatique
  const { optimizedSrc, supportsWebP, isOptimized } = useImageOptimization({ 
    src: imageSrc, 
    width, 
    height, 
    quality, 
    format: 'auto' // Conversion automatique
  });
  
  const imageTitle = title || alt;
  const fileName = imageSrc.split('/').pop() || 'image';
  const imageId = `img-${fileName.split('.')[0]}`;

  // Extraire les dimensions pour le structured data
  const imageDimensions = {
    width: width || 800,
    height: height || 600
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    container.addEventListener('dragstart', handleDrag as any);
    container.addEventListener('contextmenu', handleContextMenu);

    return () => {
      container.removeEventListener('dragstart', handleDrag as any);
      container.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Mesurer les performances de chargement avec info d'optimisation
  useEffect(() => {
    if (isInView && typeof window !== 'undefined') {
      if (window.performance && window.performance.mark) {
        window.performance.mark(`image-visible-${imageId}`);
      }

      // Log des optimisations pour le debug
      if (isOptimized) {
        console.debug(`Blog image optimized: ${imageSrc} → ${optimizedSrc}`, {
          webpSupport: supportsWebP,
          quality: quality
        });
      }

      // Report to Largest Contentful Paint if this is an important image
      if (priority && 'LargestContentfulPaint' in window) {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          // Log LCP information for this image
          console.debug(`LCP candidate: ${imageId}, time: ${lastEntry.startTime}`);
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
      }
    }
  }, [isInView, imageId, priority, imageSrc, optimizedSrc, isOptimized, supportsWebP, quality]);

  // Préchargement pour les images prioritaires
  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedSrc;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, optimizedSrc]);

  return (
    <div 
      className="protected-content" 
      itemScope 
      itemType="https://schema.org/ImageObject" 
      ref={containerRef}
      id={imageId}
      data-testid="blog-image"
    >
      <AspectRatio ratio={aspectRatio} className="overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          ref={(el) => {
            imgRef.current = el;
            if (el && priority) {
              el.setAttribute('fetchpriority', 'high');
            }
          }}
          src={isInView || priority ? optimizedSrc : '/placeholder.svg'}
          alt={alt}
          title={imageTitle}
          width={imageDimensions.width}
          height={imageDimensions.height}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${isDefault ? 'opacity-90' : ''} ${className}`}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          itemProp="contentUrl"
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
        />
      </AspectRatio>
      <meta itemProp="width" content={imageDimensions.width.toString()} />
      <meta itemProp="height" content={imageDimensions.height.toString()} />
      <meta itemProp="name" content={imageTitle} />
      <meta itemProp="description" content={alt} />
      <meta itemProp="representativeOfPage" content={isDefault ? "true" : "false"} />
      <meta itemProp="encodingFormat" content={optimizedSrc.toLowerCase().endsWith('.png') ? "image/png" : "image/webp"} />
      <meta itemProp="uploadDate" content={new Date().toISOString()} />
      <meta itemProp="copyrightYear" content={new Date().getFullYear().toString()} />
      
      {isDefault && (
        <p className="mt-2 text-xs text-gray-500 text-center italic" itemProp="caption">{alt}</p>
      )}
    </div>
  );
};

export default BlogImage;
