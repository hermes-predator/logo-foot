
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import BlogHeader from '../components/blog/BlogHeader';
import BlogCategorySelector from '../components/blog/BlogCategorySelector';
import BlogContent from '../components/blog/BlogContent';
import { BlogListSchema } from '../components/schema/BlogListSchema';
import { useDebugBlog } from '../hooks/useDebugBlog';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useBlogCategories } from '../hooks/useBlogCategories';
import { usePageTransition } from '../hooks/usePageTransition';
import PageTransition from "@/components/ui/page-transition";
import PageLoader from "@/components/ui/page-loader";
import { usePagination } from '../hooks/usePagination';
import BlogCanonical from '../components/SEO/BlogCanonical';
import FloatingCTA from '../components/blog/FloatingCTA';
import BlogPerformanceMonitor from '../components/blog/BlogPerformanceMonitor';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const categoryParam = searchParams.get('category');
  const { isLoading: isPageLoading, isCategoryChange, skipTransition } = usePageTransition();
  const categorySectionRef = useRef<HTMLDivElement>(null);

  // Debug mode pour vérifier le chargement des articles
  useDebugBlog();
  
  // Custom hooks pour la logique métier
  const { posts, isLoading: isPostsLoading } = useBlogPosts(categoryParam);
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

  // Laisser react-helmet-async gérer le titre automatiquement

  useEffect(() => {
    if (isCategoryChange && categorySectionRef.current) {
      // Scroll vers la section des catégories avec un offset pour laisser plus de marge
      const element = categorySectionRef.current;
      const yOffset = -100; // Offset négatif pour remonter un peu plus haut
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    } else if (!isCategoryChange) {
      // Scroll to top seulement pour les nouvelles visites de la page
      window.scrollTo(0, 0);
    }
  }, [isCategoryChange]);

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

  // Combiner les états de chargement
  const isLoading = isPageLoading || isPostsLoading;

  // Titre dynamique basé sur la catégorie
  const pageTitle = categoryParam 
    ? `Blog ${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} - Logo Foot`
    : 'Logo Foot | Blog sur les Logos de Clubs de Football';

  const content = (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Explorez notre blog dédié aux logos des clubs de football. Recevez un fichier de + 8600 logos parfaitement organisé par pays." />
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

      {/* Header avec présentation du blog */}
      <BlogHeader />
      
      <div className="container mx-auto px-4 pt-4 pb-12">
        {/* Sélecteur de catégories */}
        <div ref={categorySectionRef}>
          <BlogCategorySelector
            categories={availableCategories}
            currentCategory={categoryParam}
            currentDescription={currentCategoryDescription}
            isLoading={isLoading}
          />
        </div>

        {/* Contenu principal du blog */}
        <BlogContent
          posts={posts}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          paginatedItems={paginatedItems}
        />
      </div>

      <Footer />
      
      {/* Affichage de la bannière flottante CTA */}
      <FloatingCTA />
      
      {/* Moniteur de performance */}
      <BlogPerformanceMonitor />
    </div>
  );

  return (
    <>
      <PageLoader 
        isVisible={isLoading} 
        message={categoryParam ? "Chargement de la catégorie..." : "Chargement du blog..."} 
      />
      
      {skipTransition ? content : <PageTransition>{content}</PageTransition>}
    </>
  );
};

export default Blog;
