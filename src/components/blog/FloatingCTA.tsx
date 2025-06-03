
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const isMobile = useIsMobile();
  const isVerySmallScreen = typeof window !== 'undefined' && window.innerWidth < 360;
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 640;
  
  // Détection du scroll pour savoir si on est en bas de la page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Considérer qu'on est "en bas" quand il reste moins de 200px à scroller
      const isNearBottom = scrollTop + windowHeight >= docHeight - 200;
      setIsAtBottom(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Vérifier immédiatement au cas où la page est déjà en bas
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show banner with delay only when at bottom
  useEffect(() => {
    if (isAtBottom && !dismissed) {
      const showBannerTimer = setTimeout(() => {
        setVisible(true);
      }, 500); // Délai réduit car on est déjà en bas
      
      return () => clearTimeout(showBannerTimer);
    } else {
      setVisible(false);
    }
  }, [isAtBottom, dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
  };

  if (!visible || dismissed || !isAtBottom) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-700 ease-out will-change-transform will-change-opacity"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        animation: visible ? 'slideInUp 0.7s ease-out forwards' : 'none',
      }}
    >
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 py-2 md:py-4 px-2 md:px-6 border-t-2 border-white/20 relative">
        <div className="container mx-auto relative">
          {/* Mobile layout - stacked vertically (with extra compact version for very small screens) */}
          {isMobile ? (
            <div className="relative px-2">              
              <div className="flex items-center mb-2">
                <span className={`inline-block bg-white/30 p-1.5 rounded-full mr-2 relative overflow-hidden ${isVerySmallScreen ? 'hidden' : ''}`}>
                  <Download 
                    className="h-4 w-4 text-white animate-bounce" 
                    style={{ 
                      animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate',
                      filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))'
                    }} 
                  />
                  <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium flex flex-col">
                    <span className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 truncate ${isVerySmallScreen ? 'text-sm' : 'text-base'}`}>⦗FRONT-CLOUD⦘~ Football.zip</span>
                    {!isVerySmallScreen && (
                      <span className="text-blue-100/90 font-light text-sm italic truncate leading-relaxed">
                        <u className="font-medium">8 600+ logos de foot</u>
                      </span>
                    )}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center w-full">
                <Button 
                  asChild
                  variant="secondary" 
                  className="w-full py-1 text-xs group relative overflow-hidden bg-white hover:bg-gray-100"
                  size="sm"
                >
                  <Link to="/" className="flex items-center justify-center gap-1.5">
                    <span className="font-medium relative z-10 text-blue-600">
                      En savoir plus
                    </span>
                    <ArrowRight className="h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1 relative z-10 text-blue-600" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent animate-shine" style={{ animationDuration: '2.5s' }}></span>
                  </Link>
                </Button>
                
                {/* Close button for mobile - now next to the "En savoir plus" button */}
                <button 
                  onClick={handleDismiss}
                  className="ml-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                  aria-label="Fermer"
                >
                  <X className="h-3 w-3 text-white" />
                </button>
              </div>
            </div>
          ) : isSmallScreen ? (
            // Small screen layout - more compact but still side by side
            <div className="flex items-center justify-between px-3 gap-3">
              <div className="flex items-center flex-1 min-w-0">
                <span className="inline-block bg-white/30 p-1.5 rounded-full mr-2 relative overflow-hidden">
                  <Download 
                    className="h-4 w-4 text-white animate-bounce" 
                    style={{ animation: 'bounce 1.2s ease infinite' }} 
                  />
                </span>
                <div className="truncate">
                  <p className="text-white font-medium text-base truncate">⦗FRONT-CLOUD⦘~ Football.zip</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Button 
                  asChild
                  variant="secondary" 
                  className="py-1 text-xs group relative overflow-hidden bg-white hover:bg-gray-100 whitespace-nowrap"
                  size="sm"
                >
                  <Link to="/" className="flex items-center gap-1.5">
                    <span className="font-medium relative z-10 text-blue-600">
                      En savoir plus
                    </span>
                    <ArrowRight className="h-3 w-3 relative z-10 text-blue-600" />
                  </Link>
                </Button>
                
                {/* Close button for small screens - right next to the button */}
                <button 
                  onClick={handleDismiss}
                  className="ml-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                  aria-label="Fermer"
                >
                  <X className="h-3 w-3 text-white" />
                </button>
              </div>
            </div>
          ) : (
            // Desktop layout - side by side with more details
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="group flex items-center">
                  <span className="inline-block bg-white/30 p-2.5 rounded-full mr-3 group-hover:bg-white/40 transition-colors relative overflow-hidden">
                    <Download 
                      className="h-5 w-5 lg:h-6 lg:w-6 text-white animate-bounce" 
                      style={{ 
                        animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate',
                        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))'
                      }} 
                    />
                    <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
                  </span>
                  <div className="relative">
                    <p className="text-white font-medium flex flex-col">
                      <span className="text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">⦗FRONT-CLOUD⦘~ Football.zip</span>
                      <span className="text-sm md:text-base text-blue-100/90 font-light italic leading-relaxed">
                        Un fichier ZIP contenant <u className="font-medium">+ de 8 600 logos de foot</u> organisés par pays
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
              
              <div className="flex items-center">
                <Button 
                  asChild
                  variant="secondary" 
                  className="px-4 md:px-5 py-2 text-sm md:text-base group relative overflow-hidden bg-white hover:bg-gray-100"
                  size="lg"
                >
                  <Link to="/" className="flex items-center gap-2">
                    <span className="font-medium relative z-10 text-blue-600">
                      En savoir plus
                    </span>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transform transition-transform duration-300 group-hover:translate-x-1 relative z-10 text-blue-600" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent animate-shine" style={{ animationDuration: '2.5s' }}></span>
                  </Link>
                </Button>
                
                {/* Close button for desktop - right next to the button */}
                <button 
                  onClick={handleDismiss}
                  className="ml-3 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                  aria-label="Fermer"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
