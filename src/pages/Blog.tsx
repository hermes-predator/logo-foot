
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { BlogCategory, BLOG_CATEGORIES } from '../types/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { usePagination } from '../hooks/usePagination';
import BlogHeader from '../components/blog/BlogHeader';
import BlogArticleList from '../components/blog/BlogArticleList';
import BlogPagination from '../components/blog/BlogPagination';
import FloatingCTA from '../components/blog/FloatingCTA';
import { useSearchParams } from 'react-router-dom';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Filter posts based on URL parameters
  useEffect(() => {
    setIsLoading(true);
    
    if (categoryParam && Object.keys(BLOG_CATEGORIES).includes(categoryParam)) {
      const categoryPosts = blogPosts.filter(
        post => post.category === categoryParam as BlogCategory
      );
      setFilteredPosts(categoryPosts);
      console.log(`Filtered to ${categoryPosts.length} posts in category: ${categoryParam}`);
    } else {
      setFilteredPosts(blogPosts);
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [categoryParam]);
  
  // Check for invalid posts
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
  }, []);

  const { currentPage, setCurrentPage, totalPages, paginatedItems, totalItems } = usePagination(filteredPosts);
  const currentYear = new Date().getFullYear();

  // Get the category title for the page
  const categoryTitle = categoryParam && BLOG_CATEGORIES[categoryParam as BlogCategory] 
    ? BLOG_CATEGORIES[categoryParam as BlogCategory].name 
    : "Tous les articles";

  // Get the category description
  const categoryDescription = categoryParam && BLOG_CATEGORIES[categoryParam as BlogCategory]
    ? BLOG_CATEGORIES[categoryParam as BlogCategory].description
    : "Explorez tous nos articles sur les logos de football";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Helmet>
        <title>{`${categoryTitle} | Blog Logo Foot : Guide Expert des Logos de Football ${currentYear}`}</title>
        <meta 
          name="description" 
          content={`${categoryDescription}. Découvrez notre guide complet ${currentYear} sur les logos de football.`}
        />
        <meta 
          property="og:title" 
          content={`${categoryTitle} | Blog Logo Foot : Guide Expert des Logos de Football ${currentYear}`}
        />
        <meta 
          property="og:description" 
          content={categoryDescription}
        />
        <meta 
          name="keywords" 
          content={`blog logo foot ${currentYear}, logos football, ${categoryParam || 'emblèmes foot'}, design football, histoire logos football, guide logos foot, ${categoryParam === 'pixel-art' ? 'pixel art foot, pixel art maillot de foot, pixel art logo foot' : 'actualités logos foot'}`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={`https://logo-foot.com/blog${categoryParam ? `?category=${categoryParam}` : ''}`} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="fr-FR" />
        <link rel="canonical" href={`https://logo-foot.com/blog${categoryParam ? `?category=${categoryParam}` : ''}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${categoryTitle} | Blog Logo Foot ${currentYear}`} />
        <meta name="twitter:description" content={categoryDescription} />
      </Helmet>
      <BlogSchemaMarkup isBlogList />
      
      <main className="container mx-auto px-4 py-3 pb-80">
        <Breadcrumbs />
        <BlogHeader />
        
        {categoryParam && (
          <div className="pl-4 mb-6">
            <h2 className="text-2xl font-bold mb-2">{categoryTitle}</h2>
            <p className="text-gray-600">{categoryDescription}</p>
            {categoryParam === 'pixel-art' && (
              <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-sm text-purple-800">
                  Découvrez notre collection d'articles sur le <strong>pixel art foot</strong>, 
                  avec des tutoriels pour créer vos propres <strong>logos foot pixel art</strong> et 
                  <strong> pixel art maillot de foot</strong>.
                </p>
              </div>
            )}
          </div>
        )}
        
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
