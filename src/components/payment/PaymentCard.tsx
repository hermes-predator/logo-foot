
import React from 'react';
import { Users, Folder, FileText, Image } from 'lucide-react';
import FeatureList from './FeatureList';
import PaymentButton from './PaymentButton';
import PricingBlock from './PricingBlock';
import SparkleEffects from './SparkleEffects';
import RecentBuyersBadge from './RecentBuyersBadge';

interface PaymentCardProps {
  recentBuyers: number;
}

const PaymentCard = ({ recentBuyers }: PaymentCardProps) => {
  return (
    <div className="relative p-6 md:p-8 pb-0 rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white shadow-md hover:shadow-lg transition-all duration-500 ease-out hover:scale-[1.01] hover:border-blue-300 overflow-hidden">
      {/* Décorations de dossier à l'intérieur de l'offre */}
      <div className="absolute -top-10 right-8 opacity-10 text-blue-900 transform -rotate-12 scale-[1.5]">
        <Folder size={100} />
      </div>
      <div className="absolute top-20 left-10 opacity-10 text-blue-800 transform rotate-6 scale-[0.8]">
        <FileText size={60} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 text-blue-700 transform -rotate-3">
        <Image size={70} />
      </div>
      
      <SparkleEffects />
      
      <RecentBuyersBadge count={recentBuyers} />
      
      <div className="mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl md:text-3xl font-extrabold text-black">⦗FRONT-CLOUD⦘~ Football.zip</h3>
        </div>
        <p className="text-gray-600">La plus grande collection de logos de football en haute qualité</p>
      </div>

      <div className="relative z-10">
        <FeatureList />
        <PricingBlock />
        <PaymentButton />
      </div>
    </div>
  );
};

export default PaymentCard;
