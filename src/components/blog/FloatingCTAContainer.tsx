
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

  if (!visible || dismissed || !isAtBottom) return null;

  // Calculate transform with extremely slow sliding effect - ultra gradual curve
  const translateY = Math.max(0, (1 - Math.pow(scrollProgress, 0.15)) * 100);
  // Very slow opacity fade-in that starts much earlier
  const opacity = Math.min(1, Math.pow(scrollProgress, 0.3) * 1.8);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 will-change-transform will-change-opacity"
      style={{
        transform: `translateY(${translateY}%)`,
        opacity: opacity,
        transition: 'transform 3s cubic-bezier(0.1, 0.7, 0.1, 1), opacity 4s ease-out',
      }}
    >
      {/* Similar gradient to BlogHeader */}
      <div className="relative overflow-hidden">
        {/* Animated gradient background - similar to BlogHeader */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-gray-900/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-gray-800/50 via-transparent to-gray-900/40" 
               style={{
                 background: 'linear-gradient(45deg, rgba(17,24,39,0.8) 0%, rgba(55,65,81,0.3) 25%, rgba(17,24,39,0.9) 50%, rgba(31,41,55,0.4) 75%, rgba(17,24,39,0.8) 100%)',
                 backgroundSize: '400% 400%',
                 animation: 'gradientShift 8s ease-in-out infinite'
               }}></div>
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
