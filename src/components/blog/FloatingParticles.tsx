
import React from 'react';

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particules flottantes subtiles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-floating" 
           style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
      <div className="absolute top-32 right-16 w-1 h-1 bg-white/30 rounded-full animate-floating" 
           style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
      <div className="absolute bottom-24 left-20 w-1.5 h-1.5 bg-white/25 rounded-full animate-floating" 
           style={{ animationDelay: '2s', animationDuration: '7s' }}></div>
      <div className="absolute top-40 left-1/3 w-1 h-1 bg-white/35 rounded-full animate-floating" 
           style={{ animationDelay: '3s', animationDuration: '9s' }}></div>
      <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-floating" 
           style={{ animationDelay: '4s', animationDuration: '6.5s' }}></div>
      <div className="absolute top-16 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-floating" 
           style={{ animationDelay: '5s', animationDuration: '8.5s' }}></div>
      
      {/* Particules plus petites pour un effet de profondeur */}
      <div className="absolute top-28 left-1/2 w-0.5 h-0.5 bg-white/50 rounded-full animate-floating" 
           style={{ animationDelay: '1.5s', animationDuration: '10s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-0.5 h-0.5 bg-white/45 rounded-full animate-floating" 
           style={{ animationDelay: '3.5s', animationDuration: '7.5s' }}></div>
    </div>
  );
};

export default FloatingParticles;
