import React, { useState, useEffect } from 'react';
import { Tag, Package, Download } from 'lucide-react';

const messages = [
  { bold: "⦗FRONT-CLOUD⦘~ Football.zip", rest: " : Un fichier complet sur le football", icon: Download },
  { bold: "OFFRE LIMITÉE", rest: " : -95% sur notre fichier spécialisé sur le FOOTBALL", icon: Tag },
  { bold: "LIVRAISON", rest: " : Obtenez notre fichier IMMÉDIATEMENT par téléchargement", icon: Package },
];

const TypewriterBadge: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentMessage = messages[currentIndex];
    const fullText = currentMessage.bold + currentMessage.rest;
    
    if (isTyping) {
      if (displayedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 7000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 15);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentIndex]);

  const currentMessage = messages[currentIndex];
  const boldLength = currentMessage.bold.length;
  const displayedBold = displayedText.slice(0, boldLength);
  const displayedRest = displayedText.slice(boldLength);
  const Icon = currentMessage.icon;

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border">
      {/* Icône du message */}
      <Icon className="w-4 h-4 text-blue-600" />
      
      {/* Message animé */}
      <p className="text-sm text-foreground font-medium">
        <span className="text-blue-600 font-bold">{displayedBold}</span>
        <span>{displayedRest}</span>
        <span className="animate-pulse text-blue-600">|</span>
      </p>
      
      {/* Live indicator */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
    </div>
  );
};

export default TypewriterBadge;
