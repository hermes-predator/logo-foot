
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
    <div className={cn("w-full max-w-full mx-auto px-0 md:-mx-10 lg:-mx-16", className)}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:ml-0">
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="flex justify-center basis-full pl-2 md:pl-0"
            >
              <div className="w-full h-full min-h-[350px] md:min-h-[450px] lg:min-h-[650px] max-h-[95vh] overflow-hidden rounded-lg">
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
        <CarouselPrevious className="hidden sm:flex left-0 sm:left-6 z-10" />
        <CarouselNext className="hidden sm:flex right-0 sm:right-6 z-10" />
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
