import React, { useState } from 'react';
import { Eye, ArrowLeft } from 'lucide-react';
import { Folder } from 'lucide-react';
import FeatureList from './FeatureList';
import PaymentButton from './PaymentButton';
import PricingBlock from './PricingBlock';
import SparkleEffects from './SparkleEffects';
import RecentBuyersBadge from './RecentBuyersBadge';
import GoogleDriveBadge from './GoogleDriveBadge';
import { measurePerformance } from '@/lib/performance';
import { useIsSmallMobile } from '@/hooks/use-mobile';
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

  const isSmallMobile = useIsSmallMobile();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000">
      <div 
        className={`relative transform-style-3d transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative backface-hidden p-3 sm:p-5 md:p-7 pb-0 rounded-2xl bg-gradient-to-b from-blue-50/90 to-white border border-blue-100/60 
            ${isHovered ? 'shadow-xl' : 'shadow-lg'} 
            transition-shadow duration-100 ease-out will-change-transform
            before:absolute before:inset-0 before:rounded-2xl before:shadow-[0_5px_15px_rgba(0,0,100,0.09)] before:opacity-0 before:transition-opacity before:duration-100
            ${isHovered ? 'before:opacity-100' : 'before:opacity-0'}
          `}
          style={{
            boxShadow: isHovered ? 
              '0 10px 25px -10px rgba(0, 0, 100, 0.12), 0 5px 10px -7px rgba(0, 0, 100, 0.06)' : 
              '0 4px 12px -4px rgba(0, 0, 100, 0.08), 0 2px 6px -2px rgba(0, 0, 100, 0.04)',
            transform: isHovered ? 'translateY(-9px)' : 'translateY(0)',
            transitionProperty: 'transform, box-shadow',
            transitionDuration: '0.08s',
            transitionTimingFunction: 'ease-out'
          }}
        >
          {/* Effet de lueur subtil sur le bord supérieur */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
          
          {/* Dossier décoratif dans le coin supérieur DROIT avec animation subtile, ajusté vers le bas */}
          <div className={`absolute top-16 right-10 opacity-10 text-blue-900 hidden sm:block transition-transform duration-700 ${isHovered ? 'rotate-[-8deg] scale-110' : '-rotate-12'}`}>
            <Folder size={75} />
          </div>
          
          <SparkleEffects isHovered={isHovered} />
          <RecentBuyersBadge count={recentBuyers} />
          
          <div className="mb-3 sm:mb-4 relative z-10 mt-0">
            <div className="flex items-center gap-2">
              <h3 className={`${isSmallMobile ? "text-xl" : "text-2xl md:text-3xl"} font-extrabold text-black/90 transition-colors duration-500 ${isHovered ? 'text-black' : 'text-black/90'}`}>⦗FRONT-CLOUD⦘~ Football.zip</h3>
            </div>
            <p className={`text-gray-600 mt-0 ${isSmallMobile ? "text-sm" : "font-medium"} transition-colors duration-500 ${isHovered ? 'text-gray-700' : 'text-gray-600'}`}>La plus grande collection de logos de football en haute qualité</p>
          
            {/* Google Drive Badge et bouton œil ensemble */}
            <div className="mt-2 flex items-center gap-2">
              <GoogleDriveBadge />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={handleFlip}
                      className="inline-flex items-center justify-center w-11 h-11 bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100/70 transition-all duration-300 rounded-full relative overflow-hidden group"
                      aria-label={isFlipped ? "Retour à la vue principale" : "Voir l'aperçu"}
                    >
                      {/* Effet de pulse subtil */}
                      <span className="absolute inset-0 bg-blue-100/0 group-hover:bg-blue-100/30 rounded-full transition-all duration-300"></span>
                      {/* Cercle d'animation au clic */}
                      <span className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
                        <span className="absolute inset-0 rounded-full bg-blue-200/0 group-active:bg-blue-200/40 transition-all duration-300 group-active:scale-[2.5] opacity-0 group-active:opacity-100"></span>
                      </span>
                      <Eye className="h-5 w-5" />
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
            <PaymentButton />
          </div>
        </div>
        
        <PaymentCardBack onFlipBack={handleFlip} />
      </div>
    </div>
  );
};

export default PaymentCard;
