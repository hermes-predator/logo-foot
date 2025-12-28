import React, { useState, useEffect } from 'react';

const LiveDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
  </span>
);

const messages = [
  "OFFRE EN COURS : -95% sur notre fichier spécialisé sur le FOOTBALL",
  "LIVRAISON DIRECTE : Téléchargez notre fichier en page d'après-paiement"
];

const TopBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentMessage = messages[currentIndex];
    
    if (isTyping) {
      if (displayedText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        // Message complete, wait then start erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 15);
        return () => clearTimeout(timeout);
      } else {
        // Text erased, switch to next message
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentIndex]);

  return (
    <div className="relative bg-gradient-to-br from-white/85 via-gray-50/40 to-white/70 text-gray-800 py-1 overflow-hidden z-40 border-b border-gray-200/50">
      <div className="flex justify-center items-center gap-2 whitespace-nowrap">
        <span className="text-[9px] md:text-[10px] font-bold flex items-center gap-2">
          ⟨ <LiveDot /> 
          <span className="inline-block">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
          <LiveDot /> ⟩
        </span>
      </div>
    </div>
  );
};

export default TopBar;