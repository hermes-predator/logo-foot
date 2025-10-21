import React, { useState, useEffect } from 'react';
import { X, Trophy, Star, Zap, Download, Users } from 'lucide-react';

const TopBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const messages = [
    {
      icon: Users,
      text: "Déjà +20 000 clients satisfaits",
      highlight: true
    },
    {
      icon: Star,
      text: "Note 4.9/5",
      stars: true
    },
    {
      icon: Zap,
      text: "Téléchargement instantané",
      highlight: false
    },
    {
      icon: Download,
      text: "Accès illimité à vie",
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
              <Icon className="w-4 h-4 text-yellow-300" />
              
              {message.stars ? (
                <div className="flex items-center gap-2">
                  <span>Note</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                    ))}
                  </div>
                  <span className="font-bold">4.9/5</span>
                </div>
              ) : (
                <span className={message.highlight ? "font-bold" : ""}>
                  {message.text}
                </span>
              )}
              
              {message.text.includes("instantané") && <span>⚡️</span>}
            </div>
          );
        })}
      </div>

      {/* Croix décorative (sans interaction) */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 opacity-70">
        <X className="w-4 h-4" />
      </div>
    </div>
  );
};

export default TopBar;