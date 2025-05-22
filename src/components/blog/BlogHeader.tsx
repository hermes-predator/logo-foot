
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { OptimizedImage } from '../ui/optimized-image';

const BlogHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="py-8 md:py-12 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Contenu textuel */}
            <div className="w-full lg:w-1/2 space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Le Blog des <span className="text-blue-600">Logos de Football</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-lg text-gray-700">
                  Explorez l'univers fascinant des logos et emblèmes de football à travers nos articles détaillés sur l'histoire, le design et les évolutions des identités visuelles des clubs et compétitions du monde entier.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  #LogoFoot
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                  #DesignFootball
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                  #HistoireFootball
                </span>
              </motion.div>
            </div>

            {/* Carrousel d'images */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <OptimizedImage 
                          src="/lovable-uploads/bac193c3-2fcc-4ee0-964c-7e2c1ad83890.png" 
                          alt="Logos de clubs européens" 
                          width={800} 
                          height={600}
                          priority
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <OptimizedImage 
                          src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png" 
                          alt="Évolution des logos de football" 
                          width={800} 
                          height={600}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <OptimizedImage 
                          src="/lovable-uploads/d6aa1c61-5729-4033-a669-4573d524deed.png" 
                          alt="Logos de compétitions internationales" 
                          width={800} 
                          height={600}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <OptimizedImage 
                          src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
                          alt="Design de logos modernes" 
                          width={800} 
                          height={600}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <OptimizedImage 
                          src="/lovable-uploads/49bb23b3-f4bf-4344-922e-525b9aca944e.png" 
                          alt="Collections de logos de pays européens" 
                          width={800} 
                          height={600}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="hidden sm:block">
                  <CarouselPrevious className="-left-4" />
                  <CarouselNext className="-right-4" />
                </div>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
