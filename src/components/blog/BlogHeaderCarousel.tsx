
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { OptimizedImage } from '@/components/ui/optimized-image';

const BlogHeaderCarousel = () => {
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
    },
    {
      src: "/lovable-uploads/00cc641d-2544-4371-a712-0537f57f8887.png",
      alt: "Collections de logos - Image 4"
    },
    {
      src: "/lovable-uploads/90dcc6ef-0dc7-4a03-8e58-609f031c23c4.png",
      alt: "Collections de logos - Image 5"
    },
    {
      src: "/lovable-uploads/6bcd6dd7-6a9c-46cc-b20b-2d1e84099b58.png",
      alt: "Collections de logos - Image 6"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="basis-1/2">
              <div className="p-2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    width={540}
                    height={540}
                    aspectRatio={1}
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
