
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const isMobile = useIsMobile();
  const isVerySmallScreen = typeof window !== 'undefined' && window.innerWidth < 360;
  
  // Add a smooth entrance animation and delay the appearance
  useEffect(() => {
    // Initial delay before showing the banner
    const showBannerTimer = setTimeout(() => {
      setVisible(true);
    }, 1500);
    
    return () => {
      clearTimeout(showBannerTimer);
    };
  }, []);

  // Check if user has previously dismissed the banner in this session
  useEffect(() => {
    const sessionDismissed = sessionStorage.getItem('floatingCTADismissed');
    if (sessionDismissed === 'true') {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    sessionStorage.setItem('floatingCTADismissed', 'true');
  };

  if (!visible || dismissed) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-700 ease-out will-change-transform will-change-opacity"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        animation: visible ? 'slideInUp 0.7s ease-out forwards' : 'none',
      }}
    >
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 py-2 md:py-4 px-2 md:px-6 border-t-2 border-white/20">
        <div className="container mx-auto relative">
          {/* Close button */}
          <button 
            onClick={handleDismiss}
            className="absolute right-1 top-1 md:right-2 md:top-2 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
            aria-label="Fermer"
          >
            <X className="h-3 w-3 md:h-4 md:w-4" />
          </button>
          
          {/* Mobile layout - stacked vertically (with extra compact version for very small screens) */}
          {isMobile ? (
            <div className="relative pr-6">              
              <div className="flex items-center mb-2">
                <span className={`inline-block bg-white/30 p-1.5 md:p-2 rounded-full mr-2 md:mr-3 group-hover:bg-white/40 transition-colors relative overflow-hidden ${isVerySmallScreen ? 'hidden' : ''}`}>
                  <Download 
                    className="h-4 w-4 md:h-5 md:w-5 text-white animate-bounce" 
                    style={{ 
                      animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate',
                      filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))'
                    }} 
                  />
                  <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
                </span>
                <div>
                  <p className="text-white font-medium flex flex-col">
                    <span className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 ${isVerySmallScreen ? 'text-sm' : 'text-base md:text-lg'}`}>⦗FRONT-CLOUD⦘~ Football.zip</span>
                    {!isVerySmallScreen && (
                      <span className="text-blue-100/90 font-light text-xs italic">
                        8 600+ logos de foot
                      </span>
                    )}
                  </p>
                </div>
              </div>
              
              <Button 
                asChild
                variant="secondary" 
                className="w-full py-1.5 text-xs group relative overflow-hidden bg-white hover:bg-gray-100"
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
            </div>
          ) : (
            // Desktop layout - side by side
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="group flex items-center">
                  <span className="inline-block bg-white/30 p-2.5 rounded-full mr-3 group-hover:bg-white/40 transition-colors relative overflow-hidden">
                    <Download 
                      className="h-6 w-6 md:h-7 md:w-7 text-white animate-bounce" 
                      style={{ 
                        animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate',
                        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))'
                      }} 
                    />
                    <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
                  </span>
                  <div className="relative">
                    <p className="text-white font-medium text-sm md:text-lg hover:text-white/90 transition-colors flex flex-col">
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 text-base md:text-2xl">⦗FRONT-CLOUD⦘~ Football.zip</span>
                      <span className="text-blue-100/90 font-light text-sm md:text-base italic">
                        Un fichier ZIP arborescent contenant + de 8 600 logos de foot
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
              
              <div className="flex items-center">
                <Button 
                  asChild
                  variant="secondary" 
                  className="px-5 py-2.5 text-sm md:text-base group relative overflow-hidden bg-white hover:bg-gray-100"
                  size="lg"
                >
                  <Link to="/" className="flex items-center gap-2">
                    <span className="font-medium relative z-10 text-blue-600">
                      En savoir plus
                    </span>
                    <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1 relative z-10 text-blue-600" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent animate-shine" style={{ animationDuration: '2.5s' }}></span>
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
