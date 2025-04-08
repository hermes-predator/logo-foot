
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
      className="flex flex-col items-center p-4 bg-gradient-to-b from-blue-50/90 to-white border border-blue-100/60 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] will-change-transform"
      role="article"
      aria-label={`Information sur ${title}`}
    >
      <div className="w-8 h-8 text-blue-600 mb-2 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center bg-blue-100/80 rounded-full p-1.5" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-medium mb-1 text-sm text-gray-900">{title}</h3>
      <p className="text-xs text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default TrustIndicators;
