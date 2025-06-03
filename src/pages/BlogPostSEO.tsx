
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import CanonicalTag from '../components/SEO/CanonicalTag';
import HreflangTags from '../components/SEO/HreflangTags';
import EnhancedOpenGraph from '../components/SEO/EnhancedOpenGraph';
import { generatePostUrl, isCanonicalPostUrl } from '../utils/slugUtils';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackToButton from '../components/blog/BackToButton';
import BlogCategorySelector from '../components/blog/BlogCategorySelector';
import { useBlogCategories } from '../hooks/useBlogCategories';
import { formatDate } from '../utils/dateUtils';

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
  
  // Hook pour les catégories
  const { availableCategories, currentCategoryDescription } = useBlogCategories(post?.category);
  
  // Si aucun article n'est trouvé, retourner null
  if (!post) return null;
  
  // URL canonique pour cet article spécifique - utiliser la fonction de génération d'URL
  const canonicalUrl = `https://logo-foot.com${generatePostUrl(post.id, post.title)}`;
  
  // Vérifier si l'URL actuelle est l'URL canonique
  const currentPath = window.location.pathname;
  const isCanonical = isCanonicalPostUrl(currentPath, post.title);
  
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
      {/* Bouton de retour au blog en haut de la page */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <BackToButton to="/blog" label="Retour au blog" />
        </div>
      </div>

      {/* Sélecteur de catégories */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <BlogCategorySelector 
            categories={availableCategories}
            currentCategory={post.category}
            currentDescription={currentCategoryDescription}
          />
        </div>
      </div>

      {/* En-tête de l'article avec le titre et la date */}
      <div className="bg-blue-50 py-8 mb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>
          {post.date && (
            <div className="text-sm text-gray-600 mb-4">
              {formatDate(post.date)}
            </div>
          )}
        </div>
      </div>
      
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
        
        {/* Ajout de balises de pagination si nécessaire (articles en série) */}
        {post.previousPostId && (
          <link rel="prev" href={`https://logo-foot.com/blog/${post.previousPostId}`} />
        )}
        {post.nextPostId && (
          <link rel="next" href={`https://logo-foot.com/blog/${post.nextPostId}`} />
        )}
      </Helmet>
      
      <BlogSchemaMarkup post={post} />
    </>
  );
};

export default BlogPostSEO;
