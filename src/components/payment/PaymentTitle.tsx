import React from 'react';

const PaymentTitle = () => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 tracking-tight">
        Prêt à tout recevoir ?
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Recevez notre fichier ZIP instantanément après paiement
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
