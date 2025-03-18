
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { usePagination } from '../hooks/usePagination';
import BlogHeader from '../components/blog/BlogHeader';
import BlogArticleList from '../components/blog/BlogArticleList';
import BlogPagination from '../components/blog/BlogPagination';
import BlogCTA from '../components/blog/BlogCTA';

const Blog = () => {
  // Debug log au chargement de la page
  useEffect(() => {
    console.log('Blog component rendering, blogPosts:', blogPosts.length, 'articles');
    
    // Log pour vérifier que les articles sont bien présents
    console.log('IDs of first 5 articles:', blogPosts.slice(0, 5).map(post => post.id));
    
    // Log pour vérifier que des articles spécifiques sont présents
    const chelseaArticle = blogPosts.find(post => post.title.toLowerCase().includes('chelsea'));
    const juventusArticle = blogPosts.find(post => post.title.toLowerCase().includes('juventus'));
    const galatasarayArticle = blogPosts.find(post => post.title.toLowerCase().includes('galatasaray'));
    
    console.log('Articles importants trouvés:', 
      chelseaArticle ? 'Chelsea ✓' : 'Chelsea ✗',
      juventusArticle ? 'Juventus ✓' : 'Juventus ✗', 
      galatasarayArticle ? 'Galatasaray ✓' : 'Galatasaray ✗'
    );
  }, []);

  // Vérification de sécurité pour les articles de blog
  const validBlogPosts = Array.isArray(blogPosts) && blogPosts.length > 0 
    ? blogPosts 
    : [];

  // Utilisation du hook de pagination avec mémoisation
  const { currentPage, setCurrentPage, totalPages, paginatedItems, totalItems } = usePagination(validBlogPosts);
  const currentYear = new Date().getFullYear();

  // Debug log au changement des états de pagination
  useEffect(() => {
    console.log('Pagination details:', {
      currentPage,
      totalPages,
      itemsPerPage: paginatedItems.length,
      totalItems: totalItems,
      actualBlogPostsLength: validBlogPosts.length
    });
  }, [currentPage, totalPages, paginatedItems, totalItems, validBlogPosts.length]);

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
      
      <main className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <BlogHeader />
        <div className="mt-12">
          {paginatedItems.length > 0 ? (
            <BlogArticleList articles={paginatedItems} />
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Aucun article trouvé pour le moment.</p>
              <p className="text-sm text-gray-500 mt-2">
                {validBlogPosts.length > 0 
                  ? "Problème avec la pagination, veuillez réessayer." 
                  : "Aucun article n'est disponible dans notre base de données."
                }
              </p>
            </div>
          )}
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
        <div className="mt-20 px-4">
          <BlogCTA />
        </div>
      </main>
    </div>
  );
};

export default Blog;
