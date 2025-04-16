
import React from 'react';
import { Folder, TrendingUp, Star, Wallet, Zap } from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  text: string;
  className?: string;
  iconColor?: string;
}

const Feature = ({ icon: Icon, text, className, iconColor }: FeatureProps) => {
  return (
    <div className="flex items-center gap-4 text-gray-800 p-2 rounded-lg">
      <div className={`p-2 rounded-full ${className || 'bg-blue-100'}`}>
        <Icon className={`h-5 w-5 ${iconColor || 'text-blue-600'}`} />
      </div>
      <span className="text-[15px] font-medium">{text}</span>
    </div>
  );
};

const FeatureList = () => {
  const features = [
    {
      icon: Folder,
      text: "Fichier de 8 600+ ressources"
    },
    {
      icon: TrendingUp,
      text: "Gain de confiance et de temps",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Folder,  // Changed from Star to Folder
      text: "Fichier à forte valeur d'usage",
      className: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      text: "Renforcement de votre patrimoine digital",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Wallet,
      text: "Prix accessible"
    },
    {
      icon: TrendingUp,
      text: "Valeur à votre actif",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8 pt-6 mt-3">
      {features.map((feature, index) => (
        <Feature 
          key={index} 
          icon={feature.icon} 
          text={feature.text} 
          className={feature.className} 
          iconColor={feature.iconColor} 
        />
      ))}
    </div>
  );
};

export default FeatureList;

