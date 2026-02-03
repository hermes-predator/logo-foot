import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RecentBuyersContextType {
  recentBuyers: number;
}

const RecentBuyersContext = createContext<RecentBuyersContextType | undefined>(undefined);

interface RecentBuyersProviderProps {
  children: ReactNode;
}

export const RecentBuyersProvider: React.FC<RecentBuyersProviderProps> = ({ children }) => {
  const [recentBuyers, setRecentBuyers] = useState(0);

  useEffect(() => {
    // Base crédible pour le nombre de départ (max 99)
    const minBuyers = 45;
    const maxBuyers = 65;
    const randomBuyers = Math.floor(Math.random() * (maxBuyers - minBuyers + 1)) + minBuyers;
    setRecentBuyers(randomBuyers);
    
    // Mettre à jour le nombre toutes les 20 minutes pour simuler de nouveaux acheteurs
    const interval = setInterval(() => {
      setRecentBuyers(prevCount => {
        // Ajouter 1-2 nouveaux acheteurs, mais ne pas dépasser 99
        const increment = Math.floor(Math.random() * 2) + 1;
        return Math.min(prevCount + increment, 99);
      });
    }, 20 * 60 * 1000); // 20 minutes
    
    return () => clearInterval(interval);
  }, []);

  return (
    <RecentBuyersContext.Provider value={{ recentBuyers }}>
      {children}
    </RecentBuyersContext.Provider>
  );
};

export const useRecentBuyers = (): number => {
  const context = useContext(RecentBuyersContext);
  if (context === undefined) {
    throw new Error('useRecentBuyers must be used within a RecentBuyersProvider');
  }
  return context.recentBuyers;
};