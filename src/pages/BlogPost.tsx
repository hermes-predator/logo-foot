
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { useReadingTime } from '../hooks/useReadingTime';
import { extractPostIdFromUrl } from '../utils/slugUtils';
import ReactMarkdown from 'react-markdown';
import Footer from '../components/Footer';
import { BookOpen, Calendar, Tag, Image } from 'lucide-react';
import RelatedPosts from '../components/blog/RelatedPosts';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import BlogHeader from '../components/blog/BlogHeader';
import PageTransition from "@/components/ui/page-transition";
import BlogCTA from '../components/blog/BlogCTA';
import { BLOG_CATEGORIES } from '../types/blog';
import BlogImage from '../components/blog/BlogImage';
import { ImageObjectSchema } from '../components/schema/ImageObjectSchema';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isClient, setIsClient] = useState(false);
  const [mainImage, setMainImage] = useState<string | null>(null);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Extraire l'ID depuis l'URL
  const postId = slug ? extractPostIdFromUrl(slug) : null;
  
  // Trouver l'article correspondant
  const post = postId ? blogPosts.find(post => post.id === postId) : null;
  
  // Pour le temps de lecture
  const readingTime = post ? useReadingTime(post.content) : 0;
  
  // Rediriger vers 404 si l'article n'existe pas
  useEffect(() => {
    if (isClient && slug && !post) {
      console.error(`Article non trouvé avec l'ID: ${postId}`);
      navigate('/not-found', { replace: true });
    }
  }, [post, navigate, isClient, slug, postId]);

  // Extraire la première image de l'article pour Google Images
  useEffect(() => {
    if (post?.content) {
      // Recherche d'URLs d'images dans le contenu markdown
      const imgRegex = /!\[.*?\]\((.*?)\)/;
      const match = post.content.match(imgRegex);
      if (match && match[1]) {
        setMainImage(match[1]);
      }
    }
  }, [post]);
  
  // Si article non trouvé et client-side, afficher nothing (la redirection s'en occupera)
  if (!post && isClient) {
    return null;
  }
  
  // Pour le rendu côté serveur ou si le post n'est pas encore chargé
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }
  
  // Préparation du titre pour SEO
  const seoTitle = `${post.title} | Logo Foot`;

  // Création d'une image principale pour Google Images
  const featuredImageUrl = post.galleryImageId 
    ? `/images/gallery/${post.galleryImageId}.webp` 
    : mainImage || "/og-image.png";

  return (
    <PageTransition>
      <div className="bg-gray-50">
        <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={post.keywords} />
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:image" content={featuredImageUrl} />
          <meta property="og:site_name" content="Logo Foot" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoTitle} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={featuredImageUrl} />
          
          {/* Métadonnées améliorées pour Google Images */}
          <meta name="image" content={featuredImageUrl} />
          <meta itemProp="image" content={featuredImageUrl} />
        </Helmet>
        
        {/* Schema.org pour les images */}
        {mainImage && (
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify(
                ImageObjectSchema({
                  imageUrl: featuredImageUrl,
                  title: post.title,
                  altText: post.excerpt,
                  datePublished: post.date
                })
              )}
            </script>
          </Helmet>
        )}
        
        <BlogSchemaMarkup post={post} />
        
        {/* Header de blog */}
        <BlogHeader />
        
        <div className="container mx-auto px-4 py-8">
          <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Article header */}
            <header className="p-6 md:p-8 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {BLOG_CATEGORIES[post.category].name}
                </span>
                <time 
                  className="text-gray-500 text-xs flex items-center"
                  dateTime={post.date}
                >
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-gray-500 text-sm mt-4">
                <div className="flex items-center mr-4">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {readingTime} min de lecture
                </div>
                
                {post.keywords && (
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {post.keywords.split(',')[0]}
                  </div>
                )}

                {(post.galleryImageId || mainImage) && (
                  <div className="flex items-center ml-4">
                    <Image className="w-4 h-4 mr-1" />
                    Images optimisées
                  </div>
                )}
              </div>
            </header>
            
            {/* Image principale mise en avant pour Google Images */}
            {post.galleryImageId && (
              <div className="px-6 md:px-8 pt-6">
                <BlogImage 
                  src={`/images/gallery/${post.galleryImageId}.webp`} 
                  alt={`Image principale: ${post.title}`}
                  priority={true}
                  title={post.title}
                  isDefault={true}
                />
              </div>
            )}
            
            {/* Article content avec style amélioré */}
            <article className="prose prose-lg max-w-none p-6 md:p-8">
              <ReactMarkdown
                components={{
                  img: ({node, ...props}) => {
                    const { src, alt } = props;
                    return <BlogImage src={src || ''} alt={alt || ''} />;
                  },
                  h1: ({node, ...props}) => (
                    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />
                  ),
                  h2: ({node, ...props}) => (
                    <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3" {...props} />
                  ),
                  h3: ({node, ...props}) => (
                    <h3 className="text-xl font-bold text-gray-800 mt-5 mb-3" {...props} />
                  ),
                  p: ({node, ...props}) => (
                    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                  ),
                  ul: ({node, ...props}) => (
                    <ul className="list-disc pl-5 mb-4 text-gray-700" {...props} />
                  ),
                  ol: ({node, ...props}) => (
                    <ol className="list-decimal pl-5 mb-4 text-gray-700" {...props} />
                  ),
                  li: ({node, ...props}) => (
                    <li className="mb-1 text-gray-700" {...props} />
                  ),
                  strong: ({node, ...props}) => (
                    <strong className="font-bold text-gray-900" {...props} />
                  ),
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-gray-700 my-4" {...props} />
                  ),
                  a: ({node, ...props}) => (
                    <a className="text-blue-600 hover:text-blue-800 hover:underline" {...props} />
                  )
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
            
            {/* CTA */}
            <div className="px-6 md:px-8 pb-8">
              <BlogCTA />
            </div>
            
            {/* Related posts */}
            <div className="px-6 md:px-8 pb-8">
              <RelatedPosts post={post} allPosts={blogPosts} maxPosts={3} />
            </div>
          </main>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
