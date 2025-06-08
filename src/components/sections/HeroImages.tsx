
import React from 'react';

const HeroImages = () => {
  return (
    <div className="lg:w-1/2 flex justify-center lg:justify-end items-center">
      <div className="relative max-w-lg w-full">
        {/* Image principale */}
        <div className="relative">
          <img
            src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
            alt="Collection complète de logos de football"
            className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            loading="eager"
            width="500"
            height="400"
          />
          
          {/* Badge flottant */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="font-bold text-sm">8600+ Logos</span>
          </div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -top-6 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-lg opacity-20 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default HeroImages;
