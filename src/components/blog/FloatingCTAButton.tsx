
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
      className={`group relative overflow-hidden bg-white hover:bg-gray-50 border border-white ${className}`}
      style={{ 
        backgroundColor: 'white',
        borderColor: 'white',
        color: '#3b82f6'
      }}
      size={size}
    >
      <span className="font-semibold relative z-10" style={{ color: '#3b82f6' }}>
        En savoir plus
      </span>
      <ArrowRight 
        className={`transform transition-transform duration-300 group-hover:translate-x-1 relative z-10 ${
          size === 'lg' ? 'h-4 w-4 md:h-5 md:w-5' : 'h-3 w-3'
        }`} 
        style={{ color: '#3b82f6' }}
      />
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent animate-shine" style={{ animationDuration: '2.5s' }}></span>
    </Button>
  );
};

export default FloatingCTAButton;
