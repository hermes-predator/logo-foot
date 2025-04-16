
import React, { useState } from 'react';
import { Eye, Folder } from 'lucide-react';
import FeatureList from './FeatureList';
import PaymentButton from './PaymentButton';
import PricingBlock from './PricingBlock';
import SparkleEffects from './SparkleEffects';
import RecentBuyersBadge from './RecentBuyersBadge';
import GoogleDriveBadge from './GoogleDriveBadge';
import PaymentCardBack from './PaymentCardBack';
import { Button } from "@/components/ui/button";
import { measurePerformance } from '@/lib/performance';
import { useIsSmallMobile } from '@/hooks/use-mobile';

interface PaymentCardProps {
  recentBuyers: number;
}

const PaymentCard = ({ recentBuyers }: PaymentCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isSmallMobile = useIsSmallMobile();

  React.useEffect(() => {
    measurePerformance('payment-card-render', () => {
      // Simplement mesurer le temps de rendu
    });
  }, []);

  return (
    <div className="relative perspective-1000">
      <div
        className={`relative transition-transform duration-700 transform-style-3d ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Face avant */}
        <div className="relative p-3 sm:p-5 md:p-7 pb-0 rounded-2xl bg-gradient-to-b from-blue-50/90 to-white border border-blue-100/60 shadow-lg hover:shadow-xl transition-all duration-300 ease-out will-change-transform backface-hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 hover:bg-blue-50/80"
            onClick={() => setIsFlipped(true)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          {/* Dossier décoratif dans le coin supérieur droit */}
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

        {/* Face arrière */}
        <PaymentCardBack onClose={() => setIsFlipped(false)} />
      </div>
    </div>
  );
};

export default PaymentCard;
