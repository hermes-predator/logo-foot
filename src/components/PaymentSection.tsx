import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

const PaymentSection = () => {
  const handlePayment = () => {
    const returnUrl = `${window.location.origin}/payment-success`;
    window.location.href = `https://pay.sumup.com/b2c/QO1S2N88?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Prêt à tout recevoir ?</h2>
      <p className="text-gray-600 mb-8">
        Accédez instantanément à ce contenu digital de haute valeur après paiement
      </p>
      <div className="flex flex-col items-center gap-6">
        <Button
          onClick={handlePayment}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Payer 20,00€
        </Button>
        <p className="mt-4 text-sm text-gray-500">
          Paiement sécurisé via SumUp
        </p>
      </div>
    </div>
  );
};

export default PaymentSection;
