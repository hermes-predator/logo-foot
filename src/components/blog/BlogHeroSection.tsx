
import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogHeroSection = () => {
  return (
    <div className="relative z-10 text-center">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white rounded-full shadow-lg">
          <BookOpen className="h-12 w-12 text-blue-600" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Blog Logo Foot
      </h1>
      
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Découvrez l'univers passionnant des logos de football à travers nos analyses détaillées, 
        l'histoire des emblèmes et les tendances du design sportif.
      </p>
    </div>
  );
};

export default BlogHeroSection;
