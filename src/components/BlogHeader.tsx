
import React, { useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  type CarouselApi
} from "@/components/ui/carousel";
import { CarouselImageItem } from './blog/CarouselImageItem';
import { CarouselNavigation } from './blog/CarouselNavigation';
import { useCarouselImages } from './blog/hooks/useCarouselImages';

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
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const { imagesLoaded, handleImageLoad } = useCarouselImages(carouselImages.length);

  // Options du carousel
  const carouselOptions = {
    align: "start" as "start",
    loop: true
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
                <CarouselImageItem
                  key={index}
                  image={image}
                  index={index}
                  onImageLoad={handleImageLoad}
                />
              ))}
            </CarouselContent>
            
            <CarouselNavigation
              images={carouselImages}
              activeIndex={activeIndex}
              api={api}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
