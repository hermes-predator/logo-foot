import React, { useState } from 'react';
import { Minus, Plus, Eye, MousePointer } from 'lucide-react';

interface FlipBoxProps {
  frontTitle: string;
  frontDescription: React.ReactNode;
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
          {/* Badge cliquable dans la flip box */}
          <div className="absolute top-8 right-2 z-30">
            <button
              onClick={() => setIsFlipped(true)}
              className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs px-3 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 opacity-70" />
              <span className="font-medium">Survolez les dossiers</span>
              <MousePointer className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="flex items-center mb-2 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left">{frontTitle}</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-3 flex-grow text-left"><strong>⦗FRONT-CLOUD⦘~ Football.zip</strong> : Contient tous les logos de clubs de football uniformes, nommés et triés par pays</p>
        </div>
      </div>

      {/* Face arrière */}
      <div className={`w-full absolute inset-0 transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative pr-2 pt-2 pb-2 bg-white rounded-xl min-h-[75px] flex flex-col">
          
          <div className="flex items-center justify-between mb-2 relative z-20">
            <div className="text-left flex-grow">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Logos des équipes de foot</h2>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-gray-700">Equipe de foot logo</h3>
              <button
                onClick={() => setIsFlipped(false)}
                className="text-black hover:text-gray-700 transition-colors flex-shrink-0"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-3 flex-grow text-left">{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;