

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

      {/* Pagination avec style branded amélioré */}
      {!isLoading && totalPages > 1 && (
        <div className="space-y-8">
          {/* Indicateur de progression et statistiques */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-base font-medium text-slate-600">
              <span className="text-black font-bold">{(currentPage - 1) * 12 + 1}-{Math.min(currentPage * 12, items.length)}</span> sur <span className="text-black font-bold">{items.length} dossiers</span> affichés
            </p>
            
            {/* Barre de progression élégante avec animation fluide */}
            <div className="w-full max-w-md bg-slate-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-slate-700 to-black h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Pagination avec design branded amélioré */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <Pagination>
                <PaginationContent className="gap-2">
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="cursor-pointer bg-slate-50 hover:bg-black hover:text-white border border-slate-200 hover:border-black transition-all duration-200 active:scale-95 font-medium px-3 py-2 rounded-lg"
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                        className={`cursor-pointer transition-all duration-200 active:scale-95 font-medium px-3 py-2 rounded-lg min-w-[40px] ${
                          page === currentPage 
                            ? 'bg-black text-white border-black scale-[1.02]' 
                            : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-800'
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
                        className="cursor-pointer bg-slate-50 hover:bg-black hover:text-white border border-slate-200 hover:border-black transition-all duration-200 active:scale-95 font-medium px-3 py-2 rounded-lg"
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
