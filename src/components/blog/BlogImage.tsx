
import React from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
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
      
      <div className="mt-5 mb-2 flex justify-center">
        <Button 
          asChild 
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 
                     py-6 px-6 text-lg font-semibold shadow-lg hover:shadow-xl 
                     transform hover:scale-105 transition-all duration-300 group rounded-xl"
        >
          <Link to="/" className="flex items-center gap-3">
            <Download className="h-5 w-5 text-white group-hover:animate-bounce transition-all" />
            <span className="text-white">Télécharger + 8 600 logos de foot en un seul fichier</span>
            <ArrowRight className="h-5 w-5 text-white ml-1 group-hover:translate-x-2 transition-transform" />
          </Link>
        </Button>
      </div>
      
      <p className="mt-2 text-sm text-gray-500 text-center italic">{alt}</p>
    </div>
  );
};

export default BlogImage;
