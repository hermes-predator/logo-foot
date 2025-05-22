
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
    <div className={cn("w-full max-w-[95vw] mx-auto", className)}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="flex justify-center basis-full"
            >
              <div className="w-full h-full max-h-[80vh] overflow-hidden rounded-lg">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="object-contain w-full h-full hover:scale-110 transition-transform duration-500"
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
