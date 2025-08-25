
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant pour gérer la mise à jour des meta tags lors de la navigation
 * Force le nettoyage et la mise à jour des meta tags
 */
const MetaTagsManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Forcer la mise à jour du titre et meta description lors du changement de route
    const timer = setTimeout(() => {
      // Vérifier si on est sur la page d'accueil
      if (location.pathname === '/') {
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.textContent !== 'Logo Foot | Fichier +8700 Logos des Clubs de Football') {
          // Forcer le titre de la page d'accueil
          document.title = 'Logo Foot | Fichier +8700 Logos des Clubs de Football';
        }
        
        // Forcer la meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        const expectedDescription = "Téléchargez tous les logos des clubs de foot en une fois · Tous les logos des équipes de foot nommés et classés par pays · 8 774 logos classés · Format PNG.";
        if (metaDescription && metaDescription.getAttribute('content') !== expectedDescription) {
          metaDescription.setAttribute('content', expectedDescription);
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default MetaTagsManager;
