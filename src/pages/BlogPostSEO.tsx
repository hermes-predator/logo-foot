import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import CanonicalTag from '../components/SEO/CanonicalTag';
import HreflangTags from '../components/SEO/HreflangTags';
import EnhancedOpenGraph from '../components/SEO/EnhancedOpenGraph';
import Breadcrumbs from '../components/Breadcrumbs';
import { generatePostUrl, isCanonicalPostUrl } from '../utils/slugUtils';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackToButton from '../components/blog/BackToButton';
import { formatDate } from '../utils/dateUtils';

const BlogPostSEO: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? parseInt(id.split('-')[0], 10) : 0;
  const post = blogPosts.find(post => post.id === numericId);
  const currentYear = new Date().getFullYear();
  
  if (!post) return null;
  
  const canonicalUrl = `https://logo-foot.com${generatePostUrl(post.id, post.title)}`;
  const currentPath = window.location.pathname;
  const isCanonical = isCanonicalPostUrl(currentPath, post.title);
  const mainSubject = post.title.split(' : ')[0].toLowerCase();
  
  const metaTitle = `${post.title} | Guide Expert Logo Foot ${currentYear}`;
  const metaDescription = `${post.excerpt} Guide complet sur ${mainSubject} mis à jour en ${currentYear}. Histoire, analyse et évolution du ${post.keywords?.split(',')[0] || mainSubject}. Tout savoir sur les logos, écussons et emblèmes du football.`;
  const enhancedKeywords = `${post.keywords}, logo foot ${currentYear}, logos football ${currentYear}, écusson foot, design football, football professionnel, football ${mainSubject}, logo ${mainSubject}, écusson ${mainSubject}`;
  
  const languages = [
    {code: 'fr'},
    {code: 'en', url: `https://logo-foot.com/en${generatePostUrl(post.id, post.title)}`},
    {code: 'ar', url: `https://logo-foot.com/ar${generatePostUrl(post.id, post.title)}`}
  ];
  
  return (
    <>
      {/* Enhanced Breadcrumbs with schema */}
      <Breadcrumbs 
        postTitle={post.title}
        category={post.category}
      />

      {/* Bouton de retour au blog */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <BackToButton to="/blog" label="Retour au blog" />
        </div>
      </div>

      {/* En-tête de l'article */}
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
      
      <CanonicalTag url={canonicalUrl} />
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
        
        <meta name="author" content="Logo Foot" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="fr-FR" />
        
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        
        
         {post.previousPostId && (() => {
           const p = blogPosts.find(p => p.id === post.previousPostId);
           return p ? (
             <link rel="prev" href={`https://logo-foot.com${generatePostUrl(p.id, p.title)}`} />
           ) : null;
         })()}
         {post.nextPostId && (() => {
           const p = blogPosts.find(p => p.id === post.nextPostId);
           return p ? (
             <link rel="next" href={`https://logo-foot.com${generatePostUrl(p.id, p.title)}`} />
           ) : null;
         })()}
      </Helmet>
      
      <BlogSchemaMarkup post={post} addBreadcrumbs={true} />
    </>
  );
};

export default BlogPostSEO;
