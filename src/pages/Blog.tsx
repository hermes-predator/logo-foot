
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { BLOG_CATEGORIES } from '../types/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { usePagination } from '../hooks/usePagination';
import BlogHeader from '../components/blog/BlogHeader';
import BlogArticleList from '../components/blog/BlogArticleList';
import BlogPagination from '../components/blog/BlogPagination';
import FloatingCTA from '../components/blog/FloatingCTA';

const Blog = () => {
  // Suppression de l'utilisation des searchParams/filtrage
  // Tous les articles sont affichés directement
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simule le chargement pour l’affichage des skeletons
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Pagination sans filtrage : tous les articles
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems
  } = usePagination(blogPosts);

  const currentYear = new Date().getFullYear();

  // Valeurs par défaut génériques pour la page Blog
  const categoryTitle = "Tous les articles";
  const categoryDescription = "Explorez tous nos articles sur les logos de football";

  // Générer des meta descriptions/keywords génériques
  const metaDescription = `${categoryDescription}. Découvrez notre guide complet ${currentYear} sur les logos de football. Notre blog regroupe ${totalItems} articles détaillés couvrant les logos des clubs de Ligue 1, Premier League, Liga, Bundesliga et des compétitions internationales.`;
  const metaKeywords = `blog logo foot ${currentYear}, logos football, emblèmes foot, design football, histoire logos football, guide logos foot, actualités logos foot, collection emblèmes football, guide écussons foot ${currentYear}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Helmet>
        <title>{`Blog | Blog Logo Foot : Guide Expert des Logos de Football ${currentYear}`}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`Blog | Blog Logo Foot : Guide Expert des Logos de Football ${currentYear}`} />
        <meta property="og:description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://logo-foot.com/blog" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="fr-FR" />
        <link rel="canonical" href="https://logo-foot.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Blog | Blog Logo Foot ${currentYear}`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta property="article:section" content={categoryTitle} />
        <meta property="article:tag" content="logos football" />
        <meta property="article:published_time" content={`${currentYear}-01-01T00:00:00+00:00`} />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta name="page-topic" content="Logos de Football" />
      </Helmet>
      <BlogSchemaMarkup isBlogList />
      
      <main className="container mx-auto px-4 py-3 pb-80">
        <Breadcrumbs />
        <BlogHeader />
        {/* SUPPRESSION de la barre des sous-groupes */}
        <div className="pl-4 mb-6">
          <h2 className="text-2xl font-bold mb-2">{categoryTitle}</h2>
          <p className="text-gray-600">{categoryDescription}</p>
        </div>
        <div className="mt-4" id="articles-list" role="region" aria-label="Liste des articles">
          <BlogArticleList articles={paginatedItems} isLoading={isLoading} />
          {totalPages > 1 && (
            <div className="px-4">
              <BlogPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
          )}
        </div>
      </main>
      <FloatingCTA />
    </div>
  );
};

export default Blog;

