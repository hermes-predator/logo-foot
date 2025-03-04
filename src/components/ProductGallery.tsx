import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface GalleryItem {
  id: number;
  imageUrl: string;
  videoUrl: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    videoUrl: "https://example.com/video1.mp4",
    title: "Aperçu 1"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoUrl: "https://example.com/video2.mp4",
    title: "Aperçu 2"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    videoUrl: "https://example.com/video3.mp4",
    title: "Aperçu 3"
  }
];

const ProductGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden h-64"
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
              />
            ) : (
              <>
                <img
                  src={item.imageUrl}
                  alt={item.title}
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
  );
};

export default ProductGallery;
