
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface BlogCanonicalProps {
  category?: string;
  page?: number;
  totalPages?: number;
  baseUrl?: string;
}

/**
 * Composant pour gérer les balises canoniques spécifiques aux pages de blog
 * Gère les différents cas: page principale, catégories, pagination
 */
const BlogCanonical: React.FC<BlogCanonicalProps> = ({
  category,
  page = 1,
  totalPages,
  baseUrl = 'https://www.logo-foot.com'
}) => {
  useLocation();
  
  // Déterminer l'URL canonique en fonction du contexte (utilise des query params réels)
  let canonicalUrl = `${baseUrl}/blog`;
  
  // Si une catégorie est spécifiée, utiliser ?category= pour correspondre au routage réel
  if (category) {
    canonicalUrl += `?category=${encodeURIComponent(category)}`;
  }
  
  // Si c'est une page de pagination autre que la première
  if (page > 1) {
    const delimiter = canonicalUrl.includes('?') ? '&' : '?';
    canonicalUrl += `${delimiter}page=${page}`;
  }
  
  // Pour les URLs alternatives (pagination), générer les balises prev/next
  let prevUrl;
  let nextUrl;
  
  if (page > 1) {
    prevUrl = page === 2 
      ? canonicalUrl.replace(/[?&]page=2/, '') 
      : canonicalUrl.replace(/page=\d+/, `page=${page - 1}`);
  }
  
  // Générer next uniquement si on n'est pas à la dernière page (si connue)
  if (typeof totalPages === 'number') {
    if (page < totalPages) {
      nextUrl = canonicalUrl.includes('page=')
        ? canonicalUrl.replace(/page=\d+/, `page=${page + 1}`)
        : `${canonicalUrl}${canonicalUrl.includes('?') ? '&' : '?'}page=${page + 1}`;
    }
  } else {
    nextUrl = canonicalUrl.replace(/page=\d+/, `page=${page + 1}`);
  }
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {prevUrl && <link rel="prev" href={prevUrl} />}
      {nextUrl && <link rel="next" href={nextUrl} />}
      
      {/* Empêcher l'indexation des pages de pagination sauf la première */}
      {page > 1 && <meta name="robots" content="noindex,follow" />}
      
      <link rel="alternate" href={canonicalUrl} hrefLang="fr" />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
    </Helmet>
  );
};

export default BlogCanonical;
