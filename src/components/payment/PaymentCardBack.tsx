
import React from 'react';

const PaymentCardBack = () => {
  return (
    <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]">
      <div className="w-full h-full bg-gradient-to-b from-purple-500 to-indigo-600 rounded-2xl overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PaymentCardBack;
