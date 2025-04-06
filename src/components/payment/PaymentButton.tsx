
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PaymentButton = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = () => {
    setIsProcessing(true);
    toast({
      title: "Redirection vers le paiement",
      description: "Vous allez être redirigé vers notre page de paiement sécurisée.",
    });
    const returnUrl = `${window.location.origin}/payment-success`;
    // Updated SumUp link
    window.location.href = `https://pay.sumup.com/b2c/QWBH42Z8?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={isProcessing}
      className="w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-700 hover:via-blue-700 hover:to-indigo-800 text-white px-9 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-xl disabled:opacity-75 disabled:cursor-not-allowed border-0 mb-0 relative overflow-hidden"
      aria-label="Payer 8€ avec paiement sécurisé"
    >
      {/* Effet de brillance sur le bouton */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
      
      <div className="flex items-center justify-center relative z-10">
        <div className="bg-white/20 rounded-full p-2 mr-3">
          <ShoppingCart className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <span className="font-semibold tracking-wide text-lg">
          {isProcessing ? "Redirection..." : "Payer 8€"}
        </span>
      </div>
    </Button>
  );
};

export default PaymentButton;
