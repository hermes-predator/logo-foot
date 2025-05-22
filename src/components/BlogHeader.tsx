
import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { carouselImages } from "@/data/carousel/carouselImages";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";

export const BlogHeader = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    console.log("BlogHeader component mounted with new implementation");
    
    // Notification pour indiquer le début du chargement
    toast({
      title: "Chargement du carrousel",
      description: `Tentative de chargement de ${carouselImages.length} images`,
    });
  }, []);

  // Log pour confirmer que les images sont bien définies
  useEffect(() => {
    if (isMounted) {
      console.log(`Version améliorée: ${carouselImages.length} images à charger`);
      carouselImages.forEach((src, index) => {
        console.log(`Préparation image ${index + 1}: ${src}`);
        // Préchargement des images pour s'assurer qu'elles sont dans le cache
        const img = new Image();
        img.src = src;
      });
    }
  }, [isMounted]);

  // Suivi du chargement des images
  useEffect(() => {
    if (imagesLoaded === carouselImages.length && isMounted) {
      console.log(`✅ SUCCÈS: Les ${imagesLoaded} images sont chargées!`);
      toast({
        title: "Carrousel prêt",
        description: `Les ${imagesLoaded} images sont chargées avec succès`,
        // Remplacé "success" par "default" avec un icône personnalisé pour indiquer le succès
        variant: "default",
        icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      });
    }
  }, [imagesLoaded, carouselImages.length, isMounted]);

  const handleImageLoad = (index: number) => {
    console.log(`✓ Image ${index + 1} chargée avec succès`);
    setImagesLoaded(prev => prev + 1);
  };

  const handleImageError = (index: number, src: string) => {
    console.error(`✗ ERREUR: Impossible de charger l'image ${index + 1}: ${src}`);
    toast({
      title: "Erreur de chargement",
      description: `L'image ${index + 1} n'a pas pu être chargée`,
      variant: "destructive",
    });
  };

  // Navigation manuelle du carrousel pour tester toutes les images
  const goToNextSlide = () => {
    const nextIndex = (activeIndex + 1) % carouselImages.length;
    setActiveIndex(nextIndex);
    console.log(`Navigation à l'image ${nextIndex + 1}`);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-muted-foreground">
          {imagesLoaded} / {carouselImages.length} images chargées
        </p>
        <button 
          onClick={goToNextSlide}
          className="text-xs bg-muted px-2 py-1 rounded hover:bg-muted/80"
        >
          Tester l'image suivante
        </button>
      </div>
      
      <Carousel 
        ref={carouselRef}
        className="w-full" 
        opts={{ 
          loop: true, 
          align: "start",
          startIndex: activeIndex
        }}
        // Correction ici: utiliser une fonction qui reçoit l'index et le définit
        onSelect={(selectedIndex) => {
          setActiveIndex(selectedIndex);
        }}
      >
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={`carousel-item-${index}`}>
              <div className="relative p-1">
                {activeIndex === index && (
                  <span className="absolute top-2 right-2 z-10 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Image {index + 1}/{carouselImages.length}
                  </span>
                )}
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="rounded-md object-cover w-full h-full"
                    onError={() => handleImageError(index, src)}
                    onLoad={() => handleImageLoad(index)}
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
