import React from 'react';

const TopBar = () => {
  const text = "⟨ 🔴 Téléchargez le meilleur fichier sur le thème du FOOTBALL 🔴 ⟩";
  
  return (
    <div className="relative bg-gradient-to-br from-white/85 via-gray-50/40 to-white/70 text-gray-800 py-1 overflow-hidden z-40 border-b border-gray-200/50">
      <div className="flex justify-center whitespace-nowrap">
        <span className="text-[9px] md:text-[10px] font-bold">
          {text}
        </span>
      </div>
    </div>
  );
};

export default TopBar;