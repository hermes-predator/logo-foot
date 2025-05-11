
import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Vérifier si nous avons déjà un temps enregistré
    const savedEndTime = localStorage.getItem('promo_end_time');
    let endTime: number;
    
    if (savedEndTime) {
      endTime = parseInt(savedEndTime, 10);
    } else {
      // Créer un nouveau temps de fin (2 heures à partir de maintenant)
      endTime = Date.now() + (2 * 60 * 60 * 1000); 
      localStorage.setItem('promo_end_time', endTime.toString());
    }

    const intervalId = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;
      
      if (difference <= 0) {
        // Réinitialiser le minuteur si le temps est écoulé
        const newEndTime = Date.now() + (2 * 60 * 60 * 1000);
        localStorage.setItem('promo_end_time', newEndTime.toString());
        setTimeLeft({
          hours: 2,
          minutes: 0,
          seconds: 0
        });
      } else {
        // Calculer les heures, minutes et secondes restantes
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`flex items-center gap-1 ${className || ''}`}>
      <Timer className="h-3.5 w-3.5 text-gray-700" />
      <div className="text-xs font-medium text-gray-800">
        {timeLeft.hours.toString().padStart(2, '0')}:
        {timeLeft.minutes.toString().padStart(2, '0')}:
        {timeLeft.seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
};

export default CountdownTimer;
