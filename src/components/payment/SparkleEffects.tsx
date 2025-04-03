
import React from 'react';
import { Sparkle } from 'lucide-react';

const SparkleEffects = () => {
  return (
    <>
      {/* Animated stars - in different positions */}
      <div className="absolute -bottom-4 -left-4 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '4s', animationIterationCount: 'infinite', animationDelay: '1s' }}>
        <Sparkle className="h-12 w-12" />
      </div>
      <div className="absolute top-1/2 -left-6 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '3.5s', animationIterationCount: 'infinite', animationDelay: '0.5s' }}>
        <Sparkle className="h-8 w-8" />
      </div>
      <div className="absolute top-1/2 -right-6 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '3.2s', animationIterationCount: 'infinite', animationDelay: '1.5s' }}>
        <Sparkle className="h-8 w-8" />
      </div>
      <div className="absolute bottom-1/3 -right-4 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '4.2s', animationIterationCount: 'infinite', animationDelay: '2s' }}>
        <Sparkle className="h-10 w-10" />
      </div>
      <div className="absolute -bottom-6 right-1/4 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '3.8s', animationIterationCount: 'infinite', animationDelay: '0.8s' }}>
        <Sparkle className="h-8 w-8" />
      </div>
      <div className="absolute bottom-2/3 -left-8 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '3.6s', animationIterationCount: 'infinite', animationDelay: '1.2s' }}>
        <Sparkle className="h-6 w-6" />
      </div>
      <div className="absolute -bottom-6 right-1/4 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '3.8s', animationIterationCount: 'infinite', animationDelay: '0.8s' }}>
        <Sparkle className="h-8 w-8" />
      </div>
      <div className="absolute bottom-2/3 -left-8 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '3.6s', animationIterationCount: 'infinite', animationDelay: '1.2s' }}>
        <Sparkle className="h-6 w-6" />
      </div>
      <div className="absolute -bottom-8 left-1/3 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '4.5s', animationIterationCount: 'infinite', animationDelay: '0.3s' }}>
        <Sparkle className="h-10 w-10" />
      </div>
      <div className="absolute top-1/4 -left-10 text-blue-400 opacity-20 animate-ping" 
           style={{ animationDuration: '3.9s', animationIterationCount: 'infinite', animationDelay: '1.8s' }}>
        <Sparkle className="h-8 w-8" />
      </div>
    </>
  );
};

export default SparkleEffects;
