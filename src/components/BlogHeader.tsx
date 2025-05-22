
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { carouselImages } from "@/data/carousel/carouselImages";

export const BlogHeader = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    // Log pour confirmer le chargement du composant
    console.log("BlogHeader component mounted");
  }, []);

  // Log pour confirmer que les images sont bien définies
  useEffect(() => {
    if (isMounted) {
      console.log(`Carousel images loaded: ${carouselImages.length} images`);
      carouselImages.forEach((src, index) => {
        console.log(`Image ${index + 1}: ${src}`);
      });
    }
  }, [isMounted]);

  // Suivi du chargement des images
  useEffect(() => {
    if (imagesLoaded === carouselImages.length && isMounted) {
      console.log(`Toutes les ${imagesLoaded} images sont chargées avec succès`);
    }
  }, [imagesLoaded, carouselImages.length, isMounted]);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden">
      <p className="text-center mb-2 text-sm text-muted-foreground">
        {imagesLoaded} / {carouselImages.length} images chargées
      </p>
      <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="rounded-md object-cover w-full h-full"
                    onError={(e) => {
                      console.error(`Error loading image ${index + 1}: ${src}`);
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                    onLoad={() => {
                      console.log(`Image ${index + 1} loaded successfully`);
                      handleImageLoad();
                    }}
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default BlogHeader;
