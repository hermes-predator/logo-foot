
import React, { useState, lazy, Suspense } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

// Importation paresseuse (lazy) des effets pour ne pas bloquer le rendu initial
const ButtonEffects = lazy(() => import('./ButtonEffects'));

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
    // Nouveau lien SumUp pour les tests
    window.location.href = `https://pay.sumup.com/b2c/QXZTSY3T?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="space-y-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-6 text-lg rounded-lg shadow-md border-b-[3px] border-blue-800/70 hover:shadow-lg transition-all duration-300 active:border-b-0 active:translate-y-0.5 active:scale-[0.99] group h-20 relative overflow-hidden will-change-transform"
              aria-label="Payer 8€ avec paiement sécurisé"
            >
              {/* Effet de brillance optimisé - chargé paresseusement */}
              <Suspense fallback={null}>
                <ButtonEffects />
              </Suspense>
              
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
          <TooltipContent side="top" className="bg-white border border-gray-200/70 shadow-md p-3 whitespace-nowrap">
            <p className="text-sm font-medium text-gray-800">Accès immédiat en page d'après-paiement</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default PaymentButton;
