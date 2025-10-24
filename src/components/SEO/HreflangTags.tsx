
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface HreflangTagsProps {
  languages?: Array<{code: string, url?: string}>;
  defaultLanguage?: string;
}

/**
 * Composant pour gérer les balises hreflang
 * Améliore le référencement international en indiquant les versions linguistiques alternatives
 */
const HreflangTags: React.FC<HreflangTagsProps> = ({ 
  languages = [
    {code: 'fr'}, 
    {code: 'en'}, 
    {code: 'ar'}
  ],
  defaultLanguage = 'fr'
}) => {
  const { pathname } = useLocation();
  const baseUrl = 'https://www.logo-foot.com';
  
  // Normalisation du chemin (suppression du slash final si présent)
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  
  // Création des URLs pour chaque langue
  const hreflangUrls = languages.map(lang => {
    // Si une URL spécifique est fournie, l'utiliser, sinon construire l'URL en fonction de la langue
    const langPath = lang.url || (lang.code === defaultLanguage ? normalizedPath : `/${lang.code}${normalizedPath}`);
    return {
      code: lang.code,
      url: lang.url || `${baseUrl}${langPath}`
    };
  });

  // Ajout de l'URL x-default (celle de la langue par défaut)
  const defaultUrl = hreflangUrls.find(lang => lang.code === defaultLanguage)?.url || `${baseUrl}${normalizedPath}`;
  
  return (
    <Helmet>
      {hreflangUrls.map((lang, index) => (
        <link 
          key={index} 
          rel="alternate" 
          href={lang.url} 
          hrefLang={lang.code} 
        />
      ))}
      <link rel="alternate" href={defaultUrl} hrefLang="x-default" />
    </Helmet>
  );
};

export default HreflangTags;
