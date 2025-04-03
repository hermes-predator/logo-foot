
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
      {/* Dossier décoratif dans le coin supérieur droit - position ajustée */}
      <div className="absolute top-10 right-8 opacity-10 text-blue-900 transform -rotate-12">
        <Folder size={80} />
      </div>
      
      {/* Élément fichier texte dans l'arrière-plan gauche - position ajustée */}
      <div className="absolute top-1/2 -left-6 opacity-8 text-blue-800 transform rotate-12">
        <FileText size={60} />
      </div>
      
      {/* Élément image en bas à droite - position ajustée */}
      <div className="absolute -bottom-6 right-1/3 opacity-8 text-blue-700 transform -rotate-6">
        <Image size={70} />
      </div>
      
      {/* Élément fichier texte supplémentaire en bas à gauche - position ajustée */}
      <div className="absolute bottom-10 left-6 opacity-10 text-blue-600 transform rotate-345">
        <FileText size={50} />
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
