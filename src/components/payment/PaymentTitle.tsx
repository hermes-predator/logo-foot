import React from 'react';

const PaymentTitle = () => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 tracking-tight">
        Prêt à tout recevoir ?
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Recevez notre fichier ZIP instantanément pour{' '}
        <span className="relative inline-block font-bold text-navy">
          <span className="relative z-10">seulement 8€</span>
          <span 
            className="absolute bottom-0 left-0 h-3 bg-lime-300/60 -rotate-1 -z-0"
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
