
import React from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Tag, ArrowRight } from 'lucide-react';
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
      
      <div className="mt-4 flex justify-center">
        <Button 
          asChild 
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <Link to="/" className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-white group-hover:animate-pulse" />
            <span>Accédez à tous les logos</span>
            <ArrowRight className="h-4 w-4 text-white ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogImage;
