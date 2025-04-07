
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingCTA = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const isMobile = useIsMobile();
  
  // Add a pulsing effect that starts a few seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in will-change-transform will-change-opacity">
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 shadow-lg py-3 md:py-4 px-3 md:px-6 border-t-2 border-white/20">
        <div className="container mx-auto">
          {/* Mobile layout - stacked vertically */}
          {isMobile ? (
            <div className="relative">              
              <div className="flex items-center mb-3">
                <span className="inline-block bg-white/30 p-2 rounded-full mr-3 group-hover:bg-white/40 transition-colors relative overflow-hidden">
                  <Download 
                    className="h-5 w-5 text-white animate-bounce" 
                    style={{ 
                      animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate',
                      filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))'
                    }} 
                  />
                  <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
                </span>
                <div>
                  <p className="text-white font-medium flex flex-col">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 text-lg">⦗FRONT-CLOUD⦘~ Football.zip</span>
                    <span className="text-blue-100/90 font-light text-xs italic">
                      8 600+ logos de foot en un fichier
                    </span>
                  </p>
                </div>
              </div>
              
              <Button 
                asChild
                variant="secondary" 
                className="bg-orange-500 hover:bg-orange-400 w-full py-3 text-base group relative overflow-hidden border-2 border-white/30 shadow-lg shadow-orange-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                size="lg"
              >
                <Link to="/" className="flex items-center justify-center gap-2">
                  <span className="text-white font-bold relative z-10">Télécharger maintenant</span>
                  <ArrowRight className="h-5 w-5 text-white transform transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" style={{ animationDuration: '1.8s' }}></span>
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
                  className="bg-orange-500 hover:bg-orange-400 px-6 py-3 text-base md:text-lg group relative overflow-hidden border-2 border-white/30 shadow-lg shadow-orange-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  size="lg"
                >
                  <Link to="/" className="flex items-center gap-3">
                    <span className="text-white font-bold relative z-10">Télécharger maintenant</span>
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white transform transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" style={{ animationDuration: '1.8s' }}></span>
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
