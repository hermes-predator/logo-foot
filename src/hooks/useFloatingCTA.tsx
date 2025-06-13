
import { useState, useEffect } from 'react';

export const useFloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Detect scroll to know if we're at the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress for the last 400px with slower progression
      const bottomThreshold = 400;
      const distanceFromBottom = docHeight - (scrollTop + windowHeight);
      const progress = Math.max(0, Math.min(1, (bottomThreshold - distanceFromBottom) / bottomThreshold));
      
      setScrollProgress(progress);
      
      // Consider we're "at bottom" when there's less than 300px left to scroll
      const isNearBottom = scrollTop + windowHeight >= docHeight - 300;
      setIsAtBottom(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Check immediately in case the page is already at bottom
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show banner progressively based on scroll progress
  useEffect(() => {
    if (isAtBottom && !dismissed && scrollProgress > 0.1) {
      // Add a longer delay for very slow appearance
      const showBannerTimer = setTimeout(() => {
        setVisible(true);
      }, 400);
      
      return () => clearTimeout(showBannerTimer);
    } else if (!isAtBottom || scrollProgress < 0.05) {
      // Hide with a delay to avoid flickering
      const hideBannerTimer = setTimeout(() => {
        setVisible(false);
      }, 200);
      
      return () => clearTimeout(hideBannerTimer);
    }
  }, [isAtBottom, dismissed, scrollProgress]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
  };

  return {
    visible,
    dismissed,
    isAtBottom,
    scrollProgress,
    handleDismiss
  };
};
