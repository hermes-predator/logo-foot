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
import { AspectRatio } from './ui/aspect-ratio';
import { OptimizedImage } from './ui/optimized-image';
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
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="w-full px-4 mb-6">
        
      </div>
      <div className="w-full px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Les Plus Beaux Logos du Football
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre collection des meilleurs logos de clubs et équipes nationales.
            Des designs emblématiques qui ont marqué l'histoire du football mondial.
          </p>
        </div>
        
        <div className="w-full">
          <Carousel
            opts={carouselOptions}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="px-4">
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                      <AspectRatio ratio={16 / 9}>
                        <OptimizedImage
                          src={image.src}
                          alt={image.alt}
                          width={1000}
                          height={563}
                          priority={index === 0}
                          objectFit="cover"
                          className="w-full h-full transition-transform duration-500 hover:scale-105"
                          onLoad={() => handleImageLoad(index)}
                        />
                      </AspectRatio>
                      <div className="bg-white p-6">
                        <h3 className="font-semibold text-xl text-center">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation dots - Plus visibles */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              {carouselImages.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  className={`w-6 h-6 rounded-full transition-all duration-300 border-3 shadow-lg ${
                    activeIndex === index 
                      ? "bg-blue-600 border-blue-600 scale-125 shadow-blue-300" 
                      : "bg-white border-gray-500 hover:border-blue-500 hover:bg-blue-100 hover:scale-110"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="position-static h-12 w-12" />
              <CarouselNext className="position-static h-12 w-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
