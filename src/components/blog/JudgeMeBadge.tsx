
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
    <div className="flex flex-col items-center justify-center gap-3 px-4 py-3 bg-gray-800/50 backdrop-blur-sm w-full border border-gray-700/50 rounded-t-none rounded-b-sm">
      {/* Logo Judge.me - plus bas */}
      <div className="flex items-center justify-center">
        <img 
          src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
          alt="Judge.me" 
          className="h-7 w-auto opacity-80 brightness-105" 
          loading="lazy"
        />
      </div>
      
      {/* Étoiles, téléchargements et note sur la même ligne */}
      <div className="flex items-center justify-center gap-3">
        <div className="flex">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>
        
        {/* Nombre de téléchargements au milieu */}
        <div className="text-xs text-gray-300 font-medium">
          {downloadCount.toLocaleString('fr-FR')} téléchargements
        </div>
        
        <span className="text-sm text-gray-200 font-bold bg-teal-500/20 px-2 py-1 rounded">4.9/5</span>
      </div>
    </div>
  );
};

export default JudgeMeBadge;
