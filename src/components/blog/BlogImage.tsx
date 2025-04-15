
import React, { useEffect, useRef } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const imageTitle = title || alt;
  const fileName = src.split('/').pop() || 'image';

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

  return (
    <div className="my-5 protected-content" itemScope itemType="https://schema.org/ImageObject" ref={containerRef}>
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
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
        />
      </AspectRatio>
      <p className="mt-1 text-xs text-gray-500 text-center italic" itemProp="caption">{alt}</p>
      <meta itemProp="name" content={imageTitle} />
      <meta itemProp="description" content={alt} />
      <meta itemProp="representativeOfPage" content={isDefault ? "false" : "true"} />
    </div>
  );
};

export default BlogImage;
