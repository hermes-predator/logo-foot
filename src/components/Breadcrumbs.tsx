
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema, generateBreadcrumbItems } from './schema/BreadcrumbSchema';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbsProps {
  postTitle?: string;
  category?: string;
  customItems?: Array<{ name: string; url: string }>;
}

const Breadcrumbs = ({ postTitle, category, customItems }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Generate breadcrumb items
  const breadcrumbItems = customItems ? 
    [
      { name: "Accueil", url: "/", position: 1 },
      ...customItems.map((item, index) => ({
        ...item,
        position: index + 2
      }))
    ] :
    generateBreadcrumbItems(location.pathname, postTitle, category);

  // Generate schema for SEO
  const breadcrumbSchema = BreadcrumbSchema({ items: breadcrumbItems });

  const generateBreadcrumbLabel = (path: string) => {
    // Transformer les slugs en labels plus lisibles
    switch(path) {
      case 'blog':
        return 'Blog';
      case 'payment-success':
        return 'Confirmation de paiement';
      case 'gallery':
        return 'Galerie de logos';
      default:
        if (path.match(/^\d+-/)) {
          return path
            .replace(/^\d+-/, '')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }
        return path
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    }
  };

  const paths = location.pathname.split('/').filter(path => path);

  return (
    <>
      {/* Enhanced Breadcrumb Schema for SERP */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav 
        aria-label="Fil d'Ariane" 
        className="pt-4 pb-2 px-4 md:px-6 mb-6 bg-white border-b border-gray-200 shadow-sm"
      >
        <Breadcrumb>
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <Link 
                to="/" 
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 px-4 h-9 rounded-full transition-colors duration-200 group shadow-sm hover:shadow"
                aria-label="Accueil"
              >
                <Home className="h-4 w-4 text-gray-700" />
                <span className="text-gray-700 font-medium text-sm">Accueil</span>
              </Link>
            </BreadcrumbItem>
            
            {paths.map((path, index) => {
              const isLast = index === paths.length - 1;
              const label = postTitle && isLast && path.match(/^\d+/) ? 
                (postTitle.length > 50 ? postTitle.substring(0, 50) + "..." : postTitle) :
                generateBreadcrumbLabel(path);
              
              return (
                <React.Fragment key={`breadcrumb-${index}-${path}`}>
                  <BreadcrumbSeparator aria-hidden="true">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {isLast ? (
                      <span 
                        className="px-3 py-1 bg-white rounded-full text-gray-800 font-medium flex items-center shadow-sm"
                        aria-current="page"
                      >
                        {label}
                      </span>
                    ) : (
                      <Link 
                        to={`/${paths.slice(0, index + 1).join('/')}`}
                        className="px-3 py-1 bg-white hover:bg-gray-50 rounded-full text-gray-700 font-medium transition-all duration-200 shadow-sm hover:shadow flex items-center relative overflow-hidden group"
                        aria-label={`Aller à ${label}`}
                      >
                        <span>{label}</span>
                        <span className="absolute inset-0 w-full h-full bg-gray-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                      </Link>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    </>
  );
};

export default Breadcrumbs;
