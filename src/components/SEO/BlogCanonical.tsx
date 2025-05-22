
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface BlogCanonicalProps {
  category?: string;
  page?: number;
  baseUrl?: string;
  post?: any; // Make post optional to fix type error
}

/**
 * Composant pour gérer les balises canoniques spécifiques aux pages de blog
 * Gère les différents cas: page principale, catégories, pagination
 */
const BlogCanonical: React.FC<BlogCanonicalProps> = ({
  category,
  page = 1,
  baseUrl = 'https://logo-foot.com',
  post // Added post parameter
}) => {
  const { pathname, search } = useLocation();
  
  // Déterminer l'URL canonique en fonction du contexte
  let canonicalUrl = `${baseUrl}/blog`;
  
  // Si une catégorie est spécifiée
  if (category) {
    canonicalUrl += `/category/${category}`;
  }
  
  // Si c'est une page de pagination autre que la première
  if (page > 1) {
    // Si l'URL utilise déjà des paramètres query string
    if (search && !search.includes('page=')) {
      canonicalUrl += `${search}&page=${page}`;
    } 
    // Si l'URL n'a pas de query string
    else if (!search) {
      canonicalUrl += `?page=${page}`;
    }
    // Si l'URL a déjà un paramètre page, on ne fait rien car la page actuelle
    // devrait rediriger vers la version canonique
  }
  
  // Pour les URLs alternatives (pagination), générer les balises prev/next
  let prevUrl;
  let nextUrl;
  
  if (page > 1) {
    prevUrl = page === 2 
      ? canonicalUrl.replace(/[?&]page=2/, '') 
      : canonicalUrl.replace(/page=\d+/, `page=${page - 1}`);
  }
  
  // La valeur nextUrl est hypothétique - dans un cas réel, on vérifierait s'il y a une page suivante
  nextUrl = canonicalUrl.replace(/page=\d+/, `page=${page + 1}`);
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {prevUrl && <link rel="prev" href={prevUrl} />}
      {nextUrl && <link rel="next" href={nextUrl} />}
      
      <link rel="alternate" href={canonicalUrl} hrefLang="fr" />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
    </Helmet>
  );
};

export default BlogCanonical;
