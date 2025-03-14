
import React, { useState } from 'react';
import { GalleryItem as GalleryItemType } from '@/types/gallery';
import GalleryItem from './GalleryItem';
import GallerySkeleton from './GallerySkeleton';

interface CompetitionGalleryProps {
  items: GalleryItemType[];
  isLoading: boolean;
}

const CompetitionGallery = ({ items, isLoading }: CompetitionGalleryProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {isLoading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <GallerySkeleton key={index} />
        ))
      ) : (
        items.map((item) => (
          <GalleryItem
            key={item.id}
            item={item}
            onHover={setHoveredItem}
            isHovered={hoveredItem === item.id}
          />
        ))
      )}
    </div>
  );
};

export default CompetitionGallery;
