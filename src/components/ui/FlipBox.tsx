import React, { useState } from 'react';
import { RotateCcw, Info } from 'lucide-react';

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
    <div className={`relative w-full h-auto perspective-1000 z-20 ${className}`}>
      <div 
        className={`relative w-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Face avant */}
        <div className="absolute inset-0 w-full backface-hidden">
          <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{frontTitle}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{frontDescription}</p>
            
            <button
              onClick={() => setIsFlipped(true)}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
            >
              <Info className="w-4 h-4" />
              En savoir plus
            </button>
          </div>
        </div>

        {/* Face arrière */}
        <div className="absolute inset-0 w-full backface-hidden rotate-y-180">
          <div className="relative p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{backTitle}</h3>
            <div className="text-sm text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
              {backContent}
            </div>
            
            <button
              onClick={() => setIsFlipped(false)}
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
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