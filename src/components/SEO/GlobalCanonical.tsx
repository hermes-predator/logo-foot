
import React from 'react';
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
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Les balises hreflang sont particulièrement importantes pour la page d'accueil */}
      {isHomepage && (
        <>
          <link rel="alternate" href={canonicalUrl} hreflang="fr" />
          <link rel="alternate" href={`${baseUrl}/en`} hreflang="en" />
          <link rel="alternate" href={`${baseUrl}/ar`} hreflang="ar" />
          <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        </>
      )}
    </Helmet>
  );
};

export default GlobalCanonical;
