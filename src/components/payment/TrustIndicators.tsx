import React from 'react';
import { ShieldCheck, Download, HandHeart } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const TrustIndicators = () => {
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-4 sm:mb-6 -mt-6 sm:-mt-8">
      <TrustCard 
        icon={<ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
        title="Paiement Sécurisé"
        description="Transactions via SumUp"
        hoverContent="Notre système de paiement est entièrement sécurisé avec un cryptage SSL et respecte les normes PCI DSS."
      />
      <TrustCard 
        icon={<Download className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
        title="Téléchargement Instantané"
        description="Page d'après-paiement"
        hoverContent="Accédez immédiatement à votre fichier après paiement, sans délai d'attente ou procédure complexe."
      />
      <TrustCard 
        icon={<HandHeart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
        title="Support Client"
        description="E-mail : contact@logo-foot.com"
        hoverContent="Notre équipe de support est disponible pour répondre à vos questions et vous aider en cas de besoin."
      />
    </div>
  );
};

interface TrustCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hoverContent: string;
}

const TrustCard = ({ icon, title, description, hoverContent }: TrustCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className="flex flex-col items-center p-2 sm:p-4 bg-white rounded-lg shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-200 cursor-pointer"
          role="article"
          aria-label={`Information sur ${title}`}
        >
          <div className="mb-1.5 sm:mb-2.5 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-sm opacity-20 scale-125"></div>
            <div className="relative z-10 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white rounded-full shadow-sm border border-blue-100">
              {icon}
            </div>
          </div>
          
          <Separator className="w-5 sm:w-7 h-0.5 rounded-full bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-1.5 sm:mb-2.5" />
          
          <h3 className="font-semibold text-[10px] sm:text-sm mb-0.5 text-gray-800 text-center leading-tight">{title}</h3>
          <p className="text-[9px] sm:text-xs text-gray-600 text-center">{description}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 p-3 bg-white shadow-lg rounded-lg border-0" side="top">
        <p className="text-sm text-gray-700">{hoverContent}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TrustIndicators;
