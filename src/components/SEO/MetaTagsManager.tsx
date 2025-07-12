
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant pour gérer la mise à jour des meta tags lors de la navigation
 * Force le nettoyage et la mise à jour des meta tags
 */
const MetaTagsManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Forcer la mise à jour du titre lors du changement de route
    const timer = setTimeout(() => {
      // Vérifier si on est sur la page d'accueil
      if (location.pathname === '/') {
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.textContent !== 'Logo Foot | Fichier +8600 Logos des Clubs de Football') {
          // Forcer le titre de la page d'accueil
          document.title = 'Logo Foot | Fichier +8600 Logos des Clubs de Football';
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default MetaTagsManager;
