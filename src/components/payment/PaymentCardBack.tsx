
import React from 'react';

const PaymentCardBack = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white rounded-2xl backface-hidden [transform:rotateY(180deg)]">
      <video 
        className="w-full h-full object-cover rounded-2xl"
        src="/lovable-uploads/front-cloud-preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default PaymentCardBack;
