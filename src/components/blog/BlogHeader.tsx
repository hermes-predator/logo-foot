
import React from 'react';
import { OptimizedImage } from '../ui/optimized-image';
import { Triangle } from 'lucide-react';

const BlogHeader = () => {
  const images = [
    {
      src: "/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png",
      alt: "Logo PSG - Paris Saint-Germain"
    },
    {
      src: "/lovable-uploads/99e16506-d368-4b20-9efa-77f3c4870bf7.png", 
      alt: "Logo Manchester City"
    },
    {
      src: "/lovable-uploads/676cb646-fca3-4d6a-86ad-b4e909cb51bd.png",
      alt: "Logo Real Madrid"
    },
    {
      src: "/lovable-uploads/923b6032-194e-45e0-8dbf-9b832712094d.png",
      alt: "Logo Olympique de Marseille"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Blog Football
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'univers fascinant des logos de football, leurs histoires et leurs évolutions à travers nos articles détaillés.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 mb-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-300 group-hover:border-white/40">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  width={96}
                  height={96}
                  priority={index === 0}
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Triangle className="w-6 h-6 text-white/80 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
