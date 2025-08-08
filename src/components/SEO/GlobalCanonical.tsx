
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Composant pour gérer les balises canoniques globales du site
 * À utiliser dans les composants de mise en page partagés
 */
const GlobalCanonical: React.FC = () => {
  const { pathname } = useLocation();
  const baseUrl = 'https://logo-foot.com';
  
  // Normalisation du chemin (suppression du slash final si présent)
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  
  // Construire l'URL canonique
  const canonicalUrl = `${baseUrl}${normalizedPath}`;
  
  // Détecter si c'est la page d'accueil
  const isHomepage = normalizedPath === '/';
  // Éviter les doublons: ne rien rendre sur les pages d'articles de blog qui gèrent déjà leur canonical
  const isBlogPostPage = normalizedPath === '/blog' || normalizedPath.startsWith('/blog/');

  // Forcer la mise à jour du titre de la page si nécessaire
  useEffect(() => {
    const timer = setTimeout(() => {
      // S'assurer que le title est correctement mis à jour
      const titleElement = document.querySelector('title');
      if (titleElement) {
        console.log('Current page title:', titleElement.textContent);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);
  
  if (isBlogPostPage) return null;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {/* Les balises hreflang sont particulièrement importantes pour la page d'accueil */}
      {isHomepage && (
        <>
          <link rel="alternate" href={canonicalUrl} hrefLang="fr" />
          <link rel="alternate" href={`${baseUrl}/en`} hrefLang="en" />
          <link rel="alternate" href={`${baseUrl}/ar`} hrefLang="ar" />
          <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
        </>
      )}
    </Helmet>
  );
};

export default GlobalCanonical;
