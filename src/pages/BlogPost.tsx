
import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { extractPostIdFromUrl } from '../utils/slugUtils';
import { usePageTransition } from '../hooks/usePageTransition';
import BlogContent from '../components/blog/BlogContent';
import PageLoader from '../components/ui/page-loader';
import PageTransition from '../components/ui/page-transition';
import { EnhancedBlogPostSchema } from '../components/schema/EnhancedBlogPostSchema';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isLoading } = usePageTransition();

  const post = useMemo(() => {
    if (!slug) return null;
    const postId = extractPostIdFromUrl(slug);
    return blogPosts.find(p => p.id === postId) || null;
  }, [slug]);

  const canonicalUrl = useMemo(() => {
    return `https://logo-foot.com/blog/${slug}`;
  }, [slug]);

  const structuredData = useMemo(() => {
    if (!post) return null;
    return EnhancedBlogPostSchema({ post });
  }, [post]);

  if (isLoading) {
    return (
      <PageLoader 
        isVisible={true} 
        message="Chargement de l'article..." 
      />
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Logo Foot" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>

      <BlogContent post={post} />
    </PageTransition>
  );
};

export default BlogPost;
