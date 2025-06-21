
import { useMemo } from 'react';
import { useWebPSupport } from './useWebPSupport';

interface UseImageOptimizationProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'auto';
}

export const useImageOptimization = ({
  src,
  width = 800,
  height,
  quality = 80,
  format = 'auto'
}: UseImageOptimizationProps) => {
  const supportsWebP = useWebPSupport();

  const optimizedSrc = useMemo(() => {
    // Si l'image n'existe pas ou est déjà externe, on ne fait rien
    if (!src || (src.startsWith('http') && !src.includes('logo-foot.com'))) {
      return src;
    }

    // Construction de l'URL optimisée
    let optimizedUrl = src;
    const params = new URLSearchParams();

    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    
    // Conversion de format intelligente
    if (format === 'auto') {
      // Si le navigateur supporte WebP et que l'image est PNG/JPEG
      if (supportsWebP && (src.toLowerCase().includes('.png') || src.toLowerCase().includes('.jpg') || src.toLowerCase().includes('.jpeg'))) {
        params.append('format', 'webp');
      }
    } else if (format !== 'original') {
      params.append('format', format);
    }
    
    // Ajout des paramètres à l'URL seulement si nécessaire
    if (params.toString()) {
      const separator = src.includes('?') ? '&' : '?';
      optimizedUrl = `${src}${separator}${params.toString()}`;
    }

    return optimizedUrl;
  }, [src, width, height, quality, format, supportsWebP]);

  return { 
    optimizedSrc,
    supportsWebP,
    isOptimized: optimizedSrc !== src
  };
};
