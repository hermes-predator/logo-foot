import React, { useState } from 'react';
import { RotateCcw, HelpCircle, Eye, MousePointer } from 'lucide-react';

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
    <div className={`relative w-full h-auto ${className}`}>
      {/* Face avant */}
      <div className={`w-full transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative pr-2 pt-2 pb-2 bg-white rounded-xl min-h-[75px] flex flex-col">
          {/* Badge dans la flip box */}
          <div className="absolute top-6 right-2 z-10">
            <div className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs px-3 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-sm">
              <Eye className="w-3.5 h-3.5 opacity-70" />
              <span className="font-medium">Survolez les dossiers</span>
              <MousePointer className="w-3.5 h-3.5" />
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left">{frontTitle}</h2>
            <button
              onClick={() => setIsFlipped(true)}
              className="text-black hover:text-gray-700 transition-colors flex-shrink-0"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-3 flex-grow text-left">{frontDescription}</p>
        </div>
      </div>

      {/* Face arrière */}
      <div className={`w-full absolute inset-0 transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative pr-2 pt-2 pb-2 bg-white rounded-xl min-h-[75px] flex flex-col">
          
          <div className="flex items-center justify-between mb-2 relative z-20">
            <div className="text-left flex-grow">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Besoin des logos des équipes de foot ?</h2>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-gray-700">Equipe de foot logo</h3>
              <button
                onClick={() => setIsFlipped(false)}
                className="text-black hover:text-gray-700 transition-colors flex-shrink-0"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-3 flex-grow text-left">En cas de besoin des logos de foot de l'angleterre, de l'allemagne, de l'espagne, de la France, de l'Italie et du reste du monde.</p>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;