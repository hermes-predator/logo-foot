

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
              isPriority={currentPage === 1 && item.id <= 3} // Prioriser le chargement des 3 premières images de la première page
            />
          ))
        )}
      </div>

      {/* Pagination avec indicateurs visuels améliorés */}
      {!isLoading && totalPages > 1 && (
        <div className="space-y-4">
          {/* Indicateur de progression et statistiques */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-full border border-primary/20">
              <p className="text-sm font-medium text-primary">
                <span className="font-bold">{(currentPage - 1) * 12 + 1}-{Math.min(currentPage * 12, items.length)}</span> sur <span className="font-bold">{items.length} logos</span> disponibles
              </p>
            </div>
            
            {/* Barre de progression */}
            <div className="w-full max-w-md bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Pagination avec effet visuel */}
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg p-4 hover:shadow-xl transition-all duration-300">
              <Pagination>
                <PaginationContent className="gap-2">
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                        className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                          page === currentPage 
                            ? 'bg-primary text-white border-primary shadow-md scale-105' 
                            : 'hover:bg-primary/10 hover:border-primary/50'
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
                        className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
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
