
import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

interface RecentBuyersBadgeProps {
  count: number;
}

const RecentBuyersBadge = ({ count }: RecentBuyersBadgeProps) => {
  const [currentCount, setCurrentCount] = useState(count - 10);
  
  // Effet pour augmenter progressivement le nombre
  useEffect(() => {
    // Définir le compteur initial légèrement en dessous du compte final
    setCurrentCount(Math.max(count - 10, 60));
    
    // Intervalle pour augmenter progressivement le nombre
    const interval = setInterval(() => {
      setCurrentCount(prevCount => {
        // Si on a atteint le compte cible, arrêter l'incrémentation
        if (prevCount >= count) {
          clearInterval(interval);
          return count;
        }
        
        // Augmenter de 1 toutes les quelques secondes
        return prevCount + 1;
      });
    }, 45000); // Augmente toutes les 45 secondes
    
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="inline-flex bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-md items-center gap-1.5 animate-[fastBlink_1s_ease-in-out_infinite]">
      <Users className="h-3.5 w-3.5" />
      <span>{currentCount} personnes ont acheté récemment</span>
    </div>
  );
};

export default RecentBuyersBadge;
