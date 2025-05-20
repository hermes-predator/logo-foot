
import React, { useState, useEffect } from 'react';
import { Download, ShieldCheck } from 'lucide-react';

const PaymentTrust = () => {
  const [downloadCount, setDownloadCount] = useState(25287);
  
  // Effet pour augmenter progressivement le nombre de téléchargements
  useEffect(() => {
    // Intervalle pour augmenter progressivement le nombre
    const interval = setInterval(() => {
      setDownloadCount(prevCount => {
        // Augmenter de 1 toutes les quelques minutes
        return prevCount + 1;
      });
    }, 3 * 60 * 1000); // Augmente toutes les 3 minutes
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center mt-6 flex-wrap gap-3">
      <div className="inline-flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200/80">
        <ShieldCheck className="h-5 w-5 text-gray-600 stroke-[1.75px]" />
        <span className="text-sm text-gray-700 font-medium">Paiement sécurisé</span>
        <img 
          src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" 
          alt="SumUp Secure Payment" 
          className="h-5" 
        />
      </div>
      
      <div className="inline-flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200/80">
        <img 
          src="/lovable-uploads/34a0dfdd-f40d-4cc1-bb23-6ad3f96a2281.png" 
          alt="Cartes de paiement acceptées" 
          className="h-10" 
        />
      </div>
      
      {/* Compteur de téléchargement avec style cohérent */}
      <div className="inline-flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200/80">
        <Download className="h-5 w-5 text-gray-600 stroke-[1.75px]" />
        <span className="text-sm text-gray-700 font-medium">{downloadCount.toLocaleString('fr-FR')} téléchargements</span>
      </div>
    </div>
  );
};

export default PaymentTrust;
