
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { generatePostUrl, isCanonicalPostUrl } from '../utils/slugUtils';
import BlogImage from '../components/blog/BlogImage';
import RelatedPosts from '../components/blog/RelatedPosts';
import BackToButton from '../components/blog/BackToButton';
import Footer from '../components/Footer';
import { formatDate } from '../utils/dateUtils';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import CanonicalTag from '../components/SEO/CanonicalTag';
import HreflangTags from '../components/SEO/HreflangTags';
import EnhancedOpenGraph from '../components/SEO/EnhancedOpenGraph';
import PageTransition from "@/components/ui/page-transition";
import FloatingCTA from '../components/blog/FloatingCTA';
import Breadcrumbs from '../components/Breadcrumbs';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  // Extraire l'ID de l'URL slug
  const postId = parseInt(slug.split('-')[0], 10);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Vérifier si l'URL actuelle correspond à l'URL canonique
  const canonicalPath = generatePostUrl(post.id, post.title);
  const currentPath = `/blog/${slug}`;
  
  // Si l'URL n'est pas canonique, rediriger
  if (currentPath !== canonicalPath) {
    return <Navigate to={canonicalPath} replace />;
  }

  const currentYear = new Date().getFullYear();
  const metaTitle = `${post.title} | Guide Expert Logo Foot ${currentYear}`;
  const metaDescription = `${post.excerpt} Guide complet mis à jour en ${currentYear}.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen">
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={post.keywords} />
        </Helmet>

        <CanonicalTag url={`https://logo-foot.com${canonicalPath}`} isDefault={true} />
        
        <HreflangTags 
          languages={[
            {code: 'fr'},
            {code: 'en', url: `https://logo-foot.com/en${canonicalPath}`},
            {code: 'ar', url: `https://logo-foot.com/ar${canonicalPath}`}
          ]} 
          defaultLanguage="fr" 
        />
        
        <EnhancedOpenGraph 
          post={post}
          baseUrl="https://logo-foot.com"
          siteName="Logo Foot"
          twitterCard="summary_large_image"
        />

        {/* Navigation Breadcrumbs */}
        <Breadcrumbs />

        {/* Bouton de retour */}
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
                Publié le {formatDate(post.date)}
              </div>
            )}
          </div>
        </div>

        {/* Contenu principal */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Image principale de l'article */}
            {post.galleryImageId && (
              <div className="mb-8">
                <BlogImage
                  src={`/lovable-uploads/image-${post.galleryImageId}.png`}
                  alt={post.title}
                  isDefault={true}
                  priority={true}
                  className="rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Contenu de l'article */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Articles similaires */}
            <RelatedPosts post={post} allPosts={blogPosts} />
          </div>
        </div>

        <Footer />
        <FloatingCTA />
        <BlogSchemaMarkup post={post} />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
