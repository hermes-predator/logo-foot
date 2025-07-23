
import React from 'react';
import { Folder, TrendingUp, Star, Heart, Zap, BadgeCheck, Plus } from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  text: string;
  description?: string;
  className?: string;
  iconColor?: string;
}

const Feature = ({ icon: Icon, text, description, className, iconColor }: FeatureProps) => {
  return (
    <div className="relative flex items-center gap-4 text-gray-800 p-2 rounded-lg">
      <div className={`relative z-10 p-2.5 rounded-full ${className || 'bg-blue-100'}`}>
        <Icon className={`h-5 w-5 ${iconColor || 'text-blue-600'}`} />
      </div>
      <div className="relative z-10">
        <span className="text-[15px] font-semibold">{text}</span>
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
      description: "Un fichier couvrant la majorité des besoins numériques du football."
    },
    {
      icon: Plus,
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
      description: "Un fichier d'une valeur inestimable, trouvable nulle part ailleurs."
    },
    {
      icon: Plus,
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
      description: "Nos logos sont uniformes, nommés et triés pour un usage fiable et immédiat."
    },
    {
      icon: Plus,
      text: "Patrimoine numérique",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Augmentez la valeur de votre patrimoine en stockant notre fichier spécialisé"
    },
    {
      icon: Heart,
      text: "Prix accessible",
      description: "Un tarif simple permettant l'accès à cette ressource à un prix abordable (partage)."
    },
    {
      icon: Plus,
      text: "Utilité stratégique",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Parfait pour les projets personnels spécialisés dans l'analyse sportive"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-7 pt-4 mt-2">
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
