

import React, { useState } from 'react';
import { Eye, Download } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { generateGalleryItems } from '@/utils/galleryData';

const BlogHeader = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const {
    clubItems
  } = generateGalleryItems();

  // Prendre les 8 premiers éléments pour le carrousel
  const carouselItems = clubItems.slice(0, 8);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/60 p-8 mb-8 shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* En-tête avec titre et description */}
        <div className="text-center mb-8">
          {/* Box ambrée pour le titre et le texte de description */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6 mb-6 max-w-4xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Vous cherchez tous les logos de club de foot ?
            </h2>
            <p className="text-lg text-amber-900 leading-relaxed">
              Téléchargez <span className="font-bold text-amber-800">+ de 8600 LOGOS</span> de Clubs de Football organisés par pays. 
              Obtenez toutes les ressources dans un fichier ZIP complet.
            </p>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            <Download className="h-5 w-5" />
            Voir le fichier
          </button>
        </div>

        {/* Carrousel d'aperçu */}
        <div className="relative">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Aperçu de quelques collections de ⦗FRONT-CLOUD⦘~ Football.zip
          </h3>
          
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            setApi={setCarouselApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselItems.map(item => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div 
                    className="relative aspect-square overflow-hidden bg-white border border-gray-200/60 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl" 
                    onMouseEnter={() => setHoveredItem(item.id)} 
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {hoveredItem === item.id ? (
                      <div className="w-full h-full">
                        <video 
                          src={item.videoUrl} 
                          className="absolute inset-0 w-full h-full object-contain bg-gray-900/95" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                        />
                        <div className="absolute top-2 right-2">
                          <Eye className="w-5 h-5 text-white drop-shadow-lg opacity-80" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={item.imageUrl} 
                          alt={item.altText} 
                          className="w-full h-full object-contain p-2" 
                          loading="lazy" 
                        />
                        <div className="absolute bottom-2 right-2">
                          <Eye className="w-5 h-5 text-gray-600 opacity-60" />
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600 font-medium">
                    {item.country}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          {/* Indicateurs de navigation modernes plus grands */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`h-3 transition-all duration-300 ${
                  index + 1 === current
                    ? 'bg-blue-600 w-12 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Badge de qualité */}
        <div className="text-center mt-6">
          
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;

