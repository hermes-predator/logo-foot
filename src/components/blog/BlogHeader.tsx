
import React from 'react';

const BlogHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-sm md:text-base text-gray-400 mb-2">Blog</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Vous cherchez tous les logos de foot ?
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Téléchargez + de 8 600 LOGOS de Clubs de Football organisés par pays.<br /><br />
          Obtenez toutes les ressources dans un fichier ZIP complet.
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
