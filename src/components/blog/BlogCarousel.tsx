
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
import { OptimizedImage } from "@/components/ui/optimized-image";

interface BlogCarouselProps {
  images: { src: string; alt: string }[];
  className?: string;
}

const BlogCarousel = ({ images, className }: BlogCarouselProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn("w-full max-w-full mx-auto px-0 -mx-4 md:-mx-12 lg:-mx-20", className)}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="flex justify-center basis-full pl-0"
            >
              <div className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[700px] max-h-[95vh] overflow-hidden rounded-lg">
                <OptimizedImage 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full hover:scale-105 transition-transform duration-500"
                  objectFit="contain"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-2 sm:left-8 z-10" />
        <CarouselNext className="hidden sm:flex right-2 sm:right-8 z-10" />
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
