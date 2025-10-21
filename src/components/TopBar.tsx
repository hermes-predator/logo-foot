import React, { useState, useEffect } from 'react';
import { Trophy, Star, Zap, Download } from 'lucide-react';

const TopBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const messages = [
    {
      icon: Trophy,
      text: "+20 000 clients satisfaits - Collection #1 en France",
      highlight: true
    },
    {
      icon: Star,
      text: "⭐ Noté 4.9/5 - La meilleure qualité du marché",
      highlight: true
    },
    {
      icon: Zap,
      text: "⚡ Téléchargement instantané - Accès à vie garanti",
      highlight: false
    },
    {
      icon: Download,
      text: "🔥 8700+ logos HD - Mise à jour gratuite incluse",
      highlight: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % messages.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white py-2.5 px-4 text-center shadow-lg z-40 overflow-hidden">
      {/* Effet de brillance animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[slide-in-right_3s_ease-in-out_infinite] opacity-50"></div>
      
      {/* Slider de messages */}
      <div className="relative z-10 h-6 flex items-center justify-center">
        {messages.map((message, index) => {
          const Icon = message.icon;
          const isActive = index === currentSlide;
          
          return (
            <div
              key={index}
              className={`absolute flex items-center justify-center gap-2 text-sm md:text-base font-semibold transition-all duration-700 ${
                isActive 
                  ? 'opacity-100 translate-y-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-y-8' 
                    : 'opacity-0 translate-y-8'
              }`}
            >
              <Icon className="w-4 h-4 text-yellow-300 fill-yellow-300 hidden md:inline" />
              
              <span className={`${message.highlight ? "font-bold" : "font-semibold"} text-center px-2`}>
                {message.text}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default TopBar;