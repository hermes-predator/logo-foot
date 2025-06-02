
import React from 'react';

const PricingBlock = () => {
  return (
    <div className="mb-4 sm:mb-6 relative z-10">
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200/50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 relative overflow-hidden">
        {/* Badge "Promotion" avec un espacement réduit */}
        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl shadow-md">
          <span className="tracking-tighter">Promotion</span>
        </div>
        
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl sm:text-3xl font-bold text-gray-900">€9,90</span>
          <span className="text-lg text-gray-500 line-through">€29,90</span>
        </div>
        <p className="text-sm text-gray-600 font-medium">Prix spécial de lancement</p>
      </div>
    </div>
  );
};

export default PricingBlock;
