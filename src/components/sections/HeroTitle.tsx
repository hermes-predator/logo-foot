
import React from 'react';

const HeroTitle = () => {
  return (
    <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          8600+ Logos
        </span>
        <br />
        de Football
      </h1>
      
      <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
        Recevez{" "}
        <span className="font-semibold text-blue-600">
          +8600 logo club de foot
        </span>{" "}
        en un fichier parfaitement organisé par pays.
      </p>
    </div>
  );
};

export default HeroTitle;
