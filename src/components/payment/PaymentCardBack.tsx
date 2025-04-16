
import React from 'react';

const PaymentCardBack = () => {
  return (
    <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]">
      <video 
        className="w-full h-full object-cover rounded-2xl"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default PaymentCardBack;
