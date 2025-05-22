
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface BlogCarouselProps {
  images: { src: string; alt: string }[];
  className?: string;
}

const BlogCarousel = ({ images, className }: BlogCarouselProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn("w-full mx-auto", className)}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className={cn(
                "flex justify-center", 
                isMobile ? "basis-full" : "basis-full md:basis-4/5 lg:basis-3/4"
              )}
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
