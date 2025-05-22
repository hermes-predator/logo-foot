
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { useReadingTime } from '../hooks/useReadingTime';
import { extractPostIdFromUrl } from '../utils/slugUtils';
import ReactMarkdown from 'react-markdown';
import Footer from '../components/Footer';
import { BookOpen, Calendar, Tag } from 'lucide-react';
import RelatedPosts from '../components/blog/RelatedPosts';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import BlogHeader from '../components/blog/BlogHeader';
import PageTransition from "@/components/ui/page-transition";
import BlogCTA from '../components/blog/BlogCTA';
import { BLOG_CATEGORIES } from '../types/blog';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isClient, setIsClient] = useState(false);
  
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
          <meta property="og:image" content={post.galleryImageId ? `/images/gallery/${post.galleryImageId}.webp` : "/og-image.png"} />
          <meta property="og:site_name" content="Logo Foot" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoTitle} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={post.galleryImageId ? `/images/gallery/${post.galleryImageId}.webp` : "/og-image.png"} />
        </Helmet>
        
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
              </div>
            </header>
            
            {/* Article content */}
            <article className="prose prose-lg max-w-none p-6 md:p-8">
              <ReactMarkdown>
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
