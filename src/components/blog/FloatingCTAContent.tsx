
import React from 'react';
import { Folder, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import FloatingCTAButton from './FloatingCTAButton';

interface FloatingCTAContentProps {
  onNavigateToHome: () => void;
  onDismiss: (e: React.MouseEvent) => void;
}

const FloatingCTAContent = ({ onNavigateToHome, onDismiss }: FloatingCTAContentProps) => {
  const isMobile = useIsMobile();
  const isVerySmallScreen = typeof window !== 'undefined' && window.innerWidth < 360;
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 640;

  if (isMobile) {
    return (
      <div className="relative px-2">              
        <div className="flex items-center mb-2">
          <span className={`inline-block bg-white/30 p-1.5 rounded-full mr-2 relative overflow-hidden flex-shrink-0 ${isVerySmallScreen ? 'hidden' : ''}`}>
            <Folder 
              className="h-4 w-4 text-white animate-bounce" 
              style={{ 
                animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate',
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))'
              }} 
            />
            <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
          </span>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-white font-medium m-0 p-0 text-left">
              <span className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 block m-0 p-0 text-left ${isVerySmallScreen ? 'text-sm' : 'text-base'}`}>⦗FRONT-CLOUD⦘~ Football.zip</span>
              {!isVerySmallScreen && (
                <span className="text-blue-100/90 font-light text-sm italic leading-relaxed block m-0 p-0 text-left">
                  <u className="font-medium">8 600+ logos de foot</u>
                </span>
              )}
            </p>
          </div>
        </div>
        
        <div className="flex items-center w-full">
          <FloatingCTAButton 
            onClick={onNavigateToHome}
            className="w-full py-1 text-xs"
            size="sm"
          />
          
          <button 
            onClick={onDismiss}
            className="ml-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
            aria-label="Fermer"
          >
            <X className="h-3 w-3 text-white" />
          </button>
        </div>
      </div>
    );
  }

  if (isSmallScreen) {
    return (
      <div className="flex items-center justify-between px-3 gap-3">
        <div className="flex items-center flex-1 min-w-0">
          <span className="inline-block bg-white/30 p-1.5 rounded-full mr-3 relative overflow-hidden flex-shrink-0">
            <Folder 
              className="h-4 w-4 text-white animate-bounce" 
              style={{ animation: 'bounce 1.2s ease infinite' }} 
            />
          </span>
          <div className="truncate flex items-center text-left">
            <p className="text-white font-medium text-base truncate m-0 p-0 text-left">⦗FRONT-CLOUD⦘~ Football.zip</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <FloatingCTAButton 
            onClick={onNavigateToHome}
            className="py-1 text-xs whitespace-nowrap"
            size="sm"
          />
          
          <button 
            onClick={onDismiss}
            className="ml-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
            aria-label="Fermer"
          >
            <X className="h-3 w-3 text-white" />
          </button>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center">
        <button onClick={onNavigateToHome} className="group flex items-center">
          <span className="inline-block bg-white/30 p-2.5 rounded-full mr-3 group-hover:bg-white/40 transition-colors relative overflow-hidden flex-shrink-0">
            <Folder 
              className="h-5 w-5 lg:h-6 lg:w-6 text-white animate-bounce" 
              style={{ 
                animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate',
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))'
              }} 
            />
            <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
          </span>
          <div className="relative flex items-start flex-col text-left">
            <p className="text-white font-medium m-0 p-0 text-left">
              <span className="text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 block m-0 p-0 text-left">⦗FRONT-CLOUD⦘~ Football.zip</span>
              <span className="text-sm md:text-base text-blue-100/90 font-light italic leading-relaxed block m-0 p-0 text-left">
                Un fichier ZIP contenant <u className="font-medium">+ de 8 600 logos de foot</u> organisés par pays
              </span>
            </p>
          </div>
        </button>
      </div>
      
      <div className="flex items-center">
        <FloatingCTAButton 
          onClick={onNavigateToHome}
          className="px-4 md:px-5 py-2 text-sm md:text-base"
          size="lg"
        />
        
        <button 
          onClick={onDismiss}
          className="ml-3 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
          aria-label="Fermer"
        >
          <X className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default FloatingCTAContent;
