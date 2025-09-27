
import React, { useState } from 'react';
import { Eye, ArrowLeft } from 'lucide-react';
import { Folder, Cloud } from 'lucide-react';
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
    <div className="perspective-1000 px-3 sm:px-0">
      <div 
        className={`relative transform-style-3d transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onTouchStart={() => isMobile && setIsHovered(true)}
        onTouchEnd={() => isMobile && setTimeout(() => setIsHovered(false), 500)}
      >
        <div 
          className={`relative backface-hidden p-3 sm:p-5 md:p-7 pb-0 rounded-2xl bg-gradient-to-b from-blue-50/90 to-white border border-blue-100/60 
            ${isHovered ? 'shadow-2xl' : 'shadow-lg'} 
            transition-shadow duration-100 ease-out will-change-transform
            before:absolute before:inset-0 before:rounded-2xl before:shadow-[0_8px_30px_rgba(0,0,0,0.08)] before:opacity-0 before:transition-opacity before:duration-100
            ${isHovered ? 'before:opacity-100' : 'before:opacity-0'}
          `}
          style={{
            boxShadow: isHovered ? 
              '0 20px 50px -15px rgba(0, 0, 0, 0.12), 0 10px 25px -10px rgba(0, 0, 0, 0.08)' : 
              '0 4px 12px -4px rgba(0, 0, 100, 0.08), 0 2px 6px -2px rgba(0, 0, 100, 0.04)',
            transform: isHovered && !isMobile ? 'translateY(-10px)' : 'translateY(0)',
            transitionProperty: 'transform, box-shadow',
            transitionDuration: '0.1s',
            transitionTimingFunction: 'ease-out'
          }}
        >
          {/* Effet de lueur subtil sur le bord supérieur */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
          
          {/* Dossier décoratif dans le coin supérieur DROIT avec animation subtile, ajusté vers le bas */}
          <div className={`absolute top-14 right-8 opacity-10 text-blue-900 hidden sm:block transition-transform duration-700 ${isHovered ? 'rotate-[-8deg] scale-110' : '-rotate-12'}`}>
            <Folder size={95} />
          </div>
          
          <SparkleEffects isHovered={isHovered} />
          <RecentBuyersBadge count={recentBuyers} />
          
          <div className="mb-3 relative z-10 mt-0">
            <div className="flex items-center gap-2">
              <h3 className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl md:text-3xl"} font-extrabold text-black/90 transition-colors duration-500 ${isHovered ? 'text-black' : 'text-black/90'}`}>⦗FRONT-CLOUD⦘~ Football.zip</h3>
            </div>
          
            {/* Google Drive Badge et bouton œil ensemble */}
            <div className="mt-3 flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="cursor-help">
                      <GoogleDriveBadge cursorHelp={true} alwaysEnlarged={true} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white border border-gray-200/50 p-3 max-w-[350px] rounded-lg shadow-lg">
                    <p className="text-gray-700 font-bold text-sm mb-1">Utilisation immédiate</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ce fichier est parfaitement organisé et immédiatement utilisable. Vous pouvez le stocker directement sur votre Google Drive, votre ordinateur, votre disque dur et l'utiliser tel quel, sans aucune autre modification.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={handleFlip}
                      className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 bg-gray-50 text-gray-600 border border-gray-200/80 hover:bg-gray-50/60 transition-colors duration-300 rounded-full relative overflow-hidden group shadow-[0_1px_4px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.01)]"
                      aria-label={isFlipped ? "Retour à la vue principale" : "Voir l'aperçu"}
                    >
                      {/* Cercle d'animation au clic seulement */}
                      <span className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
                        <span className="absolute inset-0 rounded-full bg-blue-100/0 group-active:bg-blue-100/20 transition-all duration-300 group-active:scale-[2.5] opacity-0 group-active:opacity-100"></span>
                      </span>
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
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
            <PaymentButton label="Télécharger maintenant (7.90€)" />
          </div>
        </div>
        
        <PaymentCardBack onFlipBack={handleFlip} />
      </div>
    </div>
  );
};

export default PaymentCard;
