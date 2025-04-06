
import React from 'react';
import { Folder, Check, Wallet, Download } from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  text: string;
  className?: string;
  iconColor?: string;
}

const Feature = ({ icon: Icon, text, className, iconColor }: FeatureProps) => {
  return (
    <div className="flex items-center gap-4 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-sm">
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
      icon: Check,
      text: "Fichier organisé",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Wallet,
      text: "Prix accessible"
    },
    {
      icon: Check,
      text: "Gain de temps",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Download,
      text: "Téléchargement instantané"
    },
    {
      icon: Check,
      text: "Valeur à votre actif",
      className: "bg-emerald-100",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
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
