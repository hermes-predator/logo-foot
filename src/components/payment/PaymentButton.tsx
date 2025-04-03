
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
      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-xl active:scale-95 group disabled:opacity-75 disabled:cursor-not-allowed border-0 mb-0 relative overflow-hidden"
      aria-label="Payer 10€ avec paiement sécurisé"
    >
      {/* Effet de brillance sur le bouton */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
      
      <ShoppingCart className="mr-2 h-8 w-8 transition-all duration-300 group-hover:rotate-[-8deg]" aria-hidden="true" />
      {isProcessing ? "Redirection..." : "Payer 10€"}
    </Button>
  );
};

export default PaymentButton;
