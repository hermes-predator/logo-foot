
import { useMemo } from 'react';

interface UseImageOptimizationProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'original';
}

export const useImageOptimization = ({
  src,
  width = 800,
  height,
  quality = 80,
  format = 'original'
}: UseImageOptimizationProps) => {
  const optimizedSrc = useMemo(() => {
    // Si c'est une URL externe ou un chemin absolut, on ne fait rien
    if (!src || src.startsWith('http') && !src.includes('logo-foot.com')) {
      return src;
    }

    // Construction de l'URL optimisée pour notre CDN ou serveur d'images
    let optimizedUrl = src;
    const params = new URLSearchParams();

    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    
    // Conversion de format si demandée
    if (format !== 'original') {
      params.append('fmt', format);
    }
    
    // Ajout des paramètres à l'URL
    const separator = src.includes('?') ? '&' : '?';
    optimizedUrl = `${src}${separator}${params.toString()}`;

    return optimizedUrl;
  }, [src, width, height, quality, format]);

  return { optimizedSrc };
};
