
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const JudgeMeBadge = () => {
  const [downloadCount, setDownloadCount] = useState(25287);
  
  // Effet pour augmenter progressivement le nombre de téléchargements
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prevCount => prevCount + 1);
    }, 3 * 60 * 1000); // Augmente toutes les 3 minutes
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4 px-4 py-3 bg-gray-800/50 backdrop-blur-sm w-full border border-gray-700/50 rounded-t-none rounded-b-sm">
      {/* Logo Judge.me légèrement à droite */}
      <div className="flex items-center justify-center ml-2">
        <img 
          src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
          alt="Judge.me" 
          className="h-8 w-auto opacity-80 brightness-105" 
          loading="lazy"
        />
      </div>
      
      {/* Informations à droite sur deux lignes */}
      <div className="flex flex-col gap-1 flex-1">
        {/* Première ligne : Étoiles + Note */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
          <span className="text-gray-200 font-bold bg-teal-500/20 px-2 py-1 rounded text-xs">4.9/5</span>
        </div>
        
        {/* Deuxième ligne : Nombre de téléchargements */}
        <div className="flex items-center justify-center">
          <div className="text-gray-300 font-medium text-xs">
            {downloadCount.toLocaleString('fr-FR')} téléchargements
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgeMeBadge;
