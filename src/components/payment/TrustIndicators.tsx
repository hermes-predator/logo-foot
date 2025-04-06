
import React from 'react';
import { ShieldCheck, Download, HeartHandshake, BadgeCheck } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <TrustCard 
        icon={<ShieldCheck className="text-blue-600" size={18} />}
        title="Paiement Sécurisé"
        description="Transactions via SumUp"
        color="bg-gradient-to-br from-blue-50 to-blue-100"
        borderColor="border-blue-200"
        iconBgColor="bg-blue-100"
      />
      <TrustCard 
        icon={<Download className="text-blue-600" size={18} />}
        title="Téléchargement instantané"
        description="Page d'après-paiement"
        color="bg-gradient-to-br from-blue-50 to-blue-100"
        borderColor="border-blue-200"
        iconBgColor="bg-blue-100"
      />
      <TrustCard 
        icon={<HeartHandshake className="text-blue-600" size={18} />}
        title="Support Réactif"
        description="Email : contact@logo-foot.com"
        color="bg-gradient-to-br from-blue-50 to-blue-100"
        borderColor="border-blue-200"
        iconBgColor="bg-blue-100"
      />
    </div>
  );
};

interface TrustCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  iconBgColor: string;
}

const TrustCard = ({ icon, title, description, color, borderColor, iconBgColor }: TrustCardProps) => {
  return (
    <div 
      className={`flex flex-col items-center p-4 ${color} rounded-lg backdrop-blur-sm border ${borderColor} transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:border-opacity-70`}
      role="article"
      aria-label={`Information sur ${title}`}
    >
      <div className={`${iconBgColor} w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-sm transition-transform duration-300 group-hover:scale-110`} aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-medium mb-0.5 text-sm">{title}</h3>
      <p className="text-xs text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default TrustIndicators;
