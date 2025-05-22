import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const BlogHeader = ({ title, excerpt }: { title?: string; excerpt?: string }) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const pathname = useLocation().pathname;
  const isHomePage = pathname === "/";
  const showPromoHeader = !isHomePage;

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        carouselApi.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  const canScrollPrev = carouselApi?.canScrollPrev();
  const canScrollNext = carouselApi?.canScrollNext();

  const scrollToPrev = () => {
    carouselApi?.scrollPrev();
  };

  const scrollToNext = () => {
    carouselApi?.scrollNext();
  };

  if (!showPromoHeader) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-purple-100/70 to-amber-100/50 py-4 border-b border-purple-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          
          {/* Text content */}
          <div className="lg:w-1/3 space-y-3 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">
              8600+ Logos de Football Organisés
            </h2>
            <p className="text-sm text-gray-600 max-w-md mx-auto lg:mx-0">
              Collection complète de logos et écussons de clubs de football, équipes nationales et compétitions du monde entier.
            </p>
            <div className="flex justify-center lg:justify-start pt-1">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-purple-600 hover:bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500"
              >
                Voir le fichier
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Carousel */}
          <div className="lg:w-2/3">
            <div className="relative overflow-hidden">
              <Carousel 
                setApi={setCarouselApi} 
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <div className="absolute right-0 top-0 px-4 py-2 z-10">
                  <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-800 inline-flex items-center gap-1 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    <span>Format PNG</span>
                  </div>
                </div>
                
                <CarouselContent>
                  {/* First image */}
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                    <div className="flex justify-center">
                      <div className="relative rounded-lg overflow-hidden shadow-md max-w-full h-auto">
                        <img 
                          src="/lovable-uploads/676cb646-fca3-4d6a-86ad-b4e909cb51bd.png" 
                          alt="Collections de logos de clubs européens" 
                          className="w-full h-auto object-cover" 
                        />
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Second image */}
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                    <div className="flex justify-center">
                      <div className="relative rounded-lg overflow-hidden shadow-md max-w-full h-auto">
                        <img 
                          src="/lovable-uploads/81f57759-cc4e-457d-a95d-251dfa7958de.png" 
                          alt="Collections de logos nationaux et compétitions" 
                          className="w-full h-auto object-cover" 
                        />
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Third image */}
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                    <div className="flex justify-center">
                      <div className="relative rounded-lg overflow-hidden shadow-md max-w-full h-auto">
                        <img 
                          src="/lovable-uploads/473f7b51-aeab-46c6-8dae-ae1850e2f111.png" 
                          alt="Collections de logos de clubs de Premier League" 
                          className="w-full h-auto object-cover" 
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Fourth image */}
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                    <div className="flex justify-center">
                      <div className="relative rounded-lg overflow-hidden shadow-md max-w-full h-auto">
                        <img 
                          src="/lovable-uploads/923b6032-194e-45e0-8dbf-9b832712094d.png" 
                          alt="Collections de logos: Slovaquie, Biélorussie, Écosse, Irlande, Pays de Galles, Finlande, Ukraine, Australie, Arabie Saoudite" 
                          className="w-full h-auto object-cover" 
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Fifth image - Newly added */}
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                    <div className="flex justify-center">
                      <div className="relative rounded-lg overflow-hidden shadow-md max-w-full h-auto">
                        <img 
                          src="/lovable-uploads/c55cfd1a-a476-4b21-b9ec-eaf9cdf587b5.png" 
                          alt="Collections de logos: Bosnie, Islande, Israël, Luxembourg, Slovénie, Albanie, Irlande-Nord, Malte, Azerbaïdjan" 
                          className="w-full h-auto object-cover" 
                        />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />

                {/* Custom dots */}
                <div className="flex justify-center mt-4 gap-1.5">
                  <button
                    type="button"
                    className="inline-block h-2 w-2 rounded-full bg-gray-300 opacity-50 transition-opacity hover:opacity-100"
                    aria-label="Go to slide 1"
                    onClick={() => carouselApi?.scrollTo(0)}
                  />
                  <button
                    type="button"
                    className="inline-block h-2 w-2 rounded-full bg-gray-300 opacity-50 transition-opacity hover:opacity-100"
                    aria-label="Go to slide 2"
                    onClick={() => carouselApi?.scrollTo(1)}
                  />
                  <button
                    type="button"
                    className="inline-block h-2 w-2 rounded-full bg-gray-300 opacity-50 transition-opacity hover:opacity-100"
                    aria-label="Go to slide 3"
                    onClick={() => carouselApi?.scrollTo(2)}
                  />
                  <button
                    type="button"
                    className="inline-block h-2 w-2 rounded-full bg-gray-300 opacity-50 transition-opacity hover:opacity-100"
                    aria-label="Go to slide 4"
                    onClick={() => carouselApi?.scrollTo(3)}
                  />
                  <button
                    type="button"
                    className="inline-block h-2 w-2 rounded-full bg-gray-300 opacity-50 transition-opacity hover:opacity-100"
                    aria-label="Go to slide 5"
                    onClick={() => carouselApi?.scrollTo(4)}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
