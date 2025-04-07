
import React, { useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const PaymentButton = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [fullName, setFullName] = useState('');
  const { toast } = useToast();

  const handlePayment = () => {
    // Validate name first
    if (!fullName || fullName.trim().length < 3) {
      toast({
        title: "Nom invalide",
        description: "Veuillez entrer votre nom complet pour recevoir votre produit.",
        variant: "destructive",
      });
      return;
    }
    
    // Store name in localStorage
    localStorage.setItem('customer_name', fullName);
    
    setIsProcessing(true);
    toast({
      title: "Redirection vers le paiement",
      description: "Vous allez être redirigé vers notre page de paiement sécurisée.",
    });
    
    const returnUrl = `${window.location.origin}/payment-success?name=${encodeURIComponent(fullName)}`;
    // Nouveau lien SumUp pour les tests
    window.location.href = `https://pay.sumup.com/b2c/QXZTSY3T?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="customer-name" className="font-medium text-gray-700">
            Votre nom complet pour générer votre ticket
          </label>
        </div>
        <Input
          id="customer-name"
          type="text"
          placeholder="Jean Dupont"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="bg-white border-blue-200 focus:border-blue-400"
          required
        />
      </div>
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-6 text-lg rounded-lg shadow-md border-b-[3px] border-blue-800 hover:shadow-lg transition-all duration-300 active:border-b-0 active:translate-y-0.5 active:scale-[0.99] group h-20 relative overflow-hidden"
              aria-label="Payer 8€ avec paiement sécurisé"
            >
              {/* Effet de brillance sur le bouton */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2.5s_ease-in-out_infinite] z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent animate-[shine_3.5s_ease-in-out_infinite_1s] z-0"></div>
              </div>
              
              <div className="flex items-center justify-center w-full gap-4 relative z-10">
                <ShoppingCart className="h-10 w-10 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
                <div className="flex flex-col items-center">
                  <span className="text-center font-semibold text-2xl">
                    {isProcessing ? "Redirection..." : "Télécharger maintenant (8€)"}
                  </span>
                </div>
                <ArrowRight className="h-9 w-9 transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-2" />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="bg-white/95 border border-gray-200 shadow-md p-3 whitespace-nowrap">
            <p className="text-sm font-medium text-gray-800">Accès immédiat en page d'après-paiement</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default PaymentButton;
