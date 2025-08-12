
import React, { useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";


const PaymentButton = () => {
  const { toast } = useToast();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handlePayment = () => {
    // Changer l'état du bouton
    setIsRedirecting(true);
    
    // Afficher le toast
    toast({
      title: "Redirection vers le paiement",
      description: "Vous allez être redirigé vers la page de paiement sécurisé",
    });
    
    // Rediriger vers la page de paiement dédiée après un délai de 2 secondes
    setTimeout(() => {
      window.location.href = '/payment';
    }, 2000);

    // Remettre le texte original après 2 secondes (au cas où la redirection échouerait)
    setTimeout(() => {
      setIsRedirecting(false);
    }, 2000);
  };

  return (
    <div className="space-y-4 mt-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handlePayment}
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-8 py-6 text-lg rounded-xl border border-emerald-700/40 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 ring-offset-background transition-transform duration-200 active:translate-y-px group"
            aria-label="Procéder au paiement sécurisé de 5€"
          >
            <div className="flex items-center justify-center w-full gap-6 relative z-10">
              <ShoppingCart
                className="h-5 w-5 transition-transform duration-200"
                aria-hidden="true"
              />
              <div className="flex flex-col items-center">
                <span className="text-center font-semibold text-[1.6rem] drop-shadow-sm">
                  {isRedirecting ? "Redirection en cours..." : "Télécharger maintenant (5€)"}
                </span>
              </div>
              <ArrowRight
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="top"
          sideOffset={22}
          className="bg-white border border-gray-200/50 shadow-md p-4 whitespace-nowrap" 
          role="tooltip"
        >
          <p className="text-lg font-medium text-gray-800">
            Accès immédiat après paiement sécurisé
          </p>
        </TooltipContent>
      </Tooltip>
      
      <div className="sr-only">
        Ce bouton vous permet d'acheter et télécharger immédiatement la collection de logos de football pour 5 euros. 
        Après paiement, vous aurez un accès instantané aux fichiers.
      </div>
    </div>
  );
};

export default PaymentButton;
