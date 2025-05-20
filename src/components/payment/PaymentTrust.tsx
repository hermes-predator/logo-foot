
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

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
    <div className="flex items-center justify-center mt-6 flex-wrap gap-2">
      <div className="inline-flex items-center gap-2 p-1.5 bg-gradient-to-b from-white to-gray-50/80 rounded-lg border border-gray-100/50 shadow-sm">
        <span className="text-sm text-gray-500 font-medium">Paiement sécurisé</span>
        <img 
          src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" 
          alt="SumUp Secure Payment" 
          className="h-5" 
        />
      </div>
  
      {/* Point décoratif avec une couleur grise plus claire */}
      <div className="flex items-center justify-center">
        <div className="h-1 w-1 rounded-full bg-gray-100 mx-1.5"></div>
      </div>
      
      <div className="flex items-center gap-3 p-1.5 bg-gradient-to-b from-white to-gray-50/80 rounded-lg border border-gray-100/50 shadow-sm">
        <img 
          src="/lovable-uploads/34a0dfdd-f40d-4cc1-bb23-6ad3f96a2281.png" 
          alt="Cartes de paiement acceptées" 
          className="h-12" 
        />
      </div>

      {/* Point décoratif avec une couleur grise plus claire */}
      <div className="flex items-center justify-center">
        <div className="h-1 w-1 rounded-full bg-gray-100 mx-1.5"></div>
      </div>
      
      {/* Compteur de téléchargement évolutif avec style cloud-like */}
      <div className="inline-flex items-center gap-2 p-1.5 bg-gradient-to-b from-white to-gray-50/80 rounded-lg border border-gray-100/50 shadow-sm">
        <div className="bg-gradient-to-b from-white to-blue-50/30 p-1 rounded-full border border-blue-50 shadow-sm">
          <Download className="h-5 w-5 text-gray-600 stroke-[1.75px]" />
        </div>
        <span className="text-sm text-gray-500 font-medium">{downloadCount.toLocaleString('fr-FR')} téléchargements</span>
      </div>
    </div>
  );
};

export default PaymentTrust;
