
import { useState, useEffect } from 'react';

export const useWebPSupport = () => {
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);

  useEffect(() => {
    // Test simple et rapide pour détecter le support WebP
    const testWebP = () => {
      return new Promise<boolean>((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          resolve(webP.height === 2);
        };
        // Image WebP de test (1x1 pixel transparent)
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==';
      });
    };

    testWebP().then(setSupportsWebP);
  }, []);

  return supportsWebP;
};
