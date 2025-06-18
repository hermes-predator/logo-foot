
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
      {/* Gradient optimisé pour harmoniser avec vos visuels RGB(33,33,33) vers RGB(112,112,112) */}
      <div className="relative overflow-hidden">
        {/* Animated gradient background - harmonisé avec vos logos */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/25 via-black/40 to-gray-700/25 animate-pulse"></div>
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.97) 0%, rgba(45,45,45,0.3) 25%, rgba(20,20,20,0.85) 50%, rgba(80,80,80,0.25) 75%, rgba(0,0,0,0.97) 100%)',
              backgroundSize: '400% 400%',
              animation: 'gradientShift 8s ease-in-out infinite'
            }}
          ></div>
        </div>
        
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
