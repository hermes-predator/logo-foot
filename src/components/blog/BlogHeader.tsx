
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 overflow-hidden rounded-bl-xl rounded-br-xl rounded-tr-xl rounded-tl-none">
      {/* Élément avec icône danger - coins carrés */}
      <div className="absolute top-4 right-4 bg-orange-50 p-2 rounded-none border border-orange-200 shadow-sm">
        <AlertTriangle className="w-5 h-5 text-orange-600" />
      </div>
      
      {/* Patterns de fond décoratifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-300 rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-purple-300 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog Logo Foot
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Découvrez l'univers passionnant des logos de football : analyses, histoires et évolutions des emblèmes des plus grands clubs du monde.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <span className="bg-white/70 px-3 py-1 rounded-full">Analyses détaillées</span>
            <span className="bg-white/70 px-3 py-1 rounded-full">Histoire des clubs</span>
            <span className="bg-white/70 px-3 py-1 rounded-full">Évolutions graphiques</span>
            <span className="bg-white/70 px-3 py-1 rounded-full">Design sportif</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
