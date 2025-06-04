
import React from 'react';
import { Loader } from 'lucide-react';

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
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="relative">
          <Loader className="w-8 h-8 text-blue-500 animate-spin" />
          <div className="absolute inset-0 w-8 h-8 border-2 border-blue-200 rounded-full animate-pulse"></div>
        </div>
        <p className="text-gray-600 font-medium text-sm">{message}</p>
      </div>
    </div>
  );
};

export default PageLoader;
