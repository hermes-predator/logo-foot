
import React, { useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ButtonEffects from './ButtonEffects';

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
    // Nouveau lien SumUp mis à jour
    window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="space-y-4 mt-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white px-5 py-6 text-lg rounded-xl border-2 border-blue-400/60 hover:border-blue-300/70 border-b-[3px] border-b-blue-900/70 hover:border-b-blue-950/80 transition-all duration-300 active:border-b-[1px] active:border-b-blue-900/80 active:translate-y-[2px] active:scale-[0.98] group h-20 relative overflow-hidden will-change-transform shadow-lg hover:shadow-xl"
            style={{
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 2px 0 0 rgba(255, 255, 255, 0.15), inset -2px 0 0 rgba(255, 255, 255, 0.15), 0 3px 6px rgba(0, 0, 0, 0.12)',
              filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.2))'
            }}
            aria-label={isProcessing ? "Traitement en cours, veuillez patienter" : "Payer 9€ avec paiement sécurisé"}
            aria-live="polite"
            aria-busy={isProcessing}
            aria-disabled={isProcessing}
            aria-describedby="payment-button-description"
          >
            {/* Effet de brillance - maintenant importé directement sans lazy loading */}
            <ButtonEffects />
            
            <div className="flex items-center justify-center w-full gap-4 relative z-10">
              <ShoppingCart 
                className="h-10 w-10 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 drop-shadow-sm"
                aria-hidden="true"
              />
              <div className="flex flex-col items-center">
                <span className="text-center font-semibold text-2xl drop-shadow-sm" id="payment-button-description">
                  {isProcessing ? "Redirection..." : "Télécharger maintenant (9€)"}
                </span>
              </div>
              <ArrowRight 
                className="h-9 w-9 transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-2 drop-shadow-sm"
                aria-hidden="true"
              />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-white border border-gray-200/50 shadow-md p-4 whitespace-nowrap" 
          role="tooltip"
        >
          <p className="text-lg font-medium text-gray-800">Accès immédiat en page d'après-paiement</p>
        </TooltipContent>
      </Tooltip>
      <div className="sr-only">
        Ce bouton vous permet d'acheter et télécharger immédiatement la collection de logos de football pour 9 euros. 
        Après paiement, vous aurez un accès instantané aux fichiers.
      </div>
    </div>
  );
};

export default PaymentButton;
