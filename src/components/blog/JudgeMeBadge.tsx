
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
    <a 
      href="https://judge.me/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-4 py-2 pb-3 w-full cursor-pointer rounded-b-lg"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Logo Judge.me légèrement à droite */}
      <div className="flex items-center justify-center ml-2">
        <img 
          src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
          alt="Judge.me" 
          className="h-8 w-auto opacity-90 brightness-110 contrast-110" 
          loading="lazy"
        />
      </div>
      
      {/* Informations à droite sur deux lignes */}
      <div className="flex flex-col gap-0.5 flex-1">
        {/* Première ligne : Étoiles + Note */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500 drop-shadow-sm" />
            <Star className="w-4 h-4 text-orange-500 fill-orange-500 drop-shadow-sm" />
            <Star className="w-4 h-4 text-orange-500 fill-orange-500 drop-shadow-sm" />
            <Star className="w-4 h-4 text-orange-500 fill-orange-500 drop-shadow-sm" />
            <Star className="w-4 h-4 text-orange-500 fill-orange-500 drop-shadow-sm" />
          </div>
          <span className="text-white font-bold px-2.5 py-1 rounded text-sm shadow-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', backdropFilter: 'blur(4px)' }}>4.9/5</span>
        </div>
        
        {/* Deuxième ligne : Nombre de téléchargements */}
        <div className="flex items-center justify-center">
          <div className="text-gray-200 font-semibold text-xs drop-shadow-sm">
            {downloadCount.toLocaleString('fr-FR')} téléchargements
          </div>
        </div>
      </div>
    </a>
  );
};

export default JudgeMeBadge;
