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
          {/* Image des étoiles TrustPilot */}
          <img 
            src="/images/trustpilot-stars.png" 
            alt="TrustPilot 5 étoiles" 
            className="h-5 w-auto"
            loading="lazy"
          />
          
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
