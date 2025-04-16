
import React, { useState } from 'react';
import { Users, Folder, Eye, Download } from 'lucide-react';
import FeatureList from './FeatureList';
import PaymentButton from './PaymentButton';
import PricingBlock from './PricingBlock';
import SparkleEffects from './SparkleEffects';
import RecentBuyersBadge from './RecentBuyersBadge';
import GoogleDriveBadge from './GoogleDriveBadge';
import PaymentCardBack from './PaymentCardBack';
import { measurePerformance } from '@/lib/performance';
import { useIsSmallMobile } from '@/hooks/use-mobile';

interface PaymentCardProps {
  recentBuyers: number;
}

const PaymentCard = ({ recentBuyers }: PaymentCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [downloadCount, setDownloadCount] = React.useState(25287);
  
  React.useEffect(() => {
    measurePerformance('payment-card-render', () => {
      // Simplement mesurer le temps de rendu
    });
  }, []);

  const isSmallMobile = useIsSmallMobile();

  return (
    <div className="relative perspective-1000 w-full h-full">
      <button 
        onClick={() => setIsFlipped(prev => !prev)}
        className="absolute top-4 right-4 z-20 text-gray-600 hover:text-gray-800 transition-colors"
        aria-label="Retourner la carte"
      >
        <Eye size={24} />
      </button>

      <div 
        className={`relative transform-style-3d transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''} w-full h-full`}
      >
        {/* Front of the card */}
        <div className="relative p-3 sm:p-5 md:p-7 pb-0 rounded-2xl bg-gradient-to-b from-blue-50/90 to-white border border-blue-100/60 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.005] will-change-transform backface-hidden">
          <div className="absolute top-14 right-5 opacity-10 text-blue-900 transform -rotate-12 hidden sm:block">
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
            
            {/* Payment trust indicators */}
            <div className="bg-white/90 rounded-lg p-4 space-y-4 backdrop-blur-sm shadow-md mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Paiement sécurisé via</span>
                  <img 
                    src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" 
                    alt="SumUp Secure Payment" 
                    className="h-5 pointer-events-auto" 
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/34a0dfdd-f40d-4cc1-bb23-6ad3f96a2281.png" 
                  alt="Cartes de paiement acceptées" 
                  className="h-10 pointer-events-auto" 
                />
              </div>
              
              {/* Compteur de téléchargement */}
              <div className="flex items-center justify-center gap-2 p-1.5 bg-blue-50 rounded-lg">
                <Download className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-600 font-medium">{downloadCount.toLocaleString('fr-FR')} téléchargements</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <PaymentCardBack />
      </div>
    </div>
  );
};

export default PaymentCard;
