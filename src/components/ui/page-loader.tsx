
import React from 'react';
import { Loader2 } from 'lucide-react';

interface PageLoaderProps {
  isVisible: boolean;
  message?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  isVisible, 
  message = "Chargement..." 
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
    </div>
  );
};

export default PageLoader;
