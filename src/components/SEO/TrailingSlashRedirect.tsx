import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Composant pour forcer une cohérence des URLs (avec ou sans trailing slash)
 * Redirige automatiquement pour éviter les contenus dupliqués
 */
const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    
    // Ne rien faire pour les routes spéciales ou fichiers
    if (
      pathname === '/' ||
      pathname.includes('.') ||
      pathname.endsWith('/') ||
      pathname.startsWith('/blog/') // Les articles de blog ont leur propre gestion
    ) {
      return;
    }

    // Si l'URL n'a pas de trailing slash et devrait en avoir
    // (pour /blog, /payment, etc.)
    const shouldHaveTrailingSlash = ['/blog', '/payment'].includes(pathname);
    
    if (shouldHaveTrailingSlash) {
      const newPath = `${pathname}/${search}${hash}`;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default TrailingSlashRedirect;
