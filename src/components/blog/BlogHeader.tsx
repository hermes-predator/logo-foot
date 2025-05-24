
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { OptimizedImage } from "@/components/ui/optimized-image";

const BlogHeader = () => {
  const carouselImages = [
    {
      src: "/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png",
      alt: "Collection de logos de football organisée par pays - Image 1"
    },
    {
      src: "/lovable-uploads/81f57759-cc4e-457d-a95d-251dfa7958de.png", 
      alt: "Collection de logos de football organisée par pays - Image 2"
    },
    {
      src: "/lovable-uploads/923b6032-194e-45e0-8dbf-9b832712094d.png",
      alt: "Collection de logos de football organisée par pays - Image 3"
    },
    {
      src: "/lovable-uploads/99e16506-d368-4b20-9efa-77f3c4870bf7.png",
      alt: "Collection de logos de football organisée par pays - Image 4"
    },
    {
      src: "/lovable-uploads/blog-carousel-5.png",
      alt: "Collection de logos de football - Bosnie, Islande, Israël, Luxembourg et autres pays"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Blog Logo-Foot
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'univers passionnant des logos de football à travers nos articles détaillés et nos analyses approfondies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
