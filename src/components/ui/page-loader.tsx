
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
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
        <p className="text-gray-700 font-medium text-lg">{message}</p>
      </div>
    </div>
  );
};

export default PageLoader;
