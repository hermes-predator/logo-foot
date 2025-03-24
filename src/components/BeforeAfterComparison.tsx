
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  description: string;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  title,
  description
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMove = (clientX: number) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const relativeX = clientX - containerRect.left;
      const newPosition = Math.max(0, Math.min(100, (relativeX / containerWidth) * 100));
      setSliderPosition(newPosition);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    // Clean up event listeners on unmount
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="mb-12 mt-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800">
          {title}
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          {description}
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden shadow-md">
        {/* Decorative elements */}
        <div className="absolute -top-3 -left-3 text-purple-400/20 animate-pulse" style={{ animationDuration: '4s' }}>
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute -bottom-3 -right-3 text-blue-400/20 animate-pulse" style={{ animationDuration: '5s' }}>
          <Sparkles className="h-8 w-8" />
        </div>

        {/* Before/After container */}
        <div 
          ref={containerRef}
          className="relative select-none h-[300px] md:h-[350px] bg-gray-100"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Before image (full width) */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={beforeImage} 
              alt={beforeAlt}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-0.5 rounded-lg text-xs font-medium">
              AVANT
            </div>
          </div>

          {/* After image (partial width based on slider) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={afterImage} 
              alt={afterAlt}
              className="object-cover absolute top-0 right-0 h-full"
              style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: '100vw' }}
            />
            <div className="absolute top-3 right-3 bg-green-500/90 text-white px-2 py-0.5 rounded-lg text-xs font-medium">
              APRÈS
            </div>
          </div>

          {/* Slider control */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-blue-500">
              <ArrowLeftRight className="h-4 w-4 text-blue-600" />
            </div>
          </div>

          {/* Labels at the bottom */}
          <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-0.5 rounded-lg text-xs opacity-70">
            Qualité standard
          </div>
          <div className="absolute bottom-3 right-3 bg-green-500/90 text-white px-2 py-0.5 rounded-lg text-xs opacity-70">
            Notre collection PREMIUM
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
