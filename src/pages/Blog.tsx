
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
import BlogPagination from '../components/blog/BlogPagination';
import { usePagination } from '../hooks/usePagination';
import BlogCanonical from '../components/SEO/BlogCanonical';
import FloatingCTA from '../components/blog/FloatingCTA';
import BlogPerformanceMonitor from '../components/blog/BlogPerformanceMonitor';
import { BLOG_CATEGORIES } from '../types/blog';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Debug mode pour vérifier le chargement des articles
  useDebugBlog();
  
  // Get the description for the current category
  const currentCategoryDescription = categoryParam 
    ? BLOG_CATEGORIES[categoryParam]?.description 
    : "Découvrez notre collection d'articles sur les logos du football mondial, des analyses et des conseils techniques.";
  
  // Filter categories to display (exclude 'legacy')
  const categoriesToDisplay = Object.entries(BLOG_CATEGORIES).filter(([key]) => key !== 'legacy');

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

  // Pagination
  const POSTS_PER_PAGE = 9;
  const { 
    currentPage, 
    setCurrentPage, 
    totalPages, 
    paginatedItems 
  } = usePagination(sortedPosts, POSTS_PER_PAGE);
  
  // Ajout du log pour montrer les slugs générés
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Uniquement en mode dev
      console.debug('Format des URLs des articles:');
      sortedPosts.slice(0, 3).forEach(post => {
        import('../utils/slugUtils').then(({ generatePostUrl }) => {
          console.debug(`${post.id} - ${post.title} => /blog/${post.id}-${generatePostUrl(post.id, post.title).split('/').pop()}`);
        });
      });
    }
  }, [sortedPosts]);

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

        {/* Balises canoniques pour la pagination SEO */}
        <BlogCanonical 
          category={categoryParam || undefined}
          page={currentPage}
        />

        {/* Header avec présentation du blog */}
        <BlogHeader />
        
        <div className="container mx-auto px-4 pt-4 pb-12">
          {/* Category selection section avec design amélioré */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 shadow-md border border-blue-100 max-w-5xl mx-auto overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full opacity-30 -ml-10 -mb-10"></div>
            
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Catégories</h2>
            
            <div className="flex flex-wrap justify-center gap-2 px-3 relative z-10">
              <a 
                href="/blog" 
                className={`px-4 py-2 rounded-full text-sm transition-all ${!categoryParam 
                  ? 'bg-blue-500 text-white font-medium shadow-md transform hover:scale-105' 
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300'}`}
              >
                Tout
              </a>
              
              {categoriesToDisplay.map(([key, category]) => (
                <a 
                  key={key} 
                  href={`/blog?category=${key}`} 
                  className={`px-4 py-2 rounded-full text-sm transition-all ${categoryParam === key 
                    ? 'bg-blue-500 text-white font-medium shadow-md transform hover:scale-105' 
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300'}`}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Description de la catégorie actuelle */}
          {currentCategoryDescription && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 max-w-5xl mx-auto">
              <p className="text-sm text-blue-800">{currentCategoryDescription}</p>
            </div>
          )}

          {/* Liste d'articles paginée */}
          <BlogArticleList articles={paginatedItems} />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <BlogPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>

        <Footer />
        
        {/* Affichage de la bannière flottante CTA */}
        <FloatingCTA />
        
        {/* Moniteur de performance */}
        <BlogPerformanceMonitor />
      </div>
    </PageTransition>
  );
};

export default Blog;
