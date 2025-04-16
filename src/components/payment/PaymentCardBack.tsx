
import React from 'react';
import { Download } from 'lucide-react';

const PaymentCardBack = () => {
  const [downloadCount, setDownloadCount] = React.useState(25287);

  return (
    <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]">
      <div className="w-full h-full bg-gradient-to-b from-purple-500 to-indigo-600 rounded-2xl overflow-hidden relative">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos.
        </video>
      </div>
    </div>
  );
};

export default PaymentCardBack;
