
import { useState, useEffect } from 'react';

export const useFloatingCTA = () => {
  const [dismissed, setDismissed] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Detect scroll to know if we're at the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress for the last 100px only - very end of scroll
      const bottomThreshold = 100;
      const distanceFromBottom = docHeight - (scrollTop + windowHeight);
      const progress = Math.max(0, Math.min(1, (bottomThreshold - distanceFromBottom) / bottomThreshold));
      
      setScrollProgress(progress);
      
      // Consider we're "at bottom" only when there's less than 100px left to scroll
      const isNearBottom = scrollTop + windowHeight >= docHeight - 100;
      setIsAtBottom(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Check immediately in case the page is already at bottom
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
  };

  return {
    visible: isAtBottom && !dismissed, // Toujours visible si on est en bas et pas dismissed
    dismissed,
    isAtBottom,
    scrollProgress,
    handleDismiss
  };
};
