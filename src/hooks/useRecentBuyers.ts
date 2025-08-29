import { useState, useEffect } from 'react';

export const useRecentBuyers = () => {
  const [recentBuyers, setRecentBuyers] = useState(0);

  useEffect(() => {
    // Base plus élevée pour le nombre de départ (même logique que PaymentSection)
    const minBuyers = 75;
    const maxBuyers = 90;
    const randomBuyers = Math.floor(Math.random() * (maxBuyers - minBuyers + 1)) + minBuyers;
    setRecentBuyers(randomBuyers);
    
    // Mettre à jour le nombre toutes les 20 minutes pour simuler de nouveaux acheteurs
    const interval = setInterval(() => {
      // Ajouter 1-3 nouveaux acheteurs périodiquement
      setRecentBuyers(prevCount => {
        const increment = Math.floor(Math.random() * 3) + 1;
        return prevCount + increment;
      });
    }, 20 * 60 * 1000); // 20 minutes
    
    return () => clearInterval(interval);
  }, []);

  return recentBuyers;
};