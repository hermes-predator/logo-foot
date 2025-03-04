
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
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden"
            onClick={() => {
              setActiveItem(item);
              setIsPlaying(true);
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover image-hover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Play className="w-12 h-12 text-white" />
            </div>
            <p className="text-center mt-2 text-sm text-gray-600">{item.title}</p>
          </div>
        ))}
      </div>

      {activeItem && isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center fade-in"
             onClick={() => {
               setActiveItem(null);
               setIsPlaying(false);
             }}>
          <div className="relative w-full max-w-4xl mx-4">
            <video
              className="w-full rounded-lg"
              controls
              autoPlay
              src={activeItem.videoUrl}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
