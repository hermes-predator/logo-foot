
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import BlogHeader from '../components/blog/BlogHeader';
import BlogCategorySelector from '../components/blog/BlogCategorySelector';
import BlogContent from '../components/blog/BlogContent';
import { BlogListSchema } from '../components/schema/BlogListSchema';
import { useDebugBlog } from '../hooks/useDebugBlog';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useBlogCategories } from '../hooks/useBlogCategories';
import PageTransition from "@/components/ui/page-transition";
import { usePagination } from '../hooks/usePagination';
import BlogCanonical from '../components/SEO/BlogCanonical';
import FloatingCTA from '../components/blog/FloatingCTA';
import BlogPerformanceMonitor from '../components/blog/BlogPerformanceMonitor';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  // Debug mode pour vérifier le chargement des articles
  useDebugBlog();
  
  // Custom hooks pour la logique métier
  const { posts, isLoading } = useBlogPosts(categoryParam);
  const { 
    availableCategories, 
    currentCategoryDescription 
  } = useBlogCategories(categoryParam);

  // Pagination
  const POSTS_PER_PAGE = 9;
  const { 
    currentPage, 
    setCurrentPage, 
    totalPages, 
    paginatedItems 
  } = usePagination(posts, POSTS_PER_PAGE);

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  // Ajout du log pour montrer les slugs générés
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Uniquement en mode dev
      console.debug('Format des URLs des articles:');
      posts.slice(0, 3).forEach(post => {
        import('../utils/slugUtils').then(({ generatePostUrl }) => {
          console.debug(`${post.id} - ${post.title} => /blog/${post.id}-${generatePostUrl(post.id, post.title).split('/').pop()}`);
        });
      });
    }
  }, [posts]);

  return (
    <PageTransition>
      <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-screen">
        <Helmet>
          <title>Blog - Logo Foot</title>
          <meta name="description" content="Découvrez les logos des clubs de football du monde entier" />
          <meta name="keywords" content="logo foot, logo football, écussons foot, club foot, logo équipe foot" />
          <script type="application/ld+json">
            {JSON.stringify(BlogListSchema({ post: posts[0] }))}
          </script>
        </Helmet>

        {/* Balises canoniques pour la pagination SEO */}
        <BlogCanonical 
          category={categoryParam || undefined}
          page={currentPage}
        />

        {/* Header avec présentation du blog - Amélioration de l'espacement */}
        <div className="pb-8">
          <BlogHeader />
        </div>
        
        <div className="container mx-auto px-4 pt-6 pb-16">
          {/* Titre principal du blog avec meilleure typographie */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Blog Logo Foot
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'univers fascinant des logos de football, leur histoire et leur évolution
            </p>
          </div>

          {/* Sélecteur de catégories avec espacement amélioré */}
          <div className="mb-16 transition-all duration-500 ease-out">
            <BlogCategorySelector
              categories={availableCategories}
              currentCategory={categoryParam}
              currentDescription={currentCategoryDescription}
            />
          </div>

          {/* Contenu principal du blog avec espacement optimisé */}
          <div className="transition-all duration-500 ease-out">
            <BlogContent
              posts={posts}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              paginatedItems={paginatedItems}
            />
          </div>
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
