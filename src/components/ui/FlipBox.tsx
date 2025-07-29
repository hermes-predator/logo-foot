import React, { useState } from 'react';
import { RotateCcw, Info, Eye, MousePointer } from 'lucide-react';

interface FlipBoxProps {
  frontTitle: string;
  frontDescription: string;
  backTitle: string;
  backContent: string;
  className?: string;
}

const FlipBox = ({ frontTitle, frontDescription, backTitle, backContent, className = '' }: FlipBoxProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`relative w-full h-auto perspective-1000 ${className}`}>
      <div 
        className={`relative w-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Face avant */}
        <div className={`w-full backface-hidden ${isFlipped ? 'hidden' : 'block'}`}>
          <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm min-h-[280px] flex flex-col">
            {/* Badge dans la flip box */}
            <div className="absolute top-2 right-2">
              <div className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs px-3 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-sm">
                <Eye className="w-3.5 h-3.5 opacity-70" />
                <span className="font-medium">Survolez les dossiers</span>
                <MousePointer className="w-3.5 h-3.5" />
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 pr-16">{frontTitle}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">{frontDescription}</p>
            
            <button
              onClick={() => setIsFlipped(true)}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors mt-auto"
            >
              <Info className="w-4 h-4" />
              En savoir plus
            </button>
          </div>
        </div>

        {/* Face arrière */}
        <div className={`w-full backface-hidden ${isFlipped ? 'block' : 'hidden'}`}>
          <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm min-h-[280px] flex flex-col">
            {/* Badge dans la flip box */}
            <div className="absolute top-2 right-2">
              <div className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs px-3 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-sm">
                <Eye className="w-3.5 h-3.5 opacity-70" />
                <span className="font-medium">Survolez les dossiers</span>
                <MousePointer className="w-3.5 h-3.5" />
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 pr-16">{frontTitle}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">{frontDescription}</p>
            
            <button
              onClick={() => setIsFlipped(false)}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors mt-auto"
            >
              <RotateCcw className="w-4 h-4" />
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;