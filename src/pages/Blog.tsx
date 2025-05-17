
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

const Blog = () => {
  // Get category from URL search params
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Apply category filter when component mounts or URL changes
  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (categoryParam && Object.keys(BLOG_CATEGORIES).includes(categoryParam as BlogCategory)) {
        const filtered = blogPosts.filter(post => post.category === categoryParam as BlogCategory);
        setFilteredPosts(filtered);
      } else {
        setFilteredPosts(blogPosts);
      }
      
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 100);
  }, [categoryParam]);

  // Use pagination hook for the filtered posts
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
    totalItems
  } = usePagination(filteredPosts);
  
  const currentYear = new Date().getFullYear();

  // Get the category title for the page
  const categoryTitle = categoryParam && BLOG_CATEGORIES[categoryParam as BlogCategory] 
    ? BLOG_CATEGORIES[categoryParam as BlogCategory].name 
    : "Tous les articles";
  
  // Get the category description
  const categoryDescription = categoryParam && BLOG_CATEGORIES[categoryParam as BlogCategory] 
    ? BLOG_CATEGORIES[categoryParam as BlogCategory].description 
    : "Découvrez notre collection de logos de football des plus grands clubs.";

  // Generate enriched meta descriptions based on the category
  const getEnrichedDescription = () => {
    const baseDescription = `${categoryDescription}. Découvrez notre guide complet ${currentYear} sur les logos de football.`;
    
    if (categoryParam) {
      switch (categoryParam) {
        case 'logos':
          return `${baseDescription} Retrouvez l'histoire et l'analyse des logos de clubs français, espagnols, anglais et des équipes nationales. ${filteredPosts.length} articles détaillés avec images haute qualité.`;
        case 'technical':
          return `${baseDescription} Guides techniques et tutoriels sur la création et l'optimisation de logos football. Conseils d'experts pour les designers et passionnés.`;
        case 'pixel-art':
          return `${baseDescription} Tout sur le pixel art foot: guides de création, exemples inspirants et techniques pour réaliser vos propres logos et maillots en pixel art.`;
        case 'national-logos':
          return `${baseDescription} Explorez notre collection complète des logos et emblèmes des équipes nationales de football du monde entier.`;
        case 'competition-logos':
          return `${baseDescription} Découvrez les logos officiels des plus grandes compétitions de football mondiales et leur évolution au fil des années.`;
        case 'players':
          return `${baseDescription} Analyses détaillées des meilleurs joueurs de football: statistiques, parcours, style de jeu et évolution de carrière des stars du ballon rond.`;
        default:
          return baseDescription;
      }
    }
    return `${baseDescription} Notre blog regroupe ${totalItems} articles détaillés couvrant les logos des clubs de Ligue 1, Premier League, Liga, Bundesliga et des compétitions internationales.`;
  };

  // Generate enriched keywords based on the category
  const getEnrichedKeywords = () => {
    const baseKeywords = `blog logo foot ${currentYear}, logos football, ${categoryParam || 'emblèmes foot'}, design football, histoire logos football, guide logos foot`;
    
    if (categoryParam) {
      switch (categoryParam) {
        case 'logos':
          return `${baseKeywords}, collection logos foot, logos officiels clubs, écussons football, blasons foot, logos équipes nationales`;
        case 'technical':
          return `${baseKeywords}, créer logo football, design emblème club, tutoriel logo foot, logiciel création écusson`;
        case 'pixel-art':
          return `${baseKeywords}, pixel art foot, pixel art maillot de foot, pixel art logo foot, création pixel art football`;
        case 'national-logos':
          return `${baseKeywords}, logos équipes nationales, emblèmes nations football, drapeaux équipes foot, écussons sélections`;
        case 'competition-logos':
          return `${baseKeywords}, logos compétitions foot, champions league logo, coupe du monde logo, ligue 1 logo, premier league logo`;
        case 'players':
          return `${baseKeywords}, joueurs football, statistiques joueurs, profils footballeurs, meilleurs joueurs, analyse tactique, transferts`;
        default:
          return baseKeywords;
      }
    }
    return `${baseKeywords}, actualités logos foot, collection emblèmes football, guide écussons foot ${currentYear}`;
  };
  
  const metaDescription = getEnrichedDescription();
  const metaKeywords = getEnrichedKeywords();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Helmet>
        <title>{`${categoryTitle} | Blog Logo Foot : Guide Expert des Logos de Football ${currentYear}`}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${categoryTitle} | Blog Logo Foot : Guide Expert des Logos de Football ${currentYear}`} />
        <meta property="og:description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={`https://logo-foot.com/blog${categoryParam ? `?category=${categoryParam}` : ''}`} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="fr-FR" />
        <link rel="canonical" href={`https://logo-foot.com/blog${categoryParam ? `?category=${categoryParam}` : ''}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${categoryTitle} | Blog Logo Foot ${currentYear}`} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Nouvelles balises meta pour l'accessibilité et le SEO */}
        <meta property="article:section" content={categoryTitle} />
        <meta property="article:tag" content={categoryParam || 'logos football'} />
        <meta property="article:published_time" content={`${currentYear}-01-01T00:00:00+00:00`} />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta name="page-topic" content={`Logos de Football ${categoryParam ? '- ' + categoryTitle : ''}`} />
      </Helmet>
      <BlogSchemaMarkup isBlogList />
      
      <main className="container mx-auto px-4 py-3 pb-80">
        <Breadcrumbs />
        <BlogHeader />
        
        {categoryParam && (
          <div className="pl-4 mb-6">
            <h2 className="text-2xl font-bold mb-2">{categoryTitle}</h2>
            <p className="text-gray-600">{categoryDescription}</p>
          </div>
        )}
        
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
