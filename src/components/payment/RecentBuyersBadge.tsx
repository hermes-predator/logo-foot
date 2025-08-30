
import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

interface RecentBuyersBadgeProps {
  count: number;
}

const RecentBuyersBadge = ({ count }: RecentBuyersBadgeProps) => {
  const [currentCount, setCurrentCount] = useState(count);
  
  // Effet pour synchroniser avec le count
  useEffect(() => {
    // Utiliser directement le count pour être synchronisé
    setCurrentCount(count);
    
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
    <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1.5 rounded-bl-lg rounded-tr-xl text-sm font-semibold shadow-md flex items-center gap-1.5 animate-[fastBlink_1s_ease-in-out_infinite]">
      <Users className="h-3.5 w-3.5" />
      <span>{currentCount} personnes ont acheté récemment</span>
    </div>
  );
};

export default RecentBuyersBadge;
