import React from 'react';
import { ShoppingCart, Download, Shield, Wallet, ShieldCheck, HandHeart, CheckCheck, FileArchive } from 'lucide-react';
import { Button } from './ui/button';

const PaymentSection = () => {
  const handlePayment = () => {
    const returnUrl = `${window.location.origin}/payment-success`;
    window.location.href = `https://pay.sumup.com/b2c/QF5AA1SQ?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Prêt à tout recevoir ?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Recevez-le instantanément après paiement
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-blue-100">
          <ShieldCheck className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-medium mb-1 text-sm">Paiement Sécurisé</h3>
          <p className="text-xs text-gray-600 text-center">Transactions protégées via SumUp</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-blue-100">
          <HandHeart className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-medium mb-1 text-sm">Support Réactif</h3>
          <p className="text-xs text-gray-600 text-center">Une équipe à votre écoute</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-blue-100">
          <CheckCheck className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-medium mb-1 text-sm">Réception immédiate</h3>
          <p className="text-xs text-gray-600 text-center">Page d'après-paiement</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <div className="relative p-8 md:p-10 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
              Pack Complet
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-6 mt-6">⦗FRONT-CLOUD⦘~ Football.zip</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <FileArchive className="h-5 w-5 mr-3 text-blue-500" />
                Fichier de + de 8 600 ressources
              </li>
              <li className="flex items-center text-gray-600">
                <Download className="h-5 w-5 mr-3 text-blue-500" />
                Téléchargement instantané
              </li>
              <li className="flex items-center text-gray-600">
                <Wallet className="h-5 w-5 mr-3 text-blue-500" />
                Prix accessible
              </li>
            </ul>
            <div className="mb-6">
              <span className="text-3xl md:text-4xl font-bold">20,00€</span>
              <span className="text-gray-500 ml-2">TVA incluse</span>
            </div>
            <Button
              onClick={handlePayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Payer 20,00€
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-base text-gray-500 flex items-center justify-center gap-2">
          <Shield className="h-4 w-4" />
          Paiement sécurisé via SumUp
        </p>
      </div>
    </div>
  );
};

export default PaymentSection;
