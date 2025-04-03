
import React from 'react';

const PaymentTrust = () => {
  return (
    <div className="flex items-center justify-center mt-6 flex-wrap gap-2">
      <div className="inline-flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg border border-gray-100">
        <span className="text-sm text-gray-700 font-medium">Paiement sécurisé</span>
        <img 
          src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" 
          alt="SumUp Secure Payment" 
          className="h-5" 
        />
      </div>
  
      {/* Point décoratif avec une couleur grise plus claire */}
      <div className="flex items-center justify-center">
        <div className="h-1 w-1 rounded-full bg-gray-300 mx-1.5"></div>
      </div>
      
      <div className="flex items-center gap-3 p-1.5 bg-gray-50 rounded-lg border border-gray-100">
        <img 
          src="/lovable-uploads/34a0dfdd-f40d-4cc1-bb23-6ad3f96a2281.png" 
          alt="Cartes de paiement acceptées" 
          className="h-12" 
        />
      </div>
    </div>
  );
};

export default PaymentTrust;
