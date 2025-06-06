
import React, { useState, useEffect } from 'react';
import { GalleryItem as GalleryItemType } from '@/types/gallery';
import GalleryItem from './GalleryItem';
import GallerySkeleton from './GallerySkeleton';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationEllipsis 
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageObjectSchema } from '../schema/ImageObjectSchema';
import { Helmet } from 'react-helmet-async';

interface ClubGalleryProps {
  items: GalleryItemType[];
  isLoading: boolean;
}

const ITEMS_PER_PAGE = 12;

const ClubGallery = ({ items, isLoading }: ClubGalleryProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  // Générer les schémas JSON-LD pour les 3 premières images (best-sellers)
  const topThreeItems = items.slice(0, 3);
  const imageSchemas = topThreeItems.map((item, index) => 
    ImageObjectSchema({
      imageUrl: item.imageUrl,
      title: `Logo ${item.country} - Collection Premium ${index === 0 ? '(Premier League)' : index === 1 ? '(La Liga)' : '(Bundesliga)'}`,
      altText: `Collection complète de logos de football de ${item.country} en haute qualité`,
      authorName: "FRONT-CLOUD",
      width: 800,
      height: 800
    })
  );

  const getVisiblePages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    
    if (currentPage <= 3) return [1, 2, 3, 4, 'ellipsis', totalPages];
    if (currentPage >= totalPages - 2) return [1, 'ellipsis', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    
    return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
  };

  return (
    <div className="space-y-6">
      {/* Ajouter les schémas JSON-LD enrichis pour les 3 premières images */}
      <Helmet>
        {imageSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <GallerySkeleton key={index} />
          ))
        ) : (
          currentItems.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onHover={setHoveredItem}
              isHovered={hoveredItem === item.id}
              isPriority={item.id <= 3} // Prioriser le chargement des 3 premières images
            />
          ))
        )}
      </div>

      {!isLoading && totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent className="gap-2">
            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                className={`w-11 h-11 p-0 flex items-center justify-center rounded-md
                  shadow-sm transition-all duration-300 border
                  ${currentPage === 1 
                    ? 'opacity-50 cursor-not-allowed border-gray-100 bg-gray-50' 
                    : 'border-gray-300/70 bg-gradient-to-b from-white to-gray-50/95 hover:border-gray-500 hover:bg-gradient-to-b hover:from-gray-50 hover:to-white hover:shadow-md hover:shadow-gray-200/30 cursor-pointer'
                  }`}
                aria-disabled={currentPage === 1}
              >
                <ChevronLeft className="h-5 w-5 stroke-[2px]" />
              </PaginationLink>
            </PaginationItem>

            {getVisiblePages().map((page, index) => (
              <PaginationItem key={index}>
                {page === 'ellipsis' ? (
                  <PaginationEllipsis className="text-gray-500 mx-0.5 text-sm" />
                ) : (
                  <PaginationLink
                    onClick={() => setCurrentPage(page as number)}
                    isActive={currentPage === page}
                    className={`w-11 h-11 p-0 flex items-center justify-center rounded-md text-base
                      transition-all duration-300 cursor-pointer font-medium backdrop-blur-[2px]
                      ${currentPage === page 
                        ? 'bg-gradient-to-br from-gray-800/95 to-gray-700/95 text-white ring-1 ring-gray-600/30 shadow-md shadow-gray-400/10 border-0 hover:text-white hover:ring-gray-500/40 hover:from-gray-700/95 hover:to-gray-600/95' 
                        : 'bg-gradient-to-b from-white to-gray-50/95 border border-gray-300/70 hover:border-gray-500/60 hover:bg-gradient-to-b hover:from-gray-50 hover:to-white hover:text-gray-800 shadow-sm hover:shadow-md hover:shadow-gray-200/40'
                      }`}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                className={`w-11 h-11 p-0 flex items-center justify-center rounded-md
                  shadow-sm transition-all duration-300 border
                  ${currentPage === totalPages 
                    ? 'opacity-50 cursor-not-allowed border-gray-100 bg-gray-50' 
                    : 'border-gray-300/70 bg-gradient-to-b from-white to-gray-50/95 hover:border-gray-500 hover:bg-gradient-to-b hover:from-gray-50 hover:to-white hover:shadow-md hover:shadow-gray-200/30 cursor-pointer'
                  }`}
                aria-disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-5 w-5 stroke-[2px]" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ClubGallery;
