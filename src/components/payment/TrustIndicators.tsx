
import React from 'react';
import { ShieldCheck, Download, HandHeart } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-6">
      <TrustCard 
        icon={
          <div>
            <ShieldCheck className="text-gray-600 stroke-[1.75px]" />
          </div>
        }
        title="Paiement Sécurisé"
        description="Transactions via SumUp"
      />
      <TrustCard 
        icon={
          <div>
            <Download className="text-gray-600 stroke-[1.75px]" />
          </div>
        }
        title="Téléchargement Instantané"
        description="Page d'après-paiement"
      />
      <TrustCard 
        icon={
          <div>
            <HandHeart className="text-gray-600 stroke-[1.75px]" />
          </div>
        }
        title="Support Disponible"
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
      className="flex flex-col items-center p-4 bg-gray-50 border border-gray-200/80 rounded-lg relative overflow-hidden"
      role="article"
      aria-label={`Information sur ${title}`}
    >
      {/* Icône avec style uniforme */}
      <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-full p-2 relative z-10 border border-gray-200/80" aria-hidden="true">
        {icon}
      </div>
      
      {/* Texte avec style cohérent */}
      <h3 className="font-semibold mb-1.5 text-sm text-gray-800">{title}</h3>
      <p className="text-xs text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default TrustIndicators;
