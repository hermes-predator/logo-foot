
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

interface PaymentCardProps {
  recentBuyers: number;
}

const PaymentCard = ({ recentBuyers }: PaymentCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Utilisation de la fonction de mesure de performance
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
      <div className={`relative transform-style-3d transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="relative backface-hidden p-3 sm:p-5 md:p-7 pb-0 rounded-2xl bg-gradient-to-b from-blue-50/90 to-white border border-blue-100/60 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.005] will-change-transform">
          {/* Bouton œil/retour dans le coin supérieur droit */}
          <button 
            onClick={handleFlip}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors duration-300 shadow-sm hover:shadow-md"
            aria-label={isFlipped ? "Retour à la vue principale" : "Voir l'aperçu"}
          >
            <Eye className="w-5 h-5 text-blue-600" />
          </button>
          
          {/* Dossier décoratif dans le coin supérieur droit - position fixe pour réduire les calculs */}
          <div className="absolute top-14 right-10 opacity-10 text-blue-900 transform -rotate-12 hidden sm:block">
            <Folder size={75} />
          </div>
          
          <SparkleEffects />
          <RecentBuyersBadge count={recentBuyers} />
          
          <div className="mb-3 sm:mb-4 relative z-10 mt-0">
            <div className="flex items-center gap-2">
              <h3 className={`${isSmallMobile ? "text-xl" : "text-2xl md:text-3xl"} font-extrabold text-black/90`}>⦗FRONT-CLOUD⦘~ Football.zip</h3>
            </div>
            <p className={`text-gray-600 mt-0 ${isSmallMobile ? "text-sm" : "font-medium"}`}>La plus grande collection de logos de football en haute qualité</p>
            
            {/* Google Drive Badge déplacé ici, avec plus d'espace */}
            <div className="mt-3">
              <GoogleDriveBadge />
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
