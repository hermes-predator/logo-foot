
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFloatingCTA } from '@/hooks/useFloatingCTA';
import FloatingCTAContent from './FloatingCTAContent';

const FloatingCTAContainer = () => {
  const navigate = useNavigate();
  const { visible, dismissed, isAtBottom, scrollProgress, handleDismiss } = useFloatingCTA();

  const handleNavigateToHome = () => {
    navigate('/');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  if (dismissed) return null;

  // Calcul du glissement progressif - plus on scroll vers le bas, plus la bannière monte
  // scrollProgress va de 0 à 1 quand on approche du bas
  // translateY va de 100% (complètement caché) à 0% (complètement visible)
  const translateY = isAtBottom ? (1 - scrollProgress) * 100 : 100;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        transform: `translateY(${translateY}%)`,
        // Transition CSS à 2,2 secondes pour un glissement très fluide
        transition: 'transform 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Background uni sans gradient */}
      <div className="relative overflow-hidden" style={{ backgroundColor: 'rgb(30, 29, 28)' }}>
        <div className="relative z-10 py-2 md:py-4 px-2 md:px-6 border-t-2 border-white/20">
          <div className="container mx-auto relative">
            <FloatingCTAContent 
              onNavigateToHome={handleNavigateToHome}
              onDismiss={handleDismiss}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTAContainer;
