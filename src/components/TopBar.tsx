import React, { useState, useEffect } from 'react';
import { Trophy, Star, Zap, Download } from 'lucide-react';

const TopBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const messages = [
    {
      text: "✅ +20 000 clients satisfaits provenant du monde entier",
      highlight: true
    },
    {
      text: "⭐ Noté 4.9/5 - Basé sur + de 1 000 avis vérifiés",
      highlight: true
    },
    {
      text: "⚡ Téléchargement instantané et sécurisé",
      highlight: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % messages.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white py-1.5 px-4 text-center shadow-lg z-40 overflow-hidden">
      {/* Effet de brillance animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[slide-in-right_3s_ease-in-out_infinite] opacity-50"></div>
      
      {/* Slider de messages */}
      <div className="relative z-10 h-5 flex items-center justify-center">
        {messages.map((message, index) => {
          const isActive = index === currentSlide;
          
          return (
            <div
              key={index}
              className={`absolute flex items-center justify-center gap-2 text-xs md:text-sm transition-all duration-500 ${
                isActive 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
            >
              <span className={`${message.highlight ? "font-semibold" : "font-medium"} text-center px-2`}>
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