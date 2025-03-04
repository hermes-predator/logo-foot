
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

const PaymentSection = () => {
  const handlePayment = () => {
    // Intégration SumUp à implémenter
    console.log('Initialisation du paiement SumUp');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
      <p className="text-gray-600 mb-8">
        Accédez instantanément à votre contenu digital après le paiement
      </p>
      <Button
        onClick={handlePayment}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Acheter maintenant
      </Button>
      <p className="mt-4 text-sm text-gray-500">
        Paiement sécurisé via SumUp
      </p>
    </div>
  );
};

export default PaymentSection;
