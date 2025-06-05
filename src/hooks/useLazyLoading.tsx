
import { useRef, useEffect, useState } from 'react';

export const useLazyLoading = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Désabonner une fois que l'image est chargée
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    // Observer l'élément actuel seulement s'il existe
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      // Vérifier si la référence existe avant de désabonner
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [imgRef.current]); // Ajouter imgRef.current comme dépendance

  return { isInView, imgRef };
};
