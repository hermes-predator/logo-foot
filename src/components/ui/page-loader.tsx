
import React from 'react';
import { Loader2, Circle } from 'lucide-react';

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
    <div className="fixed inset-0 bg-white/90 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 p-8 bg-white/80 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Animation principale avec cercles concentriques */}
        <div className="relative flex items-center justify-center">
          {/* Cercle extérieur qui pulse */}
          <div className="absolute w-20 h-20 border-4 border-blue-100 rounded-full animate-ping opacity-30"></div>
          
          {/* Cercle du milieu qui tourne */}
          <div className="absolute w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full animate-spin"></div>
          
          {/* Cercle intérieur */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <Loader2 className="w-6 h-6 text-white animate-spin" />
          </div>
          
          {/* Points décoratifs qui orbitent */}
          <div className="absolute w-24 h-24 animate-spin" style={{ animationDuration: '3s' }}>
            <Circle className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 text-blue-400 fill-current" />
            <Circle className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 text-blue-400 fill-current" />
            <Circle className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 text-blue-400 fill-current" />
            <Circle className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 text-blue-400 fill-current" />
          </div>
        </div>

        {/* Message avec animation de typing */}
        <div className="text-center">
          <p className="text-gray-700 font-medium text-lg tracking-wide">{message}</p>
          <div className="flex justify-center mt-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
