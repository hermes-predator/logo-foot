import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';

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
        merchantCode: string;
        showAmount?: boolean;
        description?: string;
      }): void;
    };
  }
}

const SUPABASE_FUNCTION_URL = 'https://votre-projet.supabase.co/functions/v1/handle-payment'
const SUMUP_PUBLIC_KEY = 'sup_pk_53jNVfzo9iiJGW6HwEMRT7HC161Xe4PFD'
const MERCHANT_CODE = 'MLMLFVAH'

const PaymentSection = () => {
  const [isProcessing, setIsProcessing] = useState(false);

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

  const handlePayment = async () => {
    if (!window.SumUpCard) {
      toast({
        title: "Erreur",
        description: "Le système de paiement n'est pas chargé. Veuillez réessayer.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch(SUPABASE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 20.00,
          currency: 'EUR',
          description: 'Pack Football Resources',
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'initialisation du paiement");
      }

      const checkoutData = await response.json();
      
      window.SumUpCard.mount({
        id: 'sumup-card',
        amount: 20.00,
        currency: 'EUR',
        locale: 'fr-FR',
        publicKey: SUMUP_PUBLIC_KEY,
        merchantCode: MERCHANT_CODE,
        showAmount: true,
        description: 'Pack Football Resources',
        onResponse: (type, body) => {
          setIsProcessing(false);
          
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
            case 'abort':
              toast({
                title: "Paiement annulé",
                description: "Vous avez annulé le paiement.",
                variant: "destructive"
              });
              break;
            case 'sent':
              console.log("Informations de carte envoyées", body);
              break;
            default:
              console.log("Type de réponse non géré:", type);
          }
        },
      });
    } catch (error) {
      setIsProcessing(false);
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
          disabled={isProcessing}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          {isProcessing ? "Traitement en cours..." : `Payer ${20.00}€`}
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
