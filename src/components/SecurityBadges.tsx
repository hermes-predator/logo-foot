
import React from 'react';
import { Lock, ShieldCheck, CreditCard } from 'lucide-react';

const SecurityBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm">
        <Lock className="w-5 h-5 text-purple-600" />
        <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
      </div>
      
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm">
        <CreditCard className="w-5 h-5 text-purple-600" />
        <span className="text-sm font-medium text-gray-700">Transaction Cryptée</span>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm">
        <ShieldCheck className="w-5 h-5 text-purple-600" />
        <span className="text-sm font-medium text-gray-700">SumUp Vérifié</span>
      </div>
    </div>
  );
};

export default SecurityBadges;
