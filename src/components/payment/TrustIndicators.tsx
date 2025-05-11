import React from 'react';
import { ShieldCheck, Download, HandHeart, Clock } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* Bannière de promotion limitée */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-100 border border-amber-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-3 justify-center">
          <div className="flex items-center justify-center w-9 h-9 bg-amber-100 rounded-full text-amber-600">
            <Clock className="h-5 w-5" />
          </div>
          <div className="text-center">
            <p className="text-amber-800 font-semibold text-sm">
              Offre spéciale : <span className="line-through">50€</span> <span className="font-bold">9€</span> seulement
            </p>
            <p className="text-xs text-amber-700">
              Cette promotion se termine bientôt ! Profitez-en maintenant
            </p>
          </div>
        </div>
      </div>

      {/* Indicateurs de confiance existants */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        <TrustCard 
          icon={<ShieldCheck />}
          title="Paiement Sécurisé"
          description="Transactions via SumUp"
        />
        <TrustCard 
          icon={<Download />}
          title="Téléchargement Instantané"
          description="Page d'après-paiement"
        />
        <TrustCard 
          icon={<HandHeart />}
          title="Support Disponible"
          description="Email : contact@logo-foot.com"
        />
      </div>
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
      className="flex flex-col items-center p-4 bg-gradient-to-b from-blue-50/90 to-white border border-blue-100/60 rounded-lg transition-all duration-300 hover:border-blue-200/70 will-change-transform group relative overflow-hidden"
      role="article"
      aria-label={`Information sur ${title}`}
    >
      {/* Effet de lumière subtil sur hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/30 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
      
      {/* Icône avec style de survol appliqué par défaut et effet subtil */}
      <div className="w-10 h-10 text-blue-700 mb-3 flex items-center justify-center bg-blue-50 rounded-full p-2 transition-all duration-300 relative z-10 shadow-sm border border-blue-100/50" aria-hidden="true">
        {icon}
      </div>
      
      {/* Texte avec meilleur contraste et lisibilité */}
      <h3 className="font-medium mb-1.5 text-sm text-gray-900 transition-colors duration-300">{title}</h3>
      <p className="text-xs text-gray-600 text-center transition-colors duration-300">{description}</p>
    </div>
  );
};

export default TrustIndicators;
