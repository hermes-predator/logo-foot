
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '../../types/blog';
import { BLOG_CATEGORIES } from '../../types/blog';

interface EnhancedOpenGraphProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'blog' | 'product';
  siteName?: string;
  locale?: string;
  post?: BlogPost;
  baseUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
}

/**
 * Composant pour générer des métadonnées OpenGraph enrichies
 * Améliore le partage sur les réseaux sociaux et optimise le SEO
 */
const EnhancedOpenGraph: React.FC<EnhancedOpenGraphProps> = ({
  title,
  description,
  url,
  image,
  type = 'website',
  siteName = 'Logo Foot',
  locale = 'fr_FR',
  post,
  baseUrl = 'https://www.logo-foot.com',
  twitterCard = 'summary_large_image',
  twitterSite = '@logofoot'
}) => {
  const currentYear = new Date().getFullYear();
  
  // Si un article de blog est fourni, extraire les métadonnées spécifiques
  let metaTitle = title;
  let metaDescription = description;
  let metaUrl = url;
  let metaImage = image;
  let metaType = type;
  let articleTags: string[] = [];
  let articleSection = '';
  let articlePublishedTime = '';
  let articleModifiedTime = '';
  
  if (post) {
    // Titre optimisé avec l'année courante
    metaTitle = `${post.title} | Guide Expert Logo Foot ${currentYear}`;
    
    // Description enrichie avec plus de mots-clés
    const mainSubject = post.title.split(' : ')[0];
    metaDescription = `${post.excerpt} Guide complet sur ${mainSubject} mis à jour en ${currentYear}. Histoire, analyse et évolution du ${post.keywords?.split(',')[0] || mainSubject}. Tout savoir sur les logos, écussons et emblèmes du football.`;
    
    // URL canonique de l'article
    metaUrl = `${baseUrl}/blog/${post.id}`;
    
    // Image pour les aperçus dans les réseaux sociaux
    metaImage = post.galleryImageId 
      ? `${baseUrl}/blog-images/${post.id}.png` 
      : `${baseUrl}/og-image.png`;
    
    // Type de contenu spécifique
    metaType = 'article';
    
    // Tags de l'article pour les réseaux sociaux
    articleTags = post.keywords ? post.keywords.split(',').map(tag => tag.trim()) : [];
    
    // Section de l'article
    articleSection = BLOG_CATEGORIES[post.category]?.name || '';
    
    // Dates de publication et de modification
    articlePublishedTime = post.date;
    articleModifiedTime = post.date;
  }

  return (
    <Helmet>
      {/* Métadonnées OpenGraph de base */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content={metaType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Métadonnées alternatives pour les locales */}
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="ar_AR" />
      
      {/* Métadonnées OpenGraph spécifiques aux articles */}
      {metaType === 'article' && (
        <>
          <meta property="article:published_time" content={articlePublishedTime} />
          <meta property="article:modified_time" content={articleModifiedTime} />
          <meta property="article:section" content={articleSection} />
          {articleTags.slice(0, 8).map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          <meta property="article:author" content={`${baseUrl}`} />
          <meta property="article:publisher" content={`${baseUrl}`} />
        </>
      )}
      
      {/* Métadonnées pour Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:url" content={metaUrl} />
      
      {/* Métadonnées supplémentaires pour enrichir le partage */}
      {metaImage && (
        <>
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={metaTitle} />
          <meta property="og:image:type" content="image/png" />
        </>
      )}
    </Helmet>
  );
};

export default EnhancedOpenGraph;
