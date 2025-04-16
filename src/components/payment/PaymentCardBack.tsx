
import React, { useEffect, useRef } from 'react';

const PaymentCardBack = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Make sure video plays when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50/90 to-white rounded-2xl backface-hidden [transform:rotateY(180deg)]">
      <video 
        ref={videoRef}
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
