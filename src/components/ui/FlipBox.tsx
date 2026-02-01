import React from 'react';
import { Eye, MousePointer, ChevronDown } from 'lucide-react';

interface FlipBoxProps {
  frontTitle: string;
  frontDescription: React.ReactNode;
  backTitle: string;
  backContent: string;
  className?: string;
}

const FlipBox = ({ frontTitle, frontDescription, backTitle, backContent, className = '' }: FlipBoxProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Container principal avec style moderne */}
      <div 
        className={`
          relative bg-card rounded-2xl border border-border p-6 
          transition-all duration-300 hover:shadow-lg hover:border-lime-200
          ${isFlipped ? 'bg-lime-50/50' : ''}
        `}
      >
        {/* Header avec toggle */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              {isFlipped ? backTitle : frontTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isFlipped ? backContent : "Notre fichier contient tous les logos de clubs de football uniformes, nommés et triés par pays"}
            </p>
          </div>
          
          {/* Toggle button */}
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
              transition-all duration-300
              ${isFlipped 
                ? 'bg-navy text-white hover:bg-navy-light' 
                : 'bg-muted hover:bg-lime-100 text-foreground border border-border hover:border-lime-300'
              }
            `}
          >
            {isFlipped ? (
              <>
                <ChevronDown className="w-4 h-4 rotate-180" />
                <span>Fermer</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Survolez les dossiers</span>
                <MousePointer className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;
