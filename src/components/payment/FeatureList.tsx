
import React from 'react';
import { Folder, TrendingUp, Star, Heart, Zap, ClipboardCheck, Plus, ThumbsUp } from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  text: string;
  description?: string;
  className?: string;
  iconColor?: string;
}

const Feature = ({ icon: Icon, text, description, className, iconColor }: FeatureProps) => {
  return (
    <div className="relative flex items-center gap-2 sm:gap-4 text-gray-800 p-1.5 sm:p-2 rounded-lg">
      <div className={`relative z-10 p-1.5 sm:p-2.5 rounded-full flex-shrink-0 ${className || 'bg-blue-100'}`}>
        <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${iconColor || 'text-blue-600'}`} />
      </div>
      <div className="relative z-10 min-w-0">
        <span className="text-[13px] sm:text-[15px] font-semibold block truncate">{text}</span>
        {description && (
          <p className="text-[10px] sm:text-xs text-gray-500 leading-tight line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
};

const FeatureList = () => {
  const features = [
    {
      icon: Folder,
      text: "Fichier : 8 774 logos",
      description: "Un fichier complet sur le football."
    },
    {
      icon: Plus,
      text: "Gain de temps", 
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "De 6 à 12 mois de travail économisés minimum."
    },
    {
      icon: ClipboardCheck,
      text: "Fichier : Professionnel", 
      className: "bg-blue-100",
      iconColor: "text-blue-700",
      description: "Logos uniformes, nommés et triés."
    },
    {
      icon: Plus,
      text: "Gain de confiance",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Obtenez instantanément tous les logos."
    },
    {
      icon: Star,
      text: "Fichier : Rare sur le marché",
      className: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Un fichier trouvable nulle part ailleurs."
    },
    {
      icon: Plus,
      text: "Patrimoine",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Progression de votre valeur digitale."
    },
    {
      icon: Heart,
      text: "Prix faible - Valeur élevée",
      description: "Une proposition généreuse."
    },
    {
      icon: Plus,
      text: "Utilité",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Utile pour vos projets autour du football."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-3 mb-4 sm:mb-7 pt-2 sm:pt-4 mt-1 sm:mt-2">
      {features.map((feature, index) => (
        <Feature 
          key={index} 
          icon={feature.icon} 
          text={feature.text} 
          description={feature.description}
          className={feature.className} 
          iconColor={feature.iconColor} 
        />
      ))}
    </div>
  );
};

export default FeatureList;
export { Feature, type FeatureProps };
