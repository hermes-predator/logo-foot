import React from 'react';
import { Download } from 'lucide-react';
import { useDownloadCount } from '@/contexts/DownloadCountContext';

const PaymentTrust = () => {
  const downloadCount = useDownloadCount();

  return (
    <div className="flex items-center justify-center mt-4 flex-wrap gap-1.5">
      <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-md">
        <span className="text-xs text-gray-500 font-medium">Paiement sécurisé</span>
        <img 
          src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" 
          alt="SumUp Secure Payment" 
          className="h-4" 
        />
      </div>
  
      <div className="h-0.5 w-0.5 rounded-full bg-gray-300"></div>
      
      <div className="flex items-center px-2 py-1 bg-gray-50 rounded-md">
        <img 
          src="/lovable-uploads/34a0dfdd-f40d-4cc1-bb23-6ad3f96a2281.png" 
          alt="Cartes de paiement acceptées" 
          className="h-8" 
        />
      </div>

      <div className="h-0.5 w-0.5 rounded-full bg-gray-300"></div>
      
      <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-md">
        <Download className="h-3.5 w-3.5 text-gray-500 stroke-[2px]" />
        <span className="text-xs text-gray-500 font-medium">{downloadCount.toLocaleString('fr-FR')} téléchargements</span>
      </div>
    </div>
  );
};

export default PaymentTrust;
