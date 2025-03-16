import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';
import { format } from 'date-fns';
import { blogPosts } from '../data/blogPosts';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { useReadingTime } from '../hooks/useReadingTime';
import { usePagination, ITEMS_PER_PAGE } from '../hooks/usePagination';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const { currentPage, setCurrentPage, totalPages, paginatedItems } = usePagination(blogPosts);

  const metaTitle = "Blog Logo Foot : Guide Expert des Logos de Football 2024 | Analyse & Histoire";
  const metaDescription = "Explorez notre blog spécialisé sur les logos de football : histoire, design, évolution et analyses détaillées. Plus de 15 articles experts sur les emblèmes du football mondial.";
  const metaKeywords = "blog logo foot, logos football, emblèmes foot, histoire logos football, design foot, actualités logos foot, guide logos football 2024";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://logo-foot.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href="https://logo-foot.com/blog" />
        <meta name="author" content="Logo Foot" />
        <meta property="article:publisher" content="https://logo-foot.com" />
        <meta property="og:site_name" content="Logo Foot" />
      </Helmet>
      
      <BlogSchemaMarkup isBlogList />
      
      <main className="container mx-auto py-20 px-4">
        <Breadcrumbs />
        
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-medium mb-6">
            <span>Le Blog des Logos de Football</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 whitespace-nowrap">
            Articles sur le logo de foot
          </h1>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 via-white to-gray-100/50 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="font-semibold text-gray-800">
                  Le Blog Logo-Foot
                </h2>
              </div>
              
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bienvenue sur le blog Logo-Foot, votre source d'expertise sur les logos et emblèmes du football. Chaque article est le fruit d'une recherche approfondie pour vous faire découvrir l'histoire fascinante et l'évolution des identités visuelles qui font la richesse du football mondial.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12" aria-label="Liste des articles">
          {paginatedItems.map((post) => (
            <article 
              key={post.id}
              className="group flex flex-col bg-gradient-to-b from-white to-gray-50/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden"
            >
              <div className="p-6 flex-1">
                <time 
                  className="text-xs font-medium text-gray-600 px-2 py-1 rounded-full inline-block border border-gray-200 shadow-sm bg-white"
                  dateTime={post.date}
                >
                  {format(new Date(post.date), 'dd-MM-yyyy')}
                </time>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>
              
              <Link 
                to={`/blog/${post.id}`} 
                className="p-4 bg-gray-100/80 text-purple-600 font-medium inline-flex items-center justify-center gap-1 transition-colors w-full"
                aria-label={`Lire l'article : ${post.title}`}
              >
                Lire l'article
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </article>
          ))}
        </section>

        <Pagination className="mt-8">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="cursor-pointer"
                />
              </PaginationItem>
            )}
            
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              
              // Show ellipsis for large page ranges
              if (totalPages > 7) {
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        onClick={() => setCurrentPage(pageNumber)}
                        isActive={currentPage === pageNumber}
                        className="cursor-pointer"
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                  return <PaginationEllipsis key={pageNumber} />;
                }
                return null;
              }
              
              // Show all pages if total pages <= 7
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => setCurrentPage(pageNumber)}
                    isActive={currentPage === pageNumber}
                    className="cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="cursor-pointer"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
};

export default Blog;
