
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { OptimizedImage } from '@/components/ui/optimized-image';

const BlogHeaderCarousel = () => {
  const carouselImages = [
    {
      src: "/lovable-uploads/99e16506-d368-4b20-9efa-77f3c4870bf7.png",
      alt: "Collection 1 - Logos de clubs de football par pays"
    },
    {
      src: "/lovable-uploads/923b6032-194e-45e0-8dbf-9b832712094d.png",
      alt: "Collection 2 - Logos de clubs de football par pays"
    },
    {
      src: "/lovable-uploads/741e3db9-8eff-4573-958f-1c6ddb91066a.png",
      alt: "Collection 3 - Logos de clubs de football par pays"
    },
    {
      src: "/lovable-uploads/d6aa1c61-5729-4033-a669-4573d524deed.png",
      alt: "Collection 4 - Logos de clubs de football par pays"
    },
    {
      src: "/lovable-uploads/bcdcfd9c-b9a9-4e2d-9e09-b997f4ae12da.png",
      alt: "Collection 5 - Logos de clubs de football par pays"
    },
    {
      src: "/lovable-uploads/ea858c6e-3a24-4219-864a-efa1334d6c7a.png",
      alt: "Collection 6 - Logos de clubs de football par pays"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    aspectRatio={4/3}
                    className="w-full h-full object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </div>
  );
};

export default BlogHeaderCarousel;
