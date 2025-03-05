import React, { useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
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

const SUMUP_PUBLIC_KEY = 'sup_pk_53jNVfzo9iiJGW6HwEMRT7HC161Xe4PFD';

const PaymentSection = () => {
  useEffect(() => {
    if (!window.SumUpCard) {
      console.error("SumUp SDK n'est pas chargé");
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/football-resources.zip';
    link.download = '⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎𝐔𝐃⦘~𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePayment = () => {
    console.log("Tentative de paiement...");
    if (!window.SumUpCard) {
      toast({
        title: "Erreur",
        description: "Le système de paiement n'est pas chargé. Veuillez réessayer.",
        variant: "destructive"
      });
      return;
    }

    const amount = 20.00;

    try {
      window.SumUpCard.mount({
        id: 'sumup-card',
        amount: amount,
        currency: 'EUR',
        locale: 'fr-FR',
        publicKey: SUMUP_PUBLIC_KEY,
        onResponse: (type, body) => {
          console.log("Réponse SumUp:", type, body);
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
    } catch (error) {
      console.error("Erreur lors du montage de SumUp:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'initialisation du paiement.",
        variant: "destructive"
      });
    }
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
          Payer {20.00}€
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
