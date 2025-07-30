import React, { useState } from 'react';
import { Info, Eye, MousePointer } from 'lucide-react';

interface FlipBoxProps {
  frontTitle: string;
  frontDescription: string;
  backTitle: string;
  backContent: string;
  className?: string;
}

const FlipBox = ({ frontTitle, frontDescription, backTitle, backContent, className = '' }: FlipBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative w-full h-auto ${className}`}>
      <div className="relative w-full">
        {/* Face avant */}
        <div className={`w-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative pr-2 pt-2 pb-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm min-h-[75px] flex flex-col">
            {/* Badge dans la flip box */}
            <div className="absolute top-2 right-2 z-10">
              <div className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs px-3 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-sm">
                <Eye className="w-3.5 h-3.5 opacity-70" />
                <span className="font-medium">Survolez les dossiers</span>
                <MousePointer className="w-3.5 h-3.5" />
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2 relative z-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left">{frontTitle}</h2>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0"
              >
                <Info className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3 flex-grow text-left">{frontDescription}</p>
          </div>
        </div>

        {/* Face arrière */}
        <div className={`w-full absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm min-h-[75px] flex flex-col">
            {/* Badge dans la flip box */}
            <div className="absolute top-2 right-2 z-10">
              <div className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs px-3 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-sm">
                <Eye className="w-3.5 h-3.5 opacity-70" />
                <span className="font-medium">Survolez les dossiers</span>
                <MousePointer className="w-3.5 h-3.5" />
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2 relative z-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{backTitle}</h2>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0"
              >
                <Info className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3 flex-grow">{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;