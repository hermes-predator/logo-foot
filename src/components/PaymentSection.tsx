import React from 'react';
import { ShoppingCart, Download } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

declare global {
  interface Window {
    SumUpCard?: {
      mount(options: {
        id: string;
        amount: number;
        currency: string;
        locale: string;
        onResponse: (type: string, body: any) => void;
        publicKey: string;
      }): void;
    };
  }
}

const SUMUP_PUBLIC_KEY = 'VOTRE_CLE_API_ICI';

const PaymentSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/football-resources.zip';
    link.download = '⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎𝐔𝐃⦘~𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePayment = () => {
    if (!window.SumUpCard) {
      toast({
        title: "Erreur",
        description: "Le système de paiement n'est pas chargé. Veuillez réessayer.",
        variant: "destructive"
      });
      return;
    }

    const amount = 49.99;

    window.SumUpCard.mount({
      id: 'sumup-card',
      amount: amount,
      currency: 'EUR',
      locale: 'fr-FR',
      publicKey: SUMUP_PUBLIC_KEY,
      onResponse: (type, body) => {
        switch (type) {
          case 'success':
            toast({
              title: "Paiement réussi !",
              description: "Votre téléchargement va commencer automatiquement.",
            });
            handleDownload();
            break;
          case 'error':
            toast({
              title: "Erreur de paiement",
              description: body.message || "Une erreur est survenue lors du paiement.",
              variant: "destructive"
            });
            break;
          default:
            break;
        }
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
      <p className="text-gray-600 mb-8">
        Accédez instantanément à votre contenu digital après le paiement
      </p>
      <div className="flex flex-col items-center gap-6">
        <Button
          onClick={handlePayment}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Payer {49.99}€
        </Button>
        <div id="sumup-card" className="w-full max-w-md"></div>
        <p className="mt-4 text-sm text-gray-500">
          Paiement sécurisé via SumUp
        </p>
      </div>
    </div>
  );
};

export default PaymentSection;
