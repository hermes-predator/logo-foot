
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg py-3 px-4 md:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <span className="hidden md:inline-block bg-white/20 p-2 rounded-full mr-3 animate-pulse">
              <Download className="h-5 w-5 text-white animate-bounce" />
            </span>
            <p className="text-white font-medium text-sm md:text-base">
              <span className="font-bold">⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎𝐔𝐃⦘~</span> 𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩 : +8 600 logos de foot à télécharger
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              asChild
              variant="secondary" 
              className="bg-white hover:bg-gray-100 px-4 py-2 text-sm md:text-base group"
              size="sm"
            >
              <Link to="/" className="flex items-center gap-2">
                <span className="text-blue-600">Télécharger maintenant</span>
                <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <button 
              onClick={handleDismiss} 
              className="text-white/80 hover:text-white rounded-full p-1.5 hover:bg-white/10 transition-colors"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
