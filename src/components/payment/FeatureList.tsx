import React from 'react';
import { Folder, TrendingUp, Star, Wallet, Zap } from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  text: string;
  description?: string;
  className?: string;
  iconColor?: string;
}

const Feature = ({ icon: Icon, text, description, className, iconColor }: FeatureProps) => {
  return (
    <div className="flex items-center gap-4 text-gray-800 p-2 rounded-lg">
      <div className={`p-2 rounded-full ${className || 'bg-blue-100'}`}>
        <Icon className={`h-5 w-5 ${iconColor || 'text-blue-600'}`} />
      </div>
      <div>
        <span className="text-[15px] font-medium">{text}</span>
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
      description: "Une couverture totale du sujet du football"
    },
    {
      icon: TrendingUp,
      text: "Gain de temps pour vos projets", 
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Accédez instantanément à tous les logos sans recherche fastidieuse"
    },
    {
      icon: Star,
      text: "Fichier unique sur le marché",
      className: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Une collection exclusive trouvable nulle part ailleurs"
    },
    {
      icon: TrendingUp,
      text: "Renforcement de votre patrimoine digital",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Améliorez la qualité visuelle et professionnelle de vos créations"
    },
    {
      icon: Wallet,
      text: "Prix accessible",
      description: "Un prix réduit par rapport à sa valeur"
    },
    {
      icon: TrendingUp,
      text: "Valeur à votre actif",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Une ressource pérenne qui conserve sa valeur dans le temps"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8 pt-6 mt-3">
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
