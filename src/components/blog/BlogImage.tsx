
import React from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  isDefault?: boolean;
}

const BlogImage = ({ src, alt, className = "", isDefault = false }: BlogImageProps) => {
  const { isInView, imgRef } = useLazyLoading();

  return (
    <div className="my-8">
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg shadow-md">
        <img
          ref={imgRef}
          src={isInView ? src : '/placeholder.svg'}
          alt={alt}
          className={`w-full h-full object-cover ${isDefault ? 'opacity-90' : ''} ${className}`}
          loading="lazy"
        />
      </AspectRatio>
      <p className="mt-2 text-sm text-gray-500 text-center italic">{alt}</p>
      
      <div className="mt-5 flex justify-center">
        <Button 
          asChild 
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 
                     py-6 px-6 text-lg font-semibold shadow-lg hover:shadow-xl 
                     transform hover:scale-105 transition-all duration-300 group rounded-xl"
        >
          <Link to="/" className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-white animate-pulse" />
            <span className="text-white">Télécharger + 8 600 logos de foot</span>
            <Download className="h-5 w-5 text-white group-hover:animate-bounce transition-all" />
            <ArrowRight className="h-5 w-5 text-white ml-1 group-hover:translate-x-2 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogImage;
