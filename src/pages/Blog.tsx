
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { usePagination } from '../hooks/usePagination';
import BlogHeader from '../components/blog/BlogHeader';
import BlogArticleList from '../components/blog/BlogArticleList';
import BlogPagination from '../components/blog/BlogPagination';

const Blog = () => {
  console.log('Initial blogPosts in Blog component:', blogPosts.length, 'articles');
  
  // Log pour vérifier que les articles de Chelsea et Juventus sont bien présents
  const chelseaArticle = blogPosts.find(post => post.title.toLowerCase().includes('chelsea'));
  const juventusArticle = blogPosts.find(post => post.title.toLowerCase().includes('juventus'));
  
  console.log('Article Chelsea trouvé:', chelseaArticle ? {
    id: chelseaArticle.id,
    title: chelseaArticle.title,
    date: chelseaArticle.date
  } : 'Non trouvé');
  
  console.log('Article Juventus trouvé:', juventusArticle ? {
    id: juventusArticle.id,
    title: juventusArticle.title,
    date: juventusArticle.date
  } : 'Non trouvé');

  const { currentPage, setCurrentPage, totalPages, paginatedItems, totalItems } = usePagination(blogPosts);
  const currentYear = new Date().getFullYear();

  console.log('Pagination details:', {
    currentPage,
    totalPages,
    itemsPerPage: paginatedItems.length,
    totalItems
  });

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
          <BlogArticleList articles={paginatedItems} />
          {totalPages > 1 && (
            <BlogPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
