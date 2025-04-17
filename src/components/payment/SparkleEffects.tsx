
import React from 'react';
import { Sparkle } from 'lucide-react';

interface SparkleEffectsProps {
  isHovered?: boolean;
}

const SparkleEffects = ({ isHovered = false }: SparkleEffectsProps) => {
  return (
    <>
      {/* Animated stars - in different positions with enhanced animation on hover */}
      <div 
        className={`absolute -bottom-4 -left-4 text-blue-400 opacity-20 animate-ping transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-20'}`} 
        style={{ 
          animationDuration: isHovered ? '3.5s' : '4s', 
          animationIterationCount: 'infinite', 
          animationDelay: '1s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.7s ease-out'
        }}
      >
        <Sparkle className="h-12 w-12" />
      </div>
      <div 
        className={`absolute top-1/2 -left-6 text-blue-400 opacity-20 animate-ping transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-20'}`} 
        style={{ 
          animationDuration: isHovered ? '3s' : '3.5s', 
          animationIterationCount: 'infinite', 
          animationDelay: '0.5s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.7s ease-out'
        }}
      >
        <Sparkle className="h-8 w-8" />
      </div>
      <div 
        className={`absolute top-1/2 -right-6 text-blue-400 opacity-20 animate-ping transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-20'}`} 
        style={{ 
          animationDuration: isHovered ? '2.7s' : '3.2s', 
          animationIterationCount: 'infinite', 
          animationDelay: '1.5s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.7s ease-out'
        }}
      >
        <Sparkle className="h-8 w-8" />
      </div>
      
      {/* Continue avec le reste des étoiles, en appliquant les mêmes modifications */}
      <div 
        className={`absolute bottom-1/3 -right-4 text-blue-400 opacity-20 animate-ping transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-20'}`} 
        style={{ 
          animationDuration: isHovered ? '3.7s' : '4.2s', 
          animationIterationCount: 'infinite', 
          animationDelay: '2s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.7s ease-out'
        }}
      >
        <Sparkle className="h-10 w-10" />
      </div>
      <div 
        className={`absolute -bottom-6 right-1/4 text-blue-400 opacity-20 animate-ping transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-20'}`} 
        style={{ 
          animationDuration: isHovered ? '3.3s' : '3.8s', 
          animationIterationCount: 'infinite', 
          animationDelay: '0.8s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.7s ease-out'
        }}
      >
        <Sparkle className="h-8 w-8" />
      </div>
      <div 
        className={`absolute bottom-2/3 -left-8 text-blue-400 opacity-20 animate-ping transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-20'}`} 
        style={{ 
          animationDuration: isHovered ? '3.1s' : '3.6s', 
          animationIterationCount: 'infinite', 
          animationDelay: '1.2s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.7s ease-out'
        }}
      >
        <Sparkle className="h-6 w-6" />
      </div>
      <div 
        className={`absolute -bottom-8 left-1/3 text-blue-400 opacity-20 animate-ping transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-20'}`} 
        style={{ 
          animationDuration: isHovered ? '4s' : '4.5s', 
          animationIterationCount: 'infinite', 
          animationDelay: '0.3s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.7s ease-out'
        }}
      >
        <Sparkle className="h-10 w-10" />
      </div>
      <div 
        className={`absolute top-1/4 -left-10 text-blue-400 opacity-20 animate-ping transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-20'}`} 
        style={{ 
          animationDuration: isHovered ? '3.4s' : '3.9s', 
          animationIterationCount: 'infinite', 
          animationDelay: '1.8s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.7s ease-out'
        }}
      >
        <Sparkle className="h-8 w-8" />
      </div>
    </>
  );
};

export default SparkleEffects;
