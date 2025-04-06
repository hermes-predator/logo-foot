
import React from 'react';
import { ShieldCheck, Download, HeartHandshake, BadgeCheck } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      <TrustCard 
        icon={<ShieldCheck className="text-blue-600" />}
        title="Paiement Sécurisé"
        description="Transactions via SumUp"
        color="bg-gradient-to-br from-blue-50 to-blue-100"
        borderColor="border-blue-200"
        iconBgColor="bg-blue-100"
      />
      <TrustCard 
        icon={<Download className="text-green-600" />}
        title="Téléchargement instantané"
        description="Page d'après-paiement"
        color="bg-gradient-to-br from-green-50 to-green-100"
        borderColor="border-green-200"
        iconBgColor="bg-green-100"
      />
      <TrustCard 
        icon={<HeartHandshake className="text-purple-600" />}
        title="Support Réactif"
        description="Email : contact@logo-foot.com"
        color="bg-gradient-to-br from-purple-50 to-purple-100"
        borderColor="border-purple-200"
        iconBgColor="bg-purple-100"
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
      className={`flex flex-col items-center p-5 ${color} rounded-lg backdrop-blur-sm border ${borderColor} transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-opacity-70`}
      role="article"
      aria-label={`Information sur ${title}`}
    >
      <div className={`${iconBgColor} w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110`} aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-medium mb-1 text-base">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default TrustIndicators;
