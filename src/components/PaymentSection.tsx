
import React, { useState, useEffect } from 'react';
import PaymentTitle from './payment/PaymentTitle';
import TrustIndicators from './payment/TrustIndicators';
import PaymentCard from './payment/PaymentCard';
import PaymentTrust from './payment/PaymentTrust';

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
    <div className="max-w-5xl mx-auto px-4 py-6">
      <PaymentTitle />
      <TrustIndicators />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <PaymentCard recentBuyers={recentBuyers} />
          <PaymentTrust />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
