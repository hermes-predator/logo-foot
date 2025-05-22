
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { OptimizedImage } from '@/components/ui/optimized-image';

const BlogHeader = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white border-b border-blue-100/50 py-8 px-4 sm:py-12">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Blog Logo Foot
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez notre collection d'articles sur les logos de football, découvrez leur histoire et signification
          </p>
        </div>
        
        {/* Carousel de présentation */}
        <div className="mt-6 mb-8 relative max-w-4xl mx-auto">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <OptimizedImage
                    src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png"
                    alt="Collection de logos de football"
                    priority
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <OptimizedImage
                    src="/lovable-uploads/e47a6810-ce15-4923-aaa6-7f01ad10481d.png"
                    alt="Histoire des logos de football européens"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <OptimizedImage
                    src="/lovable-uploads/81f57759-cc4e-457d-a95d-251dfa7958de.png"
                    alt="Évolution des logos de football"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <OptimizedImage
                    src="/lovable-uploads/473f7b51-aeab-46c6-8dae-ae1850e2f111.png"
                    alt="Logos de clubs de football africains"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <OptimizedImage
                    src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png"
                    alt="Logos des équipes nationales européennes"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </CarouselItem>
            </CarouselContent>
            {!isMobile && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
