

import React, { useState } from 'react';
import { GalleryItem as GalleryItemType } from '@/types/gallery';
import GalleryItem from './GalleryItem';
import GallerySkeleton from './GallerySkeleton';
import { ImageObjectSchema } from '../schema/ImageObjectSchema';
import { Helmet } from 'react-helmet-async';

interface ClubGalleryProps {
  items: GalleryItemType[];
  isLoading: boolean;
}

const ClubGallery = ({ items, isLoading }: ClubGalleryProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
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
          Array.from({ length: 60 }).map((_, index) => (
            <GallerySkeleton key={index} />
          ))
        ) : (
          items.map((item) => (
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
    </div>
  );
};

export default ClubGallery;
