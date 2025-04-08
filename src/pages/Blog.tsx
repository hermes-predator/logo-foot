import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { usePagination } from '../hooks/usePagination';
import BlogHeader from '../components/blog/BlogHeader';
import BlogArticleList from '../components/blog/BlogArticleList';
import BlogPagination from '../components/blog/BlogPagination';
import FloatingCTA from '../components/blog/FloatingCTA';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayablePosts, setDisplayablePosts] = useState(blogPosts);
  
  // Log the initial blog posts data
  useEffect(() => {
    console.log('Blog page loaded with', blogPosts.length, 'total posts');
    
    // Check for any posts with missing required fields
    const invalidPosts = blogPosts.filter(post => 
      !post.id || !post.title || !post.excerpt || !post.date || !post.content
    );
    
    if (invalidPosts.length > 0) {
      console.warn('Found', invalidPosts.length, 'posts with missing required fields:', 
        invalidPosts.map(p => ({ id: p.id, title: p.title }))
      );
    }
    
    // Filter out any invalid posts for display
    if (invalidPosts.length > 0) {
      setDisplayablePosts(blogPosts.filter(post => 
        post.id && post.title && post.excerpt && post.date && post.content
      ));
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const { currentPage, setCurrentPage, totalPages, paginatedItems, totalItems } = usePagination(displayablePosts);
  const currentYear = new Date().getFullYear();

  // Debug
  useEffect(() => {
    console.log('Pagination state:', {
      currentPage,
      totalPages,
      itemsPerPage: paginatedItems.length,
      totalItems
    });
  }, [currentPage, totalPages, paginatedItems, totalItems]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Helmet>
        <title>{`Blog Logo Foot : Guide Expert des Logos de Football ${currentYear} | Actualités & Analyses`}</title>
        <meta 
          name="description" 
          content={`Explorez notre guide complet sur les logos de football ${currentYear}. Histoire des emblèmes, analyse des designs, actualités et évolution des logos des plus grands clubs de football.`}
        />
        <meta 
          property="og:title" 
          content={`Blog Logo Foot : Guide Expert des Logos de Football ${currentYear} | Actualités & Analyses`}
        />
        <meta 
          property="og:description" 
          content={`Découvrez notre expertise sur les logos de football : histoire des emblèmes, évolution des designs, guides de création et analyses détaillées. Le guide de référence ${currentYear} pour tout savoir sur les logos du football.`}
        />
        <meta 
          name="keywords" 
          content={`blog logo foot ${currentYear}, logos football, emblèmes foot, design football, histoire logos football, guide logos foot, actualités logos foot, écussons clubs, logos clubs professionnels`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://logo-foot.com/blog" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="fr-FR" />
        <link rel="canonical" href="https://logo-foot.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Blog Logo Foot : Guide Expert des Logos de Football ${currentYear}`} />
        <meta name="twitter:description" content={`Plongez dans l'univers des logos de football ${currentYear} : histoire, évolution, design et tendances des emblèmes qui font la richesse du football.`} />
      </Helmet>
      <BlogSchemaMarkup isBlogList />
      
      <main className="container mx-auto px-4 py-3 pb-48">
        <Breadcrumbs />
        <BlogHeader />
        <div className="mt-4">
          <BlogArticleList articles={paginatedItems} isLoading={isLoading} />
          {totalPages > 1 && (
            <div className="px-4">
              <BlogPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
      </main>

      {/* Add the FloatingCTA component */}
      <FloatingCTA />
    </div>
  );
};

export default Blog;
