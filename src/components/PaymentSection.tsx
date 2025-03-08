
import React from 'react';
import { ShoppingCart, CreditCard, Download, Shield } from 'lucide-react';
import { Button } from './ui/button';

const PaymentSection = () => {
  const handlePayment = () => {
    const returnUrl = `${window.location.origin}/payment-success`;
    window.location.href = `https://pay.sumup.com/b2c/Q1XS12DX?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Prêt à télécharger votre pack ?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Accédez instantanément à plus de 8 600 logos de haute qualité
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative p-8 rounded-2xl border border-purple-100 bg-gradient-to-b from-purple-50/50 to-white shadow-sm hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 bg-purple-100 text-purple-700 px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
            Pack Standard
          </div>
          <h3 className="text-2xl font-bold mb-4 mt-6">Accès Unique</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-600">
              <Shield className="h-5 w-5 mr-2 text-purple-500" />
              Téléchargement sécurisé
            </li>
            <li className="flex items-center text-gray-600">
              <Download className="h-5 w-5 mr-2 text-purple-500" />
              Accès instantané
            </li>
          </ul>
          <div className="mb-6">
            <span className="text-3xl font-bold">20,00€</span>
            <span className="text-gray-500 ml-2">TVA incluse</span>
          </div>
          <Button
            onClick={handlePayment}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Acheter Maintenant
          </Button>
        </div>

        <div className="relative p-8 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white shadow-sm hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
            Pack Pro
          </div>
          <h3 className="text-2xl font-bold mb-4 mt-6">Licence Commerciale</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-600">
              <Shield className="h-5 w-5 mr-2 text-blue-500" />
              Utilisation commerciale
            </li>
            <li className="flex items-center text-gray-600">
              <Download className="h-5 w-5 mr-2 text-blue-500" />
              Mises à jour gratuites
            </li>
          </ul>
          <div className="mb-6">
            <span className="text-3xl font-bold">39,00€</span>
            <span className="text-gray-500 ml-2">TVA incluse</span>
          </div>
          <Button
            onClick={handlePayment}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Acheter la Licence Pro
          </Button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <Shield className="h-4 w-4" />
          Paiement sécurisé via SumUp
        </p>
      </div>
    </div>
  );
};

export default PaymentSection;
