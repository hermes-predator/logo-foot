import React from 'react';

const LiveDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
  </span>
);

const TopBar = () => {
  return (
    <div className="relative bg-gradient-to-br from-white/85 via-gray-50/40 to-white/70 text-gray-800 py-1 overflow-hidden z-40 border-b border-gray-200/50">
      <div className="flex justify-center items-center gap-2 whitespace-nowrap">
        <span className="text-[9px] md:text-[10px] font-bold flex items-center gap-2">
          ⟨ <LiveDot /> Ajoutez le meilleur fichier sur le thème du FOOTBALL à votre collection <LiveDot /> ⟩
        </span>
      </div>
    </div>
  );
};

export default TopBar;