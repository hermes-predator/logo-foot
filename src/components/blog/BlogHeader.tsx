
import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className="max-w-4xl mb-16 pl-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-black font-medium mb-6">
        <span>Le Blog des Logos de Football</span>
      </div>
      
      <h1 className="text-5xl font-bold text-gray-900 mb-6 whitespace-nowrap">
        Articles sur le logo de foot
      </h1>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 via-white to-gray-100/50 rounded-2xl blur-lg"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gray-100 p-3 rounded-xl">
              <BookOpen className="w-6 h-6 text-gray-500" />
            </div>
            <h2 className="font-semibold text-black">
              Le Blog Logo-Foot
            </h2>
          </div>
          
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bienvenue sur le blog Logo-Foot, votre source d'expertise sur les logos et emblèmes du football. Chaque article est le fruit d'une recherche approfondie pour vous faire découvrir l'histoire fascinante et l'évolution des identités visuelles qui font la richesse du football mondial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
