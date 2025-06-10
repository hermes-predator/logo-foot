
import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useBlogCategories } from '../hooks/useBlogCategories';
import { usePagination } from '../hooks/usePagination';
import { usePageTransition } from '../hooks/usePageTransition';
import BlogCategorySelector from '../components/blog/BlogCategorySelector';
import BlogArticleList from '../components/blog/BlogArticleList';
import BlogPagination from '../components/blog/BlogPagination';
import PageLoader from '../components/ui/page-loader';
import PageTransition from '../components/ui/page-transition';
import FloatingCTA from '../components/blog/FloatingCTA';
import { BlogListSchema } from '../components/schema/BlogListSchema';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { posts, isLoading, totalPosts } = useBlogPosts(category);
  const { availableCategories, currentCategoryDescription } = useBlogCategories(category);
  const { currentPage, setCurrentPage, totalPages, paginatedItems } = usePagination(posts, 9);
  const { isLoading: isTransitionLoading, skipTransition } = usePageTransition();

  useEffect(() => {
    setCurrentPage(1);
  }, [category, setCurrentPage]);

  const pageTitle = useMemo(() => {
    if (category) {
      const categoryInfo = availableCategories.find(([key]) => key === category);
      return `${categoryInfo?.[1]?.title || 'Articles'} - Blog Logo Foot`;
    }
    return 'Blog Logo Foot : Articles et Guides sur les Logos de Football';
  }, [category, availableCategories]);

  const pageDescription = useMemo(() => {
    if (category) {
      return currentCategoryDescription;
    }
    return 'Découvrez notre blog avec des articles détaillés sur les logos de football, l\'histoire des clubs, les analyses de design et les guides techniques.';
  }, [category, currentCategoryDescription]);

  const canonicalUrl = useMemo(() => {
    const baseUrl = 'https://logo-foot.com/blog';
    return category ? `${baseUrl}?category=${category}` : baseUrl;
  }, [category]);

  const structuredData = useMemo(() => {
    return BlogListSchema({
      posts: paginatedItems,
      category: category || undefined,
      totalPosts,
      currentPage,
      totalPages
    });
  }, [paginatedItems, category, totalPosts, currentPage, totalPages]);

  if (isTransitionLoading && !skipTransition) {
    return (
      <PageLoader 
        isVisible={true} 
        message="Chargement des articles..." 
      />
    );
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {category ? 
                availableCategories.find(([key]) => key === category)?.[1]?.title || 'Articles' :
                'Blog Logo Foot'
              }
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {pageDescription}
            </p>
          </motion.div>

          <BlogCategorySelector currentCategory={category} />
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              <BlogArticleList posts={paginatedItems} />
              {totalPages > 1 && (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
        <FloatingCTA />
      </div>
    </PageTransition>
  );
};

export default Blog;
