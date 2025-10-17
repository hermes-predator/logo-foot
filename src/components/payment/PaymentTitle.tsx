import React from 'react';
const PaymentTitle = () => {
  return <div className="text-center mb-6 animate-fade-in">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Prêt à tout recevoir ?</h2>
      <p className="text-gray-700 text-lg mb-6">Recevez notre fichier ZIP instantanément pour <span className="relative inline-block font-bold">
        <span className="relative z-10">seulement 9€</span>
        <span className="absolute bottom-[-2px] left-0 w-full h-3 bg-blue-200/60 -rotate-1 -z-0"></span>
      </span></p>
    </div>;
};
export default PaymentTitle;