
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Link } from 'react-router-dom';
import type { CarouselApi } from '@/components/ui/carousel';

const BlogHeaderCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const carouselImages = [
    {
      src: "/lovable-uploads/42eae4e6-1176-4a6a-b811-98f89e509603.png",
      alt: "Collections de logos - Image 1"
    },
    {
      src: "/lovable-uploads/25a5462c-2f32-4a9a-8d6e-9c1f677fe604.png",
      alt: "Collections de logos - Image 2"
    },
    {
      src: "/lovable-uploads/437d5bd3-a26d-4459-970c-1297f805eb0b.png",
      alt: "Collections de logos - Image 3"
    }
  ];

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
            <CarouselItem key={index} className="basis-1/2">
              <div className="p-3">
                <Link to="/" className="block">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer hover:shadow-xl">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      width={640}
                      height={640}
                      aspectRatio={1}
                      className="w-full h-full object-cover drop-shadow-md"
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
      <div className="flex justify-center items-center gap-3 mt-8">
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
