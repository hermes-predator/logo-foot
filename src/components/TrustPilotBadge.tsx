import React from 'react';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

interface TrustPilotBadgeProps {
  reviewCount?: number;
  rating?: number;
  variant?: 'light' | 'dark';
}

const TrustPilotBadge: React.FC<TrustPilotBadgeProps> = ({ 
  reviewCount = 1034, 
  rating = 4.8,
  variant = 'light'
}) => {
  const isDark = variant === 'dark';
  return (
    <a
      href="https://www.trustpilot.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-50/50'}`}
    >
      {/* Logo TrustPilot */}
      <img 
        src={trustpilotLogo} 
        alt="TrustPilot" 
        className={`h-4 w-auto ${isDark ? 'brightness-0 invert' : ''}`}
      />

      {/* Contenu principal */}
      <div className="flex flex-col gap-0.5">
        {/* Nombre de clients */}
        <span className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {reviewCount.toLocaleString('fr-FR')}+ clients satisfaits
        </span>
        
        {/* Étoiles TrustPilot + Note */}
        <div className="flex items-center gap-1.5">
          {/* 5 étoiles TrustPilot style */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => {
              const fillPercentage = Math.min(1, Math.max(0, rating - i));
              const isPartial = fillPercentage > 0 && fillPercentage < 1;
              
              return (
                <div
                  key={i}
                  className="w-4 h-4 flex items-center justify-center relative overflow-hidden"
                >
                  {/* Fond gris */}
                  <div className="absolute inset-0 bg-gray-200" />
                  
                  {/* Remplissage vert (partiel ou complet) */}
                  {fillPercentage > 0 && (
                    <div 
                      className="absolute inset-0 bg-[#00b67a]"
                      style={{ width: `${fillPercentage * 100}%` }}
                    />
                  )}
                  
                  {/* Étoile blanche */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 text-white fill-current relative z-10"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              );
            })}
          </div>
          
          {/* Texte Excellent + Note */}
          <span className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            Excellent {rating}
          </span>
        </div>
      </div>
    </a>
  );
};

export default TrustPilotBadge;
