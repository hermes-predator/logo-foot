
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
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-3 bg-gray-800/50 backdrop-blur-sm w-full border border-gray-700/50 rounded-t-none rounded-b-sm">
      {/* Logo Judge.me en haut */}
      <div className="flex items-center justify-center mb-1">
        <img 
          src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
          alt="Judge.me" 
          className="h-6 w-auto opacity-80 brightness-105" 
          loading="lazy"
        />
      </div>
      
      {/* Étoiles centrées */}
      <div className="flex items-center justify-center">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      </div>
      
      {/* Note et téléchargements sur la même ligne */}
      <div className="flex items-center justify-center gap-3 text-xs">
        <span className="text-gray-200 font-bold bg-teal-500/20 px-2 py-1 rounded">4.9/5</span>
        <div className="text-gray-300 font-medium">
          {downloadCount.toLocaleString('fr-FR')} téléchargements
        </div>
      </div>
    </div>
  );
};

export default JudgeMeBadge;
