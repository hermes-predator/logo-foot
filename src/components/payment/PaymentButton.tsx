
import React, { useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import ButtonEffects from './ButtonEffects';

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
            className="w-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-7 text-lg rounded-xl border-b-[3px] border-b-blue-900/70 border-l-[1px] border-l-blue-800/60 border-r-[1px] border-r-blue-800/60 hover:border-b-blue-900/80 hover:border-l-blue-800/70 hover:border-r-blue-800/70 transition-all duration-300 active:border-b-[1px] active:border-b-blue-900/80 active:translate-y-[2px] active:scale-[0.98] group h-22 relative overflow-hidden will-change-transform shadow-lg hover:shadow-xl"
            style={{
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 1px 0 0 rgba(255, 255, 255, 0.08), inset -1px 0 0 rgba(255, 255, 255, 0.08), 0 3px 6px rgba(0, 0, 0, 0.12)',
              filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.2))',
              transition: 'box-shadow 0.3s ease, filter 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.12), inset -1px 0 0 rgba(255, 255, 255, 0.12), 0 4px 8px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.filter = 'drop-shadow(0 3px 6px rgba(59, 130, 246, 0.25))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 1px 0 0 rgba(255, 255, 255, 0.08), inset -1px 0 0 rgba(255, 255, 255, 0.08), 0 3px 6px rgba(0, 0, 0, 0.12)';
              e.currentTarget.style.filter = 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.2))';
            }}
            aria-label="Procéder au paiement sécurisé de 5€"
          >
            <ButtonEffects />
            
            <div className="flex items-center justify-center w-full gap-6 relative z-10">
              <ShoppingCart 
                className="drop-shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
                size={20}
                aria-hidden="true"
                style={{ minWidth: '20px', minHeight: '20px', width: '20px', height: '20px' }}
              />
              <div className="flex flex-col items-center">
                <span className="text-center font-semibold text-[1.6rem] drop-shadow-sm">
                  {isRedirecting ? "Redirection en cours..." : "Télécharger maintenant (5€)"}
                </span>
              </div>
              <ArrowRight 
                className="drop-shadow-sm transition-all duration-300 group-hover:translate-x-1"
                size={20}
                aria-hidden="true"
                style={{ minWidth: '20px', minHeight: '20px', width: '20px', height: '20px' }}
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
