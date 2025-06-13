
import { useState, useEffect } from 'react';

export const useFloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  
  // Detect scroll to know if we're at the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Consider we're "at bottom" when there's less than 200px left to scroll
      const isNearBottom = scrollTop + windowHeight >= docHeight - 200;
      setIsAtBottom(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Check immediately in case the page is already at bottom
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show banner with smoother delay when at bottom
  useEffect(() => {
    if (isAtBottom && !dismissed) {
      const showBannerTimer = setTimeout(() => {
        setVisible(true);
      }, 300); // Reduced delay for smoother experience
      
      return () => clearTimeout(showBannerTimer);
    } else {
      // Add a small delay before hiding to avoid flickering
      const hideBannerTimer = setTimeout(() => {
        setVisible(false);
      }, 100);
      
      return () => clearTimeout(hideBannerTimer);
    }
  }, [isAtBottom, dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
  };

  return {
    visible,
    dismissed,
    isAtBottom,
    handleDismiss
  };
};
