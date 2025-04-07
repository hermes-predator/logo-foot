
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  
  // Add a pulsing effect that starts a few seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in will-change-transform will-change-opacity">
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 shadow-lg py-3 px-4 md:px-6 border-t-2 border-white/20">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <Link to="/" className="group flex items-center">
              <span className="hidden md:inline-block bg-white/20 p-2 rounded-full mr-3 group-hover:bg-white/30 transition-colors relative overflow-hidden">
                <Download 
                  className="h-5 w-5 text-white animate-pulse" 
                  style={{ 
                    animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate'
                  }} 
                />
                <span className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
              </span>
              <div className="relative">
                <p className="text-white font-medium text-sm md:text-base hover:text-white/90 transition-colors">
                  <span className="font-bold">⦗FRONT-CLOUD⦘~</span> Football.zip : +8 600 logos de foot dans un fichier ZIP arborescent
                </p>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center">
            <Button 
              asChild
              variant="secondary" 
              className="bg-white hover:bg-gray-100 px-4 py-2 text-sm md:text-base group relative overflow-hidden"
              size="sm"
            >
              <Link to="/" className="flex items-center gap-2">
                <span className="text-blue-600 font-medium relative z-10">Télécharger maintenant</span>
                <ArrowRight className="h-4 w-4 text-blue-600 transform transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent animate-shine" style={{ animationDuration: '2.5s' }}></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
