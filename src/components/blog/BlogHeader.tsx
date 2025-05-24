import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { OptimizedImage } from "@/components/ui/optimized-image";

const BlogHeader = () => {
  const carouselImages = [
    {
      src: "/lovable-uploads/blog-carousel-1.png",
      alt: "Collection de logos de football - Real Madrid, Barcelona, PSG et autres clubs européens"
    },
    {
      src: "/lovable-uploads/blog-carousel-2.png",
      alt: "Logos des équipes nationales - France, Allemagne, Brésil, Argentine et autres"
    },
    {
      src: "/lovable-uploads/blog-carousel-3.png",
      alt: "Écussons de clubs de football - Manchester United, Liverpool, Bayern Munich"
    },
    {
      src: "/lovable-uploads/blog-carousel-4.png",
      alt: "Logos de compétitions - Champions League, Premier League, Liga"
    },
    {
      src: "/lovable-uploads/blog-carousel-5.png",
      alt: "Collection de logos de football - Bosnie, Islande, Israël, Luxembourg et autres pays"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Blog Logo Foot
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'univers passionnant des logos de football : analyses, histoires et créations artistiques
          </p>
        </div>
        
        {/* Carousel Section */}
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 md:h-80 object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 border-white/20" />
            <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 border-white/20" />
          </Carousel>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-100">500+</div>
            <div className="text-sm md:text-base text-blue-200">Logos analysés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-100">50+</div>
            <div className="text-sm md:text-base text-purple-200">Pays couverts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-100">100+</div>
            <div className="text-sm md:text-base text-indigo-200">Articles publiés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
            <div className="text-sm md:text-base text-gray-200">Accès libre</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
