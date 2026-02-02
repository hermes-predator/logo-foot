import React, { useState } from 'react';
import { GalleryItem as GalleryItemType } from '@/types/gallery';
import GalleryItem from './GalleryItem';
import GallerySkeleton from './GallerySkeleton';
import { ImageObjectSchema } from '../schema/ImageObjectSchema';
import { Helmet } from 'react-helmet-async';
import { useGalleryPagination } from '@/hooks/useGalleryPagination';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface ClubGalleryProps {
  items: GalleryItemType[];
  isLoading: boolean;
}

const ClubGallery = ({ items, isLoading }: ClubGalleryProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  // Pagination: 12 items par page (4x3)
  const { currentPage, setCurrentPage, totalPages, paginatedItems } = useGalleryPagination(items, 12);
  
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

  return (
    <div className="space-y-12">
      {/* Ajouter les schémas JSON-LD enrichis pour les 3 premières images */}
      <Helmet>
        {imageSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* Grille avec style bento sur fond sombre */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {isLoading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <GallerySkeleton key={index} />
          ))
        ) : (
          paginatedItems.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onHover={setHoveredItem}
              isHovered={hoveredItem === item.id}
              isPriority={currentPage === 1 && item.id <= 3}
            />
          ))
        )}
      </div>

      {/* Pagination avec style sombre */}
      {!isLoading && totalPages > 1 && (
        <div className="space-y-4 sm:space-y-6">
          {/* Indicateur de progression */}
          <div className="flex flex-col items-center space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              <span className="text-white font-bold">{(currentPage - 1) * 12 + 1}-{Math.min(currentPage * 12, items.length)}</span> sur <span className="text-white font-bold">{items.length} fichiers</span>
            </p>
            
            {/* Barre de progression lime */}
            <div className="w-full max-w-[200px] sm:max-w-md bg-slate-700/50 rounded-full h-1.5 sm:h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-lime-500 to-lime-400 h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700/50 p-2 sm:p-4">
              <Pagination>
                <PaginationContent className="gap-1 sm:gap-2">
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="cursor-pointer bg-slate-700/50 hover:bg-slate-600/50 hover:border-lime-500/50 border border-slate-600/50 text-white transition-all duration-300 font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-sm"
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                        className={`cursor-pointer transition-all duration-300 font-semibold px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl min-w-[28px] sm:min-w-[40px] text-[10px] sm:text-sm ${
                          page === currentPage 
                            ? 'bg-lime-500 text-navy border-lime-500 hover:bg-lime-500 hover:text-navy' 
                            : 'bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-600/50 hover:border-lime-500/50 hover:text-white'
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="cursor-pointer bg-slate-700/50 hover:bg-slate-600/50 hover:border-lime-500/50 border border-slate-600/50 text-white transition-all duration-300 font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-sm"
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubGallery;
