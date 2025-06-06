
import React from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';

export interface BlogHeaderProps {
  images?: string[];
  title?: string;
  description?: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ 
  images = [], 
  title = "Blog - Logo Foot", 
  description = "Découvrez les logos des clubs de football du monde entier" 
}) => {
  const { isInView, imgRef } = useLazyLoading();

  return (
    <div className="bg-yellow-400 p-8 mb-4 shadow-sm overflow-visible rounded-tl-2xl rounded-tr-none">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
