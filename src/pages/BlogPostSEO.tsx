
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import CanonicalTag from '../components/SEO/CanonicalTag';
import HreflangTags from '../components/SEO/HreflangTags';
import EnhancedOpenGraph from '../components/SEO/EnhancedOpenGraph';
import { generatePostUrl } from '../utils/slugUtils';

/**
 * Composant pour gérer uniquement le SEO d'un article de blog
 * Sépare les préoccupations de SEO du rendu UI
 */
const BlogPostSEO: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Extraire correctement l'ID numérique de l'URL
  const numericId = id ? parseInt(id.split('-')[0], 10) : 0;
  const post = blogPosts.find(post => post.id === numericId);
  const currentYear = new Date().getFullYear();
  
  // Si aucun article n'est trouvé, retourner null
  if (!post) return null;
  
  // URL canonique pour cet article spécifique - utiliser la fonction de génération d'URL
  const canonicalUrl = `https://logo-foot.com${generatePostUrl(post.id, post.title)}`;
  
  // Extraire le sujet principal du titre
  const mainSubject = post.title.split(' : ')[0].toLowerCase();
  
  // Optimisations SEO - Améliorées pour tous les mots-clés
  const metaTitle = `${post.title} | Guide Expert Logo Foot ${currentYear}`;
  
  // Description meta améliorée avec plus de mots-clés
  const metaDescription = `${post.excerpt} Guide complet sur ${mainSubject} mis à jour en ${currentYear}. Histoire, analyse et évolution du ${post.keywords?.split(',')[0] || mainSubject}. Tout savoir sur les logos, écussons et emblèmes du football.`;
  
  // Mots-clés améliorés avec l'année en cours
  const enhancedKeywords = `${post.keywords}, logo foot ${currentYear}, logos football ${currentYear}, écusson foot, design football, football professionnel, football ${mainSubject}, logo ${mainSubject}, écusson ${mainSubject}`;
  
  // Configurer les balises hreflang pour différentes langues
  const languages = [
    {code: 'fr'},
    {code: 'en', url: `https://logo-foot.com/en${generatePostUrl(post.id, post.title)}`},
    {code: 'ar', url: `https://logo-foot.com/ar${generatePostUrl(post.id, post.title)}`}
  ];
  
  return (
    <>
      <CanonicalTag url={canonicalUrl} isDefault={true} />
      
      <HreflangTags languages={languages} defaultLanguage="fr" />
      
      <EnhancedOpenGraph 
        post={post}
        baseUrl="https://logo-foot.com"
        siteName="Logo Foot"
        twitterCard="summary_large_image"
      />
      
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={enhancedKeywords} />
        <meta name="author" content="Logo Foot" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="fr-FR" />
        
        {/* Métadonnées supplémentaires pour les moteurs de recherche */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="dc.language" content="fr" />
        <meta name="dc.source" content={canonicalUrl} />
        <meta name="dc.title" content={metaTitle} />
        <meta name="dc.description" content={metaDescription} />
        <meta name="dc.subject" content={post.keywords} />
        <meta name="dc.publisher" content="Logo Foot" />
        
        {/* Balisage pour Google Scholar */}
        <meta name="citation_title" content={post.title} />
        <meta name="citation_publication_date" content={post.date} />
        <meta name="citation_author" content="Logo Foot" />
        <meta name="citation_fulltext_html_url" content={canonicalUrl} />
      </Helmet>
      
      <BlogSchemaMarkup post={post} />
    </>
  );
};

export default BlogPostSEO;
