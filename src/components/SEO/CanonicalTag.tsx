
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CanonicalTagProps {
  url?: string;
  isDefault?: boolean;
}

/**
 * Composant pour ajouter une balise canonique à une page
 * Aide à prévenir les problèmes de contenu dupliqué pour le SEO
 */
const CanonicalTag: React.FC<CanonicalTagProps> = ({ 
  url, 
  isDefault = false 
}) => {
  // Construit l'URL canonique en utilisant soit l'URL fournie, soit l'URL actuelle
  const baseUrl = 'https://www.logo-foot.com';
  const currentPath = window.location.pathname;
  
  // Si aucune URL n'est fournie, utiliser l'URL actuelle
  // Sinon, vérifier si l'URL fournie est relative ou absolue
  const canonicalUrl = !url 
    ? `${baseUrl}${currentPath}` 
    : url.startsWith('http') 
      ? url 
      : `${baseUrl}${url}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Ajouter des balises hreflang si nécessaire pour le contenu multilingue */}
      {isDefault && (
        <>
          <link rel="alternate" href={canonicalUrl} hrefLang="fr" />
          <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
        </>
      )}
    </Helmet>
  );
};

export default CanonicalTag;
