
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const BlogHeader = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Les images du carrousel
  const carouselImages = [
    "/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png",
    "/lovable-uploads/99e16506-d368-4b20-9efa-77f3c4870bf7.png",
    "/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png",
    "/lovable-uploads/bac193c3-2fcc-4ee0-964c-7e2c1ad83890.png",
    "/lovable-uploads/5aec79d7-9943-4bb4-90bd-c5f2679ddecf.png"  // Ajout de la nouvelle image en 5ème position
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="rounded-md object-cover w-full h-full"
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
