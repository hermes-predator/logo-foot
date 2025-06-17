
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingCTAButtonProps {
  onClick: () => void;
  size?: 'sm' | 'lg';
  className?: string;
}

const FloatingCTAButton = ({ onClick, size = 'sm', className = '' }: FloatingCTAButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      variant="secondary" 
      className={`group relative overflow-hidden bg-white hover:bg-gray-100 ${className}`}
      size={size}
    >
      <span className="font-bold relative z-10 text-blue-600">
        En savoir plus
      </span>
      <ArrowRight 
        className={`transform transition-transform duration-300 group-hover:translate-x-1 relative z-10 text-blue-600 ${
          size === 'lg' ? 'h-4 w-4 md:h-5 md:w-5' : 'h-3 w-3'
        }`} 
      />
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent animate-shine" style={{ animationDuration: '2.5s' }}></span>
    </Button>
  );
};

export default FloatingCTAButton;
