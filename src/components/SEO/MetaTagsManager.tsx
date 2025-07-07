
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant pour gérer la mise à jour des meta tags lors de la navigation
 * Force le nettoyage et la mise à jour des meta tags
 */
const MetaTagsManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Forcer la mise à jour des meta tags lors du changement de route
    const updateMetaTags = () => {
      // Nettoyer les anciens meta tags dynamiques
      const existingMetas = document.querySelectorAll('meta[data-react-helmet]');
      existingMetas.forEach(meta => {
        if (meta.getAttribute('name') === 'description' || 
            meta.getAttribute('property') === 'og:title' ||
            meta.getAttribute('property') === 'og:description' ||
            meta.getAttribute('name') === 'twitter:title' ||
            meta.getAttribute('name') === 'twitter:description') {
          // Ne pas supprimer, laisser react-helmet-async gérer
        }
      });

      // Forcer un re-render des meta tags
      const titleElement = document.querySelector('title');
      if (titleElement && titleElement.getAttribute('data-react-helmet') === 'true') {
        // Trigger une mise à jour
        const event = new Event('helmet-update');
        document.dispatchEvent(event);
      }
    };

    // Petit délai pour s'assurer que les composants sont montés
    const timer = setTimeout(updateMetaTags, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default MetaTagsManager;
