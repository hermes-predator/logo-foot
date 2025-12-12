import React from 'react';

interface TrustPilotBadgeProps {
  reviewCount?: number;
  rating?: number;
}

const TrustPilotBadge: React.FC<TrustPilotBadgeProps> = ({ 
  reviewCount = 1034, 
  rating = 4.8 
}) => {
  // Avatars représentatifs (couleurs variées pour diversité)
  const avatarColors = [
    'bg-amber-100',
    'bg-blue-100', 
    'bg-green-100',
    'bg-purple-100'
  ];
  
  const avatarInitials = ['ML', 'PD', 'SB', 'EL'];

  return (
    <a
      href="https://www.trustpilot.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-gray-50/50 transition-all duration-300 group"
    >
      {/* Avatars superposés */}
      <div className="flex -space-x-3">
        {avatarColors.map((color, index) => (
          <div
            key={index}
            className={`w-10 h-10 ${color} rounded-full flex items-center justify-center border-2 border-white shadow-sm`}
          >
            <span className="text-xs font-semibold text-gray-600">
              {avatarInitials[index]}
            </span>
          </div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col gap-1">
        {/* Nombre de clients */}
        <span className="text-lg font-bold text-gray-800">
          {reviewCount.toLocaleString('fr-FR')}+ clients satisfaits
        </span>
        
        {/* Étoiles TrustPilot + Note */}
        <div className="flex items-center gap-2">
          {/* 5 étoiles TrustPilot style */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => {
              const fillPercentage = Math.min(1, Math.max(0, rating - i));
              const isPartial = fillPercentage > 0 && fillPercentage < 1;
              
              return (
                <div
                  key={i}
                  className="w-5 h-5 flex items-center justify-center relative overflow-hidden"
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
          <span className="text-sm font-semibold text-gray-700">
            Excellent {rating}
          </span>
        </div>
      </div>
    </a>
  );
};

export default TrustPilotBadge;
