
import React from 'react';
import { Download } from 'lucide-react';

const PaymentCardBack = () => {
  const [downloadCount, setDownloadCount] = React.useState(25287);

  return (
    <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]">
      <div className="w-full h-full bg-gradient-to-b from-purple-500 to-indigo-600 rounded-2xl overflow-hidden relative p-6 flex flex-col justify-between">
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

        {/* Content overlay */}
        <div className="relative z-10 flex-1 flex flex-col justify-end">
          {/* Payment trust indicators */}
          <div className="bg-white/90 rounded-lg p-4 space-y-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Paiement sécurisé via</span>
                <img 
                  src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" 
                  alt="SumUp Secure Payment" 
                  className="h-5 pointer-events-auto" 
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/34a0dfdd-f40d-4cc1-bb23-6ad3f96a2281.png" 
                alt="Cartes de paiement acceptées" 
                className="h-10 pointer-events-auto" 
              />
            </div>
            
            {/* Compteur de téléchargement */}
            <div className="flex items-center justify-center gap-2 p-1.5 bg-blue-50 rounded-lg">
              <Download className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">{downloadCount.toLocaleString('fr-FR')} téléchargements</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCardBack;
