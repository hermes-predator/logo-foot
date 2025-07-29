import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FlipBoxProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  triggerHover?: boolean;
}

const FlipBox: React.FC<FlipBoxProps> = ({ 
  frontContent, 
  backContent, 
  className = "", 
  triggerHover = false 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const containerClasses = `
    relative w-full h-full cursor-pointer
    [perspective:1000px] group
    ${className}
  `;

  const cardClasses = `
    relative w-full h-full
    [transform-style:preserve-3d]
    transition-transform duration-500 ease-in-out
    ${isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}
  `;

  const sideClasses = `
    absolute inset-0 w-full h-full
    [backface-visibility:hidden]
    rounded-lg border border-gray-200 bg-white
    shadow-sm hover:shadow-md transition-shadow duration-200
  `;

  const frontClasses = `${sideClasses} [transform:rotateY(0deg)]`;
  const backClasses = `${sideClasses} [transform:rotateY(180deg)]`;

  return (
    <div 
      className={containerClasses}
      onClick={handleFlip}
      onMouseEnter={triggerHover ? () => setIsFlipped(true) : undefined}
      onMouseLeave={triggerHover ? () => setIsFlipped(false) : undefined}
    >
      <div className={cardClasses}>
        {/* Front Side */}
        <div className={frontClasses}>
          <div className="relative h-full p-4">
            {frontContent}
            <div className="absolute bottom-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={backClasses}>
          <div className="relative h-full p-4">
            {backContent}
            <div className="absolute bottom-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="h-4 w-4 text-gray-400 rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;