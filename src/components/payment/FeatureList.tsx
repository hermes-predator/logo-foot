
import React from 'react';
import { Folder, TrendingUp, Star, Heart, Zap, BadgeCheck } from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  text: string;
  description?: string;
  className?: string;
  iconColor?: string;
}

const Feature = ({ icon: Icon, text, description, className, iconColor }: FeatureProps) => {
  return (
    <div className="relative flex items-center gap-3 text-gray-800 p-1.5 rounded-lg">
      <div className={`relative z-10 p-2 rounded-full ${className || 'bg-blue-100'}`}>
        <Icon className={`h-4 w-4 ${iconColor || 'text-blue-600'}`} />
      </div>
      <div className="relative z-10">
        <span className="text-[14px] font-semibold">{text}</span>
        {description && (
          <p className="text-xs text-gray-500 mt-0.5 leading-tight max-w-[240px]">{description}</p>
        )}
      </div>
    </div>
  );
};

const FeatureList = () => {
  const features = [
    {
      icon: Folder,
      text: "Fichier de 8 600+ ressources",
      description: "Une couverture totale du football que nous rajoutons à votre actif"
    },
    {
      icon: TrendingUp,
      text: "Gain de temps", 
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Accédez instantanément à tous les logos sans recherche fastidieuse"
    },
    {
      icon: Star,
      text: "Fichier unique sur le marché",
      className: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Un fichier trouvable nulle part ailleurs. Procurez-vous le sans attendre !"
    },
    {
      icon: TrendingUp,
      text: "Gain de confiance",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Boostez votre parcours personnel et gagnez en confiance pour vos projets"
    },
    {
      icon: BadgeCheck,
      text: "Fichier de haute qualité", 
      className: "bg-blue-100",
      iconColor: "text-blue-700",
      description: "Nos logos sont uniformes, nommés et triés pour un usage fiable et immédiat"
    },
    {
      icon: TrendingUp,
      text: "Renforcement du patrimoine",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Augmentez la valeur de vos actifs digitaux en stockant notre fichier spécialisé"
    },
    {
      icon: Heart,
      text: "Prix accessible",
      description: "Un tarif réduit pour permettre au plus grand nombre d'en disposer (partage)"
    },
    {
      icon: TrendingUp,
      text: "Valeur à votre actif",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Boostez votre parcours personnel et gagnez en confiance pour vos projets"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-8 pt-6 mt-3">
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

