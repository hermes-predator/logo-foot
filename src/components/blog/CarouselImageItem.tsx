
import React from 'react';
import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface CarouselImageItemProps {
  image: {
    src: string;
    alt: string;
    title: string;
  };
  index: number;
  onImageLoad: (index: number) => void;
}

export const CarouselImageItem: React.FC<CarouselImageItemProps> = ({
  image,
  index,
  onImageLoad
}) => {
  return (
    <CarouselItem>
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
              onLoad={() => onImageLoad(index)}
            />
          </AspectRatio>
          <div className="bg-white p-6">
            <h3 className="font-semibold text-xl text-center">{image.title}</h3>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
