
import React from 'react';
import PaymentTitle from './payment/PaymentTitle';
import TrustIndicators from './payment/TrustIndicators';
import PaymentCard from './payment/PaymentCard';
import PaymentTrust from './payment/PaymentTrust';

const PaymentSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <PaymentTitle />
      <TrustIndicators />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <PaymentCard />
          <PaymentTrust />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
