
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLazyLoading } from '@/hooks/useLazyLoading';

interface BlogHeaderProps {
  images: string[];
  title: string;
  description: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { shouldLoad, handleLoad } = useLazyLoading();

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-tl-2xl rounded-tr-none shadow-lg">
      {/* Carrousel d'images */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 z-10' 
                : 'opacity-0 z-0'
            }`}
          >
            {shouldLoad || index < 2 ? (
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="h-full w-full object-cover transition-opacity duration-300"
                loading={index < 2 ? 'eager' : 'lazy'}
                onLoad={handleLoad}
                style={{ opacity: shouldLoad ? 1 : 0 }}
              />
            ) : (
              <div className="h-full w-full bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-gray-400">Chargement...</div>
              </div>
            )}
          </div>
        ))}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20" />

        {/* Contrôles du carrousel */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all duration-200"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all duration-200"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </>
        )}

        {/* Indicateurs */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Contenu textuel */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
