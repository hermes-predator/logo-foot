
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { generatePostUrl, isCanonicalPostUrl } from '../utils/slugUtils';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogImage from '../components/blog/BlogImage';
import RelatedPosts from '../components/blog/RelatedPosts';
import BackToButton from '../components/blog/BackToButton';
import BlogCategorySelector from '../components/blog/BlogCategorySelector';
import { useBlogCategories } from '../hooks/useBlogCategories';
import { formatDate } from '../utils/dateUtils';
import ReactMarkdown from 'react-markdown';
import FloatingCTA from '../components/blog/FloatingCTA';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Extraire l'ID numérique du slug
  const numericId = slug ? parseInt(slug.split('-')[0], 10) : 0;
  const post = blogPosts.find(post => post.id === numericId);

  // Hook pour les catégories
  const { availableCategories, currentCategoryDescription } = useBlogCategories(post?.category);

  // Si aucun article n'est trouvé, rediriger vers 404
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Vérifier si l'URL actuelle est l'URL canonique
  const currentPath = window.location.pathname;
  const isCanonical = isCanonicalPostUrl(currentPath, post.title);
  
  // Si l'URL n'est pas canonique, rediriger
  if (!isCanonical) {
    const canonicalPath = generatePostUrl(post.id, post.title);
    return <Navigate to={canonicalPath} replace />;
  }

  // Calculer le temps de lecture estimé
  const wordsPerMinute = 200;
  const wordCount = post.content.split(' ').length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  // URL canonique pour cet article spécifique
  const canonicalUrl = `https://logo-foot.com${generatePostUrl(post.id, post.title)}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Logo Foot</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Bouton de retour */}
          <BackToButton to="/blog" label="Retour au blog" />

          {/* Sélecteur de catégories */}
          <div className="mb-8">
            <BlogCategorySelector 
              categories={availableCategories}
              currentCategory={post.category}
              currentDescription={currentCategoryDescription}
            />
          </div>

          {/* Article principal */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* En-tête de l'article */}
            <header className="px-6 py-8 border-b border-gray-100">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              
              {/* Métadonnées de l'article */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Équipe Logo Foot</span>
                </div>
              </div>
            </header>

            {/* Image principale si disponible */}
            {post.galleryImageId && (
              <div className="px-6 py-4">
                <BlogImage 
                  galleryImageId={post.galleryImageId} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Contenu de l'article */}
            <div className="px-6 py-8">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </article>

          {/* Articles similaires */}
          <div className="mt-12">
            <RelatedPosts 
              post={post}
              allPosts={blogPosts}
              maxPosts={3}
            />
          </div>
        </div>
      </div>

      {/* CTA flottant */}
      <FloatingCTA />
    </>
  );
};

export default BlogPost;
