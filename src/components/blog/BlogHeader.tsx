
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-300/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-300/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Blog <span className="text-yellow-300">Logo Foot</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Découvrez l'univers fascinant des logos de football : analyses, histoires et décryptages des emblèmes qui font vibrer les stades du monde entier.
          </p>
          
          {/* Avertissement sur les droits d'auteur */}
          <div className="bg-amber-50/90 border border-amber-200 rounded-lg p-4 mb-8 text-gray-800 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-7 w-7 text-amber-600 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-amber-800 mb-2">Droits d'auteur et propriété intellectuelle</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Tous les logos présentés sur ce site sont la propriété exclusive de leurs détenteurs respectifs. 
                  Nous les utilisons uniquement à des fins éducatives et d'information dans le cadre de nos analyses. 
                  Aucune reproduction commerciale n'est autorisée sans l'accord préalable des ayants droit.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <span className="bg-white/10 px-4 py-2 rounded-full">🏆 Analyses détaillées</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">📊 Évolutions historiques</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">🎨 Design et symbolisme</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">⚽ Clubs du monde entier</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
