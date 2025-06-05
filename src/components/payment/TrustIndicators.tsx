
import React from 'react';
import { ShieldCheck, Download, HandHeart } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const TrustIndicators = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <TrustCard 
        icon={<ShieldCheck className="text-gray-600" />}
        title="Paiement Sécurisé"
        description="Transactions via SumUp"
        hoverContent="Notre système de paiement est entièrement sécurisé avec un cryptage SSL et respecte les normes PCI DSS."
      />
      <TrustCard 
        icon={<Download className="text-gray-600" />}
        title="Téléchargement Instantané"
        description="Page d'après-paiement"
        hoverContent="Accédez immédiatement à votre fichier après paiement, sans délai d'attente ou procédure complexe."
      />
      <TrustCard 
        icon={<HandHeart className="text-gray-600" />}
        title="Service Client"
        description="Email : contact@logo-foot.com"
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
          className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-200 cursor-pointer"
          role="article"
          aria-label={`Information sur ${title}`}
        >
          {/* Icône stylisée avec un effet de halo */}
          <div className="mb-3 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-md opacity-20 scale-150"></div>
            <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white rounded-full shadow-sm border border-blue-100">
              {icon}
            </div>
          </div>
          
          {/* Séparateur décoratif */}
          <Separator className="w-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-3" />
          
          {/* Titre avec style amélioré */}
          <h3 className="font-semibold mb-1 text-gray-800 text-center">{title}</h3>
          
          {/* Description avec légère opacité */}
          <p className="text-xs text-gray-600 text-center">{description}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 p-4 bg-white shadow-lg rounded-lg border-0" side="top">
        <p className="text-sm text-gray-700">{hoverContent}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TrustIndicators;
