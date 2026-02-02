import React from 'react';

const HeroDecorations: React.FC = () => {
  return (
    <>
      {/* Grid de points décoratifs - style AgentFrancais */}
      <div className="absolute right-0 top-1/4 -z-5 hidden lg:block">
        <div className="grid grid-cols-12 gap-3 opacity-60">
          {Array.from({ length: 96 }).map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-lime-500/40"
              style={{
                animationDelay: `${(i % 12) * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Forme géométrique subtile */}
      <div className="absolute right-20 top-10 -z-5 hidden lg:block">
        <div className="w-32 h-32 border border-lime-500/20 rounded-full" />
      </div>

      {/* Ligne décorative */}
      <div className="absolute left-0 top-1/2 -z-5 hidden lg:block">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent" />
      </div>
    </>
  );
};

export default HeroDecorations;
