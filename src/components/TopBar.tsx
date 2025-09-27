import React, { useState, useEffect } from 'react';
import { X, Clock } from 'lucide-react';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 30 });

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white py-3 px-4 text-center shadow-lg z-50">
      {/* Effet de brillance animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-50"></div>
      
      <div className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
        <span className="animate-bounce">🔥</span>
        
        <span className="font-bold">OFFRE LIMITÉE :</span>
        <span>-89% sur le pack complet</span>
        
        <div className="flex items-center gap-1 mx-2 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
          <Clock className="w-4 h-4" />
          <span className="font-mono font-bold">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
        
        <span className="hidden sm:inline">restantes !</span>
        <span className="sm:hidden">!</span>
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