
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import BlogArticleList from '../components/blog/BlogArticleList';
import Footer from '../components/Footer';
import BlogHeader from '../components/blog/BlogHeader';
import { BlogListSchema } from '../components/schema/BlogListSchema';
import { useDebugBlog } from '../hooks/useDebugBlog';
import PageTransition from "@/components/ui/page-transition";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Debug mode pour vérifier le chargement des articles
  useDebugBlog();
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  // Filter posts by category if a category is selected
  const filteredPosts = categoryParam
    ? blogPosts.filter(post => post.category === categoryParam)
    : blogPosts;

  // Sort posts by date (most recent first)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen">
        <Helmet>
          <title>Blog - Logo Foot</title>
          <meta name="description" content="Découvrez les logos des clubs de football du monde entier" />
          <meta name="keywords" content="logo foot, logo football, écussons foot, club foot, logo équipe foot" />
          <script type="application/ld+json">
            {JSON.stringify(BlogListSchema({ post: sortedPosts[0] }))}
          </script>
        </Helmet>

        {/* Header avec présentation du blog */}
        <BlogHeader />

        <div className="container mx-auto px-4 pt-4 pb-12">
          {/* Liste d'articles */}
          <BlogArticleList posts={sortedPosts} />
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
