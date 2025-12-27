import React, { useState, useEffect } from 'react';

const LiveDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
  </span>
);

const messages = [
  "Ajoutez le meilleur fichier sur le thème du FOOTBALL à votre actif",
  "Vous n'aurez plus jamais besoin de chercher les logos de football pour vos projets"
];

const TopBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-white/85 via-gray-50/40 to-white/70 text-gray-800 py-1 overflow-hidden z-40 border-b border-gray-200/50">
      <div className="flex justify-center items-center gap-2 whitespace-nowrap">
        <span className="text-[9px] md:text-[10px] font-bold flex items-center gap-2">
          ⟨ <LiveDot /> 
          <span 
            className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 -translate-x-4 scale-95' : 'opacity-100 translate-x-0 scale-100'}`}
          >
            {messages[currentIndex]}
          </span>
          <LiveDot /> ⟩
        </span>
      </div>
    </div>
  );
};

export default TopBar;