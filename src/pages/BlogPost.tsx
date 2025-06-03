import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { generatePostUrl, isCanonicalPostUrl } from '../utils/slugUtils';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogImage from '../components/blog/BlogImage';
import RelatedPosts from '../components/blog/RelatedPosts';
import BlogCategorySelector from '../components/blog/BlogCategorySelector';
import BlogHeader from '../components/blog/BlogHeader';
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

      {/* BlogHeader */}
      <BlogHeader />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Sélecteur de catégories */}
          <div className="mb-12">
            <BlogCategorySelector 
              categories={availableCategories}
              currentCategory={post.category}
              currentDescription={currentCategoryDescription}
            />
          </div>

          {/* Article principal */}
          <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Image principale si disponible */}
            {post.galleryImageId && (
              <div className="relative flex justify-center p-6">
                <div className="w-full max-w-md">
                  <BlogImage 
                    galleryImageId={post.galleryImageId} 
                    alt={post.title}
                    className="w-full object-cover"
                    priority={true}
                    aspectRatio={1}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}

            {/* En-tête de l'article */}
            <header className="px-8 py-10">
              {/* Badge de catégorie */}
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 text-sm font-medium">
                  <Tag className="w-4 h-4 mr-2" />
                  {post.category}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>
              
              {/* Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>
              
              {/* Métadonnées de l'article */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-gray-500 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">{readingTime} min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Équipe Logo Foot</span>
                </div>
              </div>
            </header>

            {/* Contenu de l'article */}
            <div className="px-8 pb-10">
              <div className="prose prose-xl prose-gray max-w-none 
                             prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                             prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-4
                             prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-gray-900
                             prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-900
                             prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                             prose-strong:text-gray-900 prose-strong:font-bold prose-strong:bg-yellow-100 prose-strong:px-1 prose-strong:rounded
                             prose-em:text-gray-800 prose-em:font-medium
                             prose-ul:my-6 prose-ol:my-6 prose-ul:space-y-2 prose-ol:space-y-2
                             prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed
                             prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:p-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
                             prose-blockquote:italic prose-blockquote:text-blue-900 prose-blockquote:font-medium
                             prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                             prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
                             prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2
                             prose-img:rounded-lg prose-img:shadow-md
                             [&>*:first-child]:first-letter:text-5xl [&>*:first-child]:first-letter:font-bold [&>*:first-child]:first-letter:text-gray-900 [&>*:first-child]:first-letter:float-left [&>*:first-child]:first-letter:mr-3 [&>*:first-child]:first-letter:mt-1">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </article>

          {/* Articles similaires */}
          <div className="mt-24">
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
