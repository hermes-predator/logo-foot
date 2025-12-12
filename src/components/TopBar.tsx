import React, { useState, useEffect } from 'react';
import { Trophy, Star, Zap, Download } from 'lucide-react';

const TopBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const messages = [
    {
      text: "+20 000 clients satisfaits provenant du monde entier ✅",
      highlight: true
    },
    {
      text: "Noté 4.9/5 - Basé sur + de 1 000 avis vérifiés ⭐",
      highlight: true
    },
    {
      text: "Téléchargement instantané et sécurisé ⚡",
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
    <div className="relative bg-[#f5f1eb] text-gray-800 py-1.5 px-4 text-center z-40 overflow-hidden">
      
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