
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ButtonEffects from './ButtonEffects';

// Types pour le widget SumUp
declare global {
  interface Window {
    SumUpCard: {
      mount: (config: {
        id: string;
        checkoutId: string;
        onResponse: (type: string, body: any) => void;
        onLoad?: () => void;
        showSubmitButton?: boolean;
        amount?: string;
        currency?: string;
        locale?: string;
      }) => {
        submit: () => void;
        unmount: () => void;
        update: (config: any) => void;
      };
    };
  }
}

const PaymentButton = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [widgetMounted, setWidgetMounted] = useState(false);
  const { toast } = useToast();
  const sumupCardRef = useRef<any>(null);
  const scriptLoadedRef = useRef(false);

  // Charger le script SumUp
  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js';
    script.async = true;
    script.onload = () => {
      console.log('Script SumUp chargé avec succès');
      scriptLoadedRef.current = true;
    };
    script.onerror = () => {
      console.error('Erreur lors du chargement du script SumUp');
      toast({
        title: "Erreur de chargement",
        description: "Impossible de charger le système de paiement. Veuillez réessayer.",
        variant: "destructive"
      });
    };
    
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [toast]);

  // Créer un checkout SumUp
  const createCheckout = async () => {
    setIsCreatingCheckout(true);
    
    try {
      // IMPORTANT: Vous devez remplacer cette partie par votre API
      // ou créer un checkout via l'API SumUp côté serveur
      const response = await fetch('https://api.sumup.com/v0.1/checkouts', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // À configurer
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          checkout_reference: `FC-${Date.now()}`,
          amount: 9.00,
          currency: 'EUR',
          description: '⦗FRONT-CLOUD⦘~ Football.zip - Collection de logos de football',
          return_url: window.location.origin + '/payment-success-token13061995'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création du checkout');
      }

      const data = await response.json();
      setCheckoutId(data.id);
      
      toast({
        title: "Paiement initialisé",
        description: "Vous pouvez maintenant procéder au paiement.",
      });

    } catch (error) {
      console.error('Erreur création checkout:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'initialiser the paiement. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsCreatingCheckout(false);
    }
  };

  // Monter le widget SumUp
  const mountWidget = () => {
    if (!window.SumUpCard || !checkoutId || widgetMounted) return;

    try {
      sumupCardRef.current = window.SumUpCard.mount({
        id: 'sumup-card-widget',
        checkoutId: checkoutId,
        amount: '9.00',
        currency: 'EUR',
        locale: 'fr-FR',
        showSubmitButton: false, // On utilise notre propre bouton
        onResponse: (type: string, body: any) => {
          console.log('SumUp Response:', type, body);
          
          switch (type) {
            case 'success':
              // Redirection vers la page de succès avec le checkout_id
              window.location.href = `/payment-success-token13061995?checkout_id=${checkoutId}`;
              break;
              
            case 'error':
              setIsProcessing(false);
              toast({
                title: "Erreur de paiement",
                description: "Une erreur est survenue lors du paiement. Veuillez réessayer.",
                variant: "destructive"
              });
              break;
              
            case 'fail':
              setIsProcessing(false);
              toast({
                title: "Paiement annulé",
                description: "Le paiement a été annulé.",
                variant: "destructive"
              });
              break;

            case 'sent':
              setIsProcessing(true);
              toast({
                title: "Paiement en cours",
                description: "Votre paiement est en cours de traitement...",
              });
              break;
          }
        },
        onLoad: () => {
          console.log('Widget SumUp chargé');
          setWidgetMounted(true);
        }
      });
    } catch (error) {
      console.error('Erreur montage widget:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger le formulaire de paiement.",
        variant: "destructive"
      });
    }
  };

  // Effet pour monter le widget quand tout est prêt
  useEffect(() => {
    if (checkoutId && scriptLoadedRef.current && window.SumUpCard && !widgetMounted) {
      // Petit délai pour s'assurer que l'élément DOM est présent
      setTimeout(mountWidget, 100);
    }
  }, [checkoutId, widgetMounted]);

  // Gérer le clic sur le bouton de paiement
  const handlePayment = async () => {
    if (!checkoutId) {
      // Créer d'abord un checkout
      await createCheckout();
      return;
    }

    if (sumupCardRef.current) {
      // Soumettre le formulaire de paiement
      sumupCardRef.current.submit();
    } else {
      toast({
        title: "Erreur",
        description: "Le formulaire de paiement n'est pas encore prêt. Veuillez patienter.",
        variant: "destructive"
      });
    }
  };

  // Nettoyer le widget au démontage
  useEffect(() => {
    return () => {
      if (sumupCardRef.current) {
        sumupCardRef.current.unmount();
      }
    };
  }, []);

  const isButtonDisabled = isProcessing || isCreatingCheckout;
  const buttonText = isCreatingCheckout 
    ? "Initialisation..." 
    : !checkoutId 
    ? "Télécharger maintenant (9€)" 
    : isProcessing 
    ? "Paiement en cours..." 
    : "Procéder au paiement (9€)";

  return (
    <div className="space-y-4 mt-6">
      {/* Widget SumUp (caché jusqu'à ce qu'il soit utilisé) */}
      <div id="sumup-card-widget" style={{ display: 'none' }}></div>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            onClick={handlePayment}
            disabled={isButtonDisabled}
            className="w-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-7 text-lg rounded-xl border border-blue-400/60 hover:border-blue-400/70 border-b-[3px] border-b-blue-900/70 border-l-[2px] border-l-blue-700/50 border-r-[2px] border-r-blue-700/50 hover:border-b-blue-900/80 hover:border-l-blue-700/60 hover:border-r-blue-700/60 transition-all duration-300 active:border-b-[1px] active:border-b-blue-900/80 active:translate-y-[2px] active:scale-[0.98] group h-22 relative overflow-hidden will-change-transform shadow-lg hover:shadow-xl"
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
            aria-label={isButtonDisabled ? "Traitement en cours, veuillez patienter" : "Payer 9€ avec paiement sécurisé"}
            aria-live="polite"
            aria-busy={isButtonDisabled}
            aria-disabled={isButtonDisabled}
            aria-describedby="payment-button-description"
          >
            <ButtonEffects />
            
            <div className="flex items-center justify-center w-full gap-6 relative z-10">
              <ShoppingCart 
                className="drop-shadow-sm flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
                size={18}
                width={18}
                height={18}
                style={{ width: '18px', height: '18px', minWidth: '18px', minHeight: '18px' }}
                aria-hidden="true"
              />
              <div className="flex flex-col items-center">
                <span className="text-center font-semibold text-[1.6rem] drop-shadow-sm" id="payment-button-description">
                  {buttonText}
                </span>
              </div>
              <ArrowRight 
                className="drop-shadow-sm flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                size={18}
                width={18}
                height={18}
                style={{ width: '18px', height: '18px', minWidth: '18px', minHeight: '18px' }}
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
            {checkoutId ? "Paiement sécurisé avec SumUp" : "Accès immédiat en page d'après-paiement"}
          </p>
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
