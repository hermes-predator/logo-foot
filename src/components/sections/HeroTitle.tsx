
import React from 'react';

const HeroTitle = () => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
        Pack <span className="text-blue-600">Complet</span> de Logos de Football
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Recevez <span className="font-semibold text-gray-800">+8600 logo club de foot</span> en un fichier parfaitement organisé par pays
      </p>
    </div>
  );
};

export default HeroTitle;
