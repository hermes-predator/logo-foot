
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Délai plus long pour les articles de blog individuels
    const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';
    // Délai spécifique pour les changements de catégorie sur la page blog
    const isCategoryChange = location.pathname === '/blog' && location.search;
    // Pas de délai pour la navigation vers la page blog principale (sans paramètres)
    const isBlogMainPage = location.pathname === '/blog' && !location.search;
    
    let delay = 600; // délai par défaut
    if (isBlogPost) {
      delay = 1000;
    } else if (isCategoryChange) {
      delay = 800; // délai spécifique pour les catégories
    } else if (isBlogMainPage) {
      delay = 0; // pas de délai pour la page blog principale
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
    isCategoryChange: location.pathname === '/blog' && location.search,
    skipTransition: location.pathname === '/blog' && !location.search
  };
};
