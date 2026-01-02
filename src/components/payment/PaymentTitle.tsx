import React from 'react';

const PaymentTitle = () => {
  return (
    <div className="text-center mb-6 sm:mb-10 animate-fade-in">
      <h2 className="text-2xl sm:text-4xl font-bold mb-1 text-gray-900">Prêt à tout recevoir ?</h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-8 sm:mb-16 px-2">
        Recevez notre fichier ZIP instantanément pour{' '}
        <span className="relative inline-block font-bold text-xs sm:text-base">
          <span className="relative z-10">seulement 8€</span>
          <span 
            className="absolute bottom-[-2px] left-0 h-2 sm:h-3 bg-blue-200/60 -rotate-1 -z-0"
            style={{
              animation: 'highlight-draw 5s ease-in-out infinite',
            }}
          />
        </span>
      </p>
      <style>{`
        @keyframes highlight-draw {
          0%, 100% { width: 0%; }
          20%, 80% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default PaymentTitle;