
import React, { useState, useEffect } from 'react';
import PaymentTitle from './payment/PaymentTitle';
import TrustIndicators from './payment/TrustIndicators';
import PaymentCard from './payment/PaymentCard';
import PaymentTrust from './payment/PaymentTrust';
import { Folder, FileText, Image } from 'lucide-react';

const PaymentSection = () => {
  const [recentBuyers, setRecentBuyers] = useState(0);

  // Simuler un nombre aléatoire de personnes ayant récemment acheté
  useEffect(() => {
    const minBuyers = 70;
    const maxBuyers = 85;
    const randomBuyers = Math.floor(Math.random() * (maxBuyers - minBuyers + 1)) + minBuyers;
    setRecentBuyers(randomBuyers);
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 relative">
      {/* Décorations de dossier en arrière-plan */}
      <div className="absolute -top-6 right-10 opacity-10 text-blue-900 transform -rotate-12 scale-[1.5] hidden md:block">
        <Folder size={100} />
      </div>
      <div className="absolute top-12 left-4 opacity-10 text-blue-800 transform rotate-6 scale-[0.8] hidden md:block">
        <FileText size={60} />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10 text-blue-700 transform -rotate-3 hidden md:block">
        <Image size={70} />
      </div>
      
      <PaymentTitle />
      <TrustIndicators />

      <div className="grid md:grid-cols-3 gap-6 relative z-10">
        <div className="md:col-span-3">
          <PaymentCard recentBuyers={recentBuyers} />
          <PaymentTrust />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
