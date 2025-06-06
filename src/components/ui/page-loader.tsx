
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
    <div 
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
        <p className="text-sm text-gray-600 font-medium whitespace-nowrap">
          {message}
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
