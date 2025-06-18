
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Link } from 'react-router-dom';
import type { CarouselApi } from '@/components/ui/carousel';
import { generateGalleryItems } from '@/utils/galleryData';

const BlogHeaderCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Utiliser les mêmes données que la galerie de la page d'accueil
  const { clubItems } = generateGalleryItems();
  
  // Images placeholder temporaires pour démonstration
  const placeholderImages = [
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop', // Football stadium
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop', // Soccer ball
    'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=400&fit=crop', // Football field
    'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=400&fit=crop', // Soccer player
    'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=400&fit=crop', // Football crowd
    'https://images.unsplash.com/photo-1552667466-07770ae110d0?w=400&h=400&fit=crop', // Soccer tactics
    'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=400&fit=crop', // Football boots
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', // Stadium lights
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', // Football net
    'https://images.unsplash.com/photo-1614632537190-23e4b2d5be43?w=400&h=400&fit=crop', // Soccer goal
  ];
  
  // Utiliser toutes les images de la galerie avec des placeholders
  const carouselImages = clubItems.map((item, index) => ({
    src: placeholderImages[index % placeholderImages.length], // Répéter les placeholders
    alt: item.altText,
    title: item.title
  }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-[1400px] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[1400px] mx-auto px-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="p-3">
                <Link to="/" className="block">
                  <div className="rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer hover:shadow-3xl">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      width={640}
                      height={640}
                      aspectRatio={1}
                      className="w-full h-full object-cover drop-shadow-xl"
                      priority={index < 3}
                    />
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
      
      {/* Navigation indicators modernisés */}
      <div className="flex justify-center items-center gap-3 mt-8 mb-6">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            className={`group relative overflow-hidden transition-all duration-500 ease-out ${
              index + 1 === current
                ? 'w-8 h-3 bg-gradient-to-r from-white to-white/80 rounded-full shadow-lg'
                : 'w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full hover:scale-110'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Aller à la slide ${index + 1}`}
          >
            {/* Effet de brillance pour l'indicateur actif */}
            {index + 1 === current && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out rounded-full" />
            )}
            
            {/* Effet de pulse subtil pour l'indicateur actif */}
            {index + 1 === current && (
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogHeaderCarousel;
