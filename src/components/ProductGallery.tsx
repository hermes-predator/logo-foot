
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface GalleryItem {
  id: number;
  imageUrl: string;
  videoUrl: string;
  title: string;
}

const galleryItems: GalleryItem[] = Array.from({ length: 64 }, (_, index) => ({
  id: index + 1,
  imageUrl: `https://placehold.co/400x400?text=Logo+${index + 1}`,
  videoUrl: `/videos/video${index + 1}.mov`,
  title: `Logo officiel ${index + 1} - Collection complète logos clubs de foot`
}));

const ProductGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {hoveredItem === item.id ? (
                <video
                  src={item.videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  title={`Animation logo ${item.title}`}
                />
              ) : (
                <>
                  <img
                    src={item.imageUrl}
                    alt={`Logo vectoriel club de football ${item.title} - Format PNG transparent haute définition`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2">
                    <Play className="w-6 h-6 text-white drop-shadow-lg opacity-70" />
                  </div>
                </>
              )}
              <p className="text-center mt-2 text-sm text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
