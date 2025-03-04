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
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    videoUrl: "https://example.com/video4.mp4",
    title: "Aperçu 4"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    videoUrl: "https://example.com/video5.mp4",
    title: "Aperçu 5"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    videoUrl: "https://example.com/video6.mp4",
    title: "Aperçu 6"
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoUrl: "https://example.com/video7.mp4",
    title: "Aperçu 7"
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    videoUrl: "https://example.com/video8.mp4",
    title: "Aperçu 8"
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    videoUrl: "https://example.com/video9.mp4",
    title: "Aperçu 9"
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    videoUrl: "https://example.com/video10.mp4",
    title: "Aperçu 10"
  },
  {
    id: 11,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    videoUrl: "https://example.com/video11.mp4",
    title: "Aperçu 11"
  },
  {
    id: 12,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoUrl: "https://example.com/video12.mp4",
    title: "Aperçu 12"
  },
  {
    id: 13,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    videoUrl: "https://example.com/video13.mp4",
    title: "Aperçu 13"
  },
  {
    id: 14,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    videoUrl: "https://example.com/video14.mp4",
    title: "Aperçu 14"
  },
  {
    id: 15,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    videoUrl: "https://example.com/video15.mp4",
    title: "Aperçu 15"
  },
  {
    id: 16,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    videoUrl: "https://example.com/video16.mp4",
    title: "Aperçu 16"
  },
  {
    id: 17,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoUrl: "https://example.com/video17.mp4",
    title: "Aperçu 17"
  },
  {
    id: 18,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    videoUrl: "https://example.com/video18.mp4",
    title: "Aperçu 18"
  },
  {
    id: 19,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    videoUrl: "https://example.com/video19.mp4",
    title: "Aperçu 19"
  },
  {
    id: 20,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    videoUrl: "https://example.com/video20.mp4",
    title: "Aperçu 20"
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
