
import React from 'react';
import { ShieldCheck, Download, HandHeart } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-6">
      <TrustCard 
        icon={<ShieldCheck />}
        title="Paiement Sécurisé"
        description="Transactions via SumUp"
      />
      <TrustCard 
        icon={<Download />}
        title="Téléchargement instantané"
        description="Page d'après-paiement"
      />
      <TrustCard 
        icon={<HandHeart />}
        title="Support Réactif"
        description="Email : contact@logo-foot.com"
      />
    </div>
  );
};

interface TrustCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustCard = ({ icon, title, description }: TrustCardProps) => {
  return (
    <div 
      className="flex flex-col items-center p-4 bg-blue-50/80 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-[1.02]"
      role="article"
      aria-label={`Information sur ${title}`}
    >
      <div className="w-7 h-7 text-blue-600 mb-2 transition-transform duration-300 hover:scale-110" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-medium mb-1 text-sm text-gray-900">{title}</h3>
      <p className="text-xs text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default TrustIndicators;
