
import React from 'react';
import { CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

interface CarouselNavigationProps {
  images: any[];
  activeIndex: number;
  api: CarouselApi | undefined;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  images,
  activeIndex,
  api
}) => {
  return (
    <>
      {/* Navigation dots - Plus visibles */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        {images.map((_, index) => (
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
    </>
  );
};
