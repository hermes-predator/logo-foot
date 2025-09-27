import React, { useState } from 'react';
import { X, Trophy, Star, Users } from 'lucide-react';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white py-3 px-4 text-center shadow-lg z-40">
      {/* Effet de brillance animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-50"></div>
      
      <div className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
        <Trophy className="w-5 h-5 text-yellow-300 animate-bounce" />
        
        <span className="font-bold">Déjà +1000 clients satisfaits</span>
        <span>•</span>
        
        <div className="flex items-center gap-1">
          <span>Note</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-300 fill-yellow-300" />
            ))}
          </div>
          <span className="font-bold">4.9/5</span>
        </div>
        
        <span>•</span>
        <span className="hidden sm:inline">Fichier le plus complet du marché</span>
        <span className="sm:hidden">Le plus complet</span>
      </div>

      {/* Bouton de fermeture */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
        aria-label="Fermer la bannière promotionnelle"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TopBar;