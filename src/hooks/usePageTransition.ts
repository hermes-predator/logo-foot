
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Délai plus long pour les articles de blog individuels
    const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, isBlogPost ? 1000 : 600);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading
  };
};
