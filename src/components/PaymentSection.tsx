import React, { useEffect, useState } from 'react';
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
        merchantCode: string;
        showAmount?: boolean;
        description?: string;
        checkout?: {
          id: string;
          status: string;
        };
      }): void;
    };
  }
}

const SUMUP_PUBLIC_KEY = 'sup_pk_53jNVfzo9iiJGW6HwEMRT7HC161Xe4PFD';
const MERCHANT_CODE = 'MLMLFVAH';

const PaymentSection = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);

  useEffect(() => {
    if (!window.SumUpCard) {
      console.error("SumUp SDK n'est pas chargé");
    }

    // Initialiser le checkout au chargement
    createCheckout();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/football-resources.zip';
    link.download = '⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎𝐔𝐃⦘~𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const createCheckout = async () => {
    try {
      const response = await fetch('https://api.sumup.com/v0.1/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUMUP_PUBLIC_KEY}`,
        },
        body: JSON.stringify({
          checkout_reference: `order_${Date.now()}`,
          amount: 20.00,
          currency: 'EUR',
          merchant_code: MERCHANT_CODE,
          description: 'Pack Football Resources',
          pay_to_email: 'your-sumup-email@example.com', // Remplacez par votre email SumUp
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création du checkout');
      }

      const data = await response.json();
      console.log("Checkout créé:", data);
      setCheckoutId(data.id);
      return data.id;
    } catch (error) {
      console.error("Erreur lors de la création du checkout:", error);
      toast({
        title: "Erreur d'initialisation",
        description: "Impossible d'initialiser le paiement. Veuillez réessayer.",
        variant: "destructive"
      });
      return null;
    }
  };

  const handlePayment = async () => {
    console.log("Tentative de paiement...");
    if (!window.SumUpCard) {
      toast({
        title: "Erreur",
        description: "Le système de paiement n'est pas chargé. Veuillez réessayer.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // S'assurer d'avoir un checkout ID
    const currentCheckoutId = checkoutId || await createCheckout();
    if (!currentCheckoutId) {
      setIsProcessing(false);
      return;
    }

    window.SumUpCard.mount({
      id: 'sumup-card',
      amount: 20.00,
      currency: 'EUR',
      locale: 'fr-FR',
      publicKey: SUMUP_PUBLIC_KEY,
      merchantCode: MERCHANT_CODE,
      showAmount: true,
      description: 'Pack Football Resources',
      checkout: {
        id: currentCheckoutId,
        status: 'PENDING'
      },
      onResponse: (type, body) => {
        console.log("Réponse SumUp:", type, body);
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
            // Réinitialiser le checkout en cas d'erreur
            createCheckout();
            break;
          case 'abort':
            toast({
              title: "Paiement annulé",
              description: "Vous avez annulé le paiement.",
              variant: "destructive"
            });
            // Réinitialiser le checkout en cas d'annulation
            createCheckout();
            break;
          case 'sent':
            console.log("Informations de carte envoyées", body);
            break;
          default:
            console.log("Type de réponse non géré:", type);
            break;
        }
      },
    });
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
