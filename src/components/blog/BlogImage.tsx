
import React, { useEffect, useRef } from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { AspectRatio } from '../ui/aspect-ratio';
import { useImageOptimization } from '../../hooks/useImageOptimization';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  isDefault?: boolean;
  width?: number;
  height?: number;
  title?: string;
  priority?: boolean;
}

const BlogImage = ({ 
  src, 
  alt, 
  className = "", 
  isDefault = false,
  width = 800,
  height = 800,
  title,
  priority = false
}: BlogImageProps) => {
  const { isInView, imgRef } = useLazyLoading();
  const containerRef = useRef<HTMLDivElement>(null);
  const { optimizedSrc } = useImageOptimization({ 
    src, 
    width, 
    height, 
    quality: 80, 
    format: 'webp' 
  });
  
  const imageTitle = title || alt;
  const fileName = src.split('/').pop() || 'image';
  const imageId = `img-${fileName.split('.')[0]}`;

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

  // Mesurer les performances de chargement
  useEffect(() => {
    if (isInView && typeof window !== 'undefined') {
      // Marquer le temps de chargement pour les Core Web Vitals
      if (window.performance && window.performance.mark) {
        window.performance.mark(`image-visible-${imageId}`);
      }
    }
  }, [isInView, imageId]);

  // Préchargement pour les images prioritaires
  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedSrc;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, optimizedSrc]);

  return (
    <div 
      className="my-5 protected-content" 
      itemScope 
      itemType="https://schema.org/ImageObject" 
      ref={containerRef}
      id={imageId}
    >
      <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-md">
        <img
          ref={imgRef}
          src={isInView || priority ? optimizedSrc : '/placeholder.svg'}
          alt={alt}
          title={imageTitle}
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isInView ? 'opacity-100' : 'opacity-0'
          } ${isDefault ? 'opacity-90' : ''} ${className}`}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          itemProp="contentUrl"
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
        />
      </AspectRatio>
      <meta itemProp="width" content={width.toString()} />
      <meta itemProp="height" content={height.toString()} />
      <meta itemProp="name" content={imageTitle} />
      <meta itemProp="description" content={alt} />
      <meta itemProp="representativeOfPage" content={isDefault ? "false" : "true"} />
      <p className="mt-1 text-xs text-gray-500 text-center italic" itemProp="caption">{alt}</p>
    </div>
  );
};

export default BlogImage;
