
import React, { useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { AspectRatio } from '../ui/aspect-ratio';
import { OptimizedImage } from '../ui/optimized-image';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

// Images pour le carousel
const carouselImages = [
  {
    src: "/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png",
    alt: "Logo PSG",
    title: "Paris Saint-Germain"
  },
  {
    src: "/lovable-uploads/170059cc-f820-48d2-9a57-93c93a1ce8a7.png",
    alt: "Logo Barcelone",
    title: "FC Barcelone"
  },
  {
    src: "/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png",
    alt: "Logo Real Madrid",
    title: "Real Madrid"
  },
  {
    src: "/lovable-uploads/bac193c3-2fcc-4ee0-964c-7e2c1ad83890.png",
    alt: "Logo Manchester United",
    title: "Manchester United"
  },
  {
    src: "/lovable-uploads/676cb646-fca3-4d6a-86ad-b4e909cb51bd.png", 
    alt: "Logo Colombie",
    title: "Équipe Nationale de Colombie"
  }
];

const BlogHeader: React.FC = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(carouselImages.map(() => false));
  const [api, setApi] = useState<CarouselApi>();

  // Gérer le chargement des images
  const handleImageLoad = (index: number) => {
    const newLoadedState = [...imagesLoaded];
    newLoadedState[index] = true;
    setImagesLoaded(newLoadedState);
    
    // Afficher un toast pour la dernière image (5e image)
    if (index === 4) {
      toast({
        title: "Images chargées",
        description: "Toutes les images du carrousel sont prêtes",
        variant: "default",
        icon: <Check className="h-4 w-4 text-green-500" />
      });
    }
  };

  // Options du carousel
  const carouselOptions = {
    align: "start" as "start",
    loop: true
  };

  // Détecter le changement de slide actif
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };
  
  // Effect to listen to carousel changes
  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    
    // Cleanup
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Les Plus Beaux Logos du Football
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Découvrez notre collection des meilleurs logos de clubs et équipes nationales.
          Des designs emblématiques qui ont marqué l'histoire du football mondial.
        </p>
        
        <div className="max-w-4xl mx-auto my-10 px-4">
          <Carousel
            opts={carouselOptions}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      <AspectRatio ratio={16 / 9}>
                        <OptimizedImage
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={450}
                          priority={index === 0}
                          objectFit="cover"
                          className="w-full h-full transition-transform duration-500 hover:scale-105"
                          onLoad={() => handleImageLoad(index)}
                        />
                      </AspectRatio>
                      <div className="bg-white p-4">
                        <h3 className="font-medium text-lg">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-blue-600 w-4" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <CarouselPrevious className="position-static" />
              <CarouselNext className="position-static" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
