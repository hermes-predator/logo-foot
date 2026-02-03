
import React, { useState } from 'react';
import { Eye, Folder } from 'lucide-react';
import FeatureList from './FeatureList';
import PaymentButton from './PaymentButton';
import PricingBlock from './PricingBlock';
import SparkleEffects from './SparkleEffects';
import RecentBuyersBadge from './RecentBuyersBadge';
import GoogleDriveBadge from './GoogleDriveBadge';
import { measurePerformance } from '@/lib/performance';
import { useIsMobile, useIsSmallMobile } from '@/hooks/use-mobile';
import PaymentCardBack from './PaymentCardBack';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PaymentCardProps {
  recentBuyers: number;
}

const PaymentCard = ({ recentBuyers }: PaymentCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  React.useEffect(() => {
    measurePerformance('payment-card-render', () => {
      // Simplement mesurer le temps de rendu
    });
  }, []);

  const isMobile = useIsMobile();
  const isSmallMobile = useIsSmallMobile();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 px-2 sm:px-0">
      <div 
        className={`relative transform-style-3d transition-transform duration-700 min-h-[600px] sm:min-h-[650px] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onTouchStart={() => isMobile && setIsHovered(true)}
        onTouchEnd={() => isMobile && setTimeout(() => setIsHovered(false), 500)}
      >
        <div 
          className={`relative backface-hidden p-4 sm:p-6 md:p-8 pb-0 rounded-2xl bg-card border border-border
            ${isHovered ? 'shadow-xl' : 'shadow-lg'} 
            transition-all duration-300 ease-out
          `}
          style={{
            transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
          }}
        >
          
          {/* Dossier décoratif */}
          <div className={`absolute top-14 right-8 opacity-5 text-navy hidden sm:block transition-transform duration-700 ${isHovered ? 'rotate-[-8deg] scale-110' : '-rotate-12'}`}>
            <Folder size={95} />
          </div>
          
          <SparkleEffects isHovered={isHovered} />
          <RecentBuyersBadge count={recentBuyers} />
          
          <div className="mb-4 relative z-10 mt-6 sm:mt-2">
            <div className="flex items-center gap-2">
              <h3 className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl md:text-3xl"} font-bold text-navy leading-tight`}>
                ⦗FRONT-CLOUD⦘~ Football.zip
              </h3>
            </div>
          
            {/* Google Drive Badge et bouton œil */}
            <div className="mt-4 flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="cursor-help">
                      <GoogleDriveBadge cursorHelp={true} alwaysEnlarged={true} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-card border border-border p-3 max-w-[350px] rounded-xl shadow-lg">
                    <p className="text-foreground font-bold text-sm mb-1">Utilisation immédiate</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ce fichier est parfaitement organisé et immédiatement utilisable. Vous pouvez le stocker directement sur votre Google Drive, votre ordinateur, votre disque dur et l'utiliser tel quel.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={handleFlip}
                      className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-muted text-muted-foreground border border-border hover:bg-lime-50 hover:border-lime-200 transition-all duration-300 rounded-xl group"
                      aria-label={isFlipped ? "Retour à la vue principale" : "Voir l'aperçu"}
                    >
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 group-hover:text-lime-600 transition-colors" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Aperçu du fichier</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="relative z-10">
            <FeatureList />
            <PricingBlock />
            <PaymentButton label="Télécharger maintenant (8€)" />
          </div>
        </div>
        
        <PaymentCardBack onFlipBack={handleFlip} />
      </div>
    </div>
  );
};

export default PaymentCard;
