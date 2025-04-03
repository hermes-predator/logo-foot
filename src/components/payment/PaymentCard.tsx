
import React from 'react';
import { Users } from 'lucide-react';
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
    <div className="relative p-6 md:p-8 pb-0 rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white shadow-md hover:shadow-lg transition-all duration-500 ease-out hover:scale-[1.01] hover:border-blue-300">
      <SparkleEffects />
      
      <RecentBuyersBadge count={recentBuyers} />
      
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl md:text-3xl font-extrabold text-black">⦗FRONT-CLOUD⦘~ Football.zip</h3>
        </div>
        <p className="text-gray-600">La plus grande collection de logos de football en haute qualité</p>
      </div>

      <FeatureList />
      <PricingBlock />
      <PaymentButton />
    </div>
  );
};

export default PaymentCard;
