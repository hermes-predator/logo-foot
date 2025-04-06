
import React from 'react';
import { ShieldCheck, Download, HandHeart, FileDown } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
        icon={<FileDown />}
        title="25,000+ Download"
        description="Utilisateurs satisfaits"
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
      className="flex flex-col items-center p-4 bg-blue-50/80 backdrop-blur-sm rounded-lg border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:shadow-sm hover:scale-[1.02]"
      role="article"
      aria-label={`Information sur ${title}`}
    >
      <div className="w-7 h-7 text-blue-600 mb-2 transition-transform duration-300 hover:scale-110" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-medium mb-1 text-sm">{title}</h3>
      <p className="text-xs text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default TrustIndicators;
