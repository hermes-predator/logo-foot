
import React from 'react';

// Composant séparé pour les effets du bouton - permet un chargement paresseux
const ButtonEffects = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2.5s_ease-in-out_infinite] z-0"></div>
    </div>
  );
};

export default ButtonEffects;
