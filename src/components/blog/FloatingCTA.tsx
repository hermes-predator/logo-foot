
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show the floating bar after scrolling down 35% of the viewport height
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.35;
      if (window.scrollY > scrollThreshold && !dismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg py-3 px-4 md:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <span className="hidden md:inline-block bg-white/20 p-2 rounded-full mr-3">
              <Download className="h-5 w-5 text-white" />
            </span>
            <p className="text-white font-medium text-sm md:text-base">
              <span className="font-bold">+8 600</span> logos de foot prêts à télécharger
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              asChild
              variant="secondary" 
              className="bg-white hover:bg-gray-100 text-purple-700 px-4 py-2 text-sm md:text-base group"
              size="sm"
            >
              <Link to="/" className="flex items-center gap-2">
                Télécharger maintenant
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
