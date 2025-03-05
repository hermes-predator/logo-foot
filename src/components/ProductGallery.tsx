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
    imageUrl: "/images/image1.jpg",
    videoUrl: "/videos/video1.mov",
    title: "Aperçu 1"
  },
  {
    id: 2,
    imageUrl: "/images/image2.jpg",
    videoUrl: "/videos/video2.mov",
    title: "Aperçu 2"
  },
  {
    id: 3,
    imageUrl: "/images/image3.jpg",
    videoUrl: "/videos/video3.mov",
    title: "Aperçu 3"
  },
  {
    id: 4,
    imageUrl: "/images/image4.jpg",
    videoUrl: "/videos/video4.mov",
    title: "Aperçu 4"
  },
  {
    id: 5,
    imageUrl: "/images/image5.jpg",
    videoUrl: "/videos/video5.mov",
    title: "Aperçu 5"
  },
  {
    id: 6,
    imageUrl: "/images/image6.jpg",
    videoUrl: "/videos/video6.mov",
    title: "Aperçu 6"
  },
  {
    id: 7,
    imageUrl: "/images/image7.jpg",
    videoUrl: "/videos/video7.mov",
    title: "Aperçu 7"
  },
  {
    id: 8,
    imageUrl: "/images/image8.jpg",
    videoUrl: "/videos/video8.mov",
    title: "Aperçu 8"
  },
  {
    id: 9,
    imageUrl: "/images/image9.jpg",
    videoUrl: "/videos/video9.mov",
    title: "Aperçu 9"
  },
  {
    id: 10,
    imageUrl: "/images/image10.jpg",
    videoUrl: "/videos/video10.mov",
    title: "Aperçu 10"
  },
  {
    id: 11,
    imageUrl: "/images/image11.jpg",
    videoUrl: "/videos/video11.mov",
    title: "Aperçu 11"
  },
  {
    id: 12,
    imageUrl: "/images/image12.jpg",
    videoUrl: "/videos/video12.mov",
    title: "Aperçu 12"
  },
  {
    id: 13,
    imageUrl: "/images/image13.jpg",
    videoUrl: "/videos/video13.mov",
    title: "Aperçu 13"
  },
  {
    id: 14,
    imageUrl: "/images/image14.jpg",
    videoUrl: "/videos/video14.mov",
    title: "Aperçu 14"
  },
  {
    id: 15,
    imageUrl: "/images/image15.jpg",
    videoUrl: "/videos/video15.mov",
    title: "Aperçu 15"
  },
  {
    id: 16,
    imageUrl: "/images/image16.jpg",
    videoUrl: "/videos/video16.mov",
    title: "Aperçu 16"
  },
  {
    id: 17,
    imageUrl: "/images/image17.jpg",
    videoUrl: "/videos/video17.mov",
    title: "Aperçu 17"
  },
  {
    id: 18,
    imageUrl: "/images/image18.jpg",
    videoUrl: "/videos/video18.mov",
    title: "Aperçu 18"
  },
  {
    id: 19,
    imageUrl: "/images/image19.jpg",
    videoUrl: "/videos/video19.mov",
    title: "Aperçu 19"
  },
  {
    id: 20,
    imageUrl: "/images/image20.jpg",
    videoUrl: "/videos/video20.mov",
    title: "Aperçu 20"
  }
];

const ProductGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
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
