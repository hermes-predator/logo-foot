import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DownloadCountContextType {
  downloadCount: number;
}

const DownloadCountContext = createContext<DownloadCountContextType | undefined>(undefined);

interface DownloadCountProviderProps {
  children: ReactNode;
}

export const DownloadCountProvider: React.FC<DownloadCountProviderProps> = ({ children }) => {
  const [downloadCount, setDownloadCount] = useState(25287);

  useEffect(() => {
    // Intervalle pour augmenter progressivement le nombre
    const interval = setInterval(() => {
      setDownloadCount(prevCount => prevCount + 1);
    }, 3 * 60 * 1000); // Augmente toutes les 3 minutes
    
    return () => clearInterval(interval);
  }, []);

  return (
    <DownloadCountContext.Provider value={{ downloadCount }}>
      {children}
    </DownloadCountContext.Provider>
  );
};

export const useDownloadCount = (): number => {
  const context = useContext(DownloadCountContext);
  if (context === undefined) {
    throw new Error('useDownloadCount must be used within a DownloadCountProvider');
  }
  return context.downloadCount;
};
