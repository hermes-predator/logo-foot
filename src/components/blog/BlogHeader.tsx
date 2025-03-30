
import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className="max-w-4xl mb-8 pl-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-black font-medium mb-4">
        <span>Le Blog des Logos de Football</span>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4 whitespace-nowrap">
        Articles sur le logo de foot
      </h1>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 via-white to-gray-100/50 rounded-2xl blur-lg"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-100 p-2.5 rounded-xl">
              <BookOpen className="w-5 h-5 text-gray-500" />
            </div>
            <h2 className="font-semibold text-black">
              Le Blog Logo-Foot
            </h2>
          </div>
          
          <div>
            <p className="text-base text-gray-600 leading-relaxed">
              Bienvenue sur le blog Logo-Foot, votre source d'expertise sur les logos et emblèmes du football. Chaque article est le fruit d'une recherche approfondie pour vous faire découvrir l'histoire fascinante et l'évolution des identités visuelles qui font la richesse du football mondial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
