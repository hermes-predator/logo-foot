import React, { useEffect, useMemo, useRef, useState } from "react";
import { Loader2, Folder, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

interface PaymentWidgetProps {
  onSuccess?: (checkoutId: string) => void;
  className?: string;
}

const PaymentWidget: React.FC<PaymentWidgetProps> = ({ onSuccess, className }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [widgetMounted, setWidgetMounted] = useState(false);
  const { toast } = useToast();
  const sumupCardRef = useRef<any>(null);
  const scriptLoadedRef = useRef(false);

  const widgetId = useMemo(
    () => `sumup-card-widget-${Math.random().toString(36).slice(2)}`,
    []
  );

  // Charger le script SumUp (une seule fois)
  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const existing = Array.from(document.getElementsByTagName("script")).find(
      (s) => s.src === "https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js"
    );

    if (existing) {
      scriptLoadedRef.current = true;
      return;
    }

    const script = document.createElement("script");
    script.src = "https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js";
    script.async = true;
    script.onload = () => {
      scriptLoadedRef.current = true;
    };
    script.onerror = () => {
      toast({
        title: "Erreur de chargement",
        description:
          "Impossible de charger le système de paiement. Veuillez réessayer.",
        variant: "destructive",
      });
    };
    document.head.appendChild(script);

    return () => {
      // On ne retire pas le script pour permettre l'ouverture/fermeture fluide de la modal
    };
  }, [toast]);

  // Créer un checkout SumUp
  const createCheckout = async () => {
    setIsCreatingCheckout(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { data, error } = await supabase.functions.invoke("handle-payment", {
        body: {
          checkout_reference: `FC-${Date.now()}`,
          amount: 8.00,
          currency: "EUR",
          description: "⦗FRONT-CLOUD⦘~ Football.zip - Collection de logos de football",
        },
      });
      if (error) throw error;
      setCheckoutId(data.id);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'initialiser le paiement. Veuillez réessayer.",
        variant: "destructive",
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
        id: widgetId,
        checkoutId,
        amount: "8.00",
        currency: "EUR",
        locale: "fr-FR",
        showSubmitButton: true,
        onResponse: (type: string) => {
          switch (type) {
            case "success": {
              const action =
                onSuccess ??
                ((id: string) =>
                  (window.location.href = `/payment-success-token13061995?checkout_id=${id}`));
              action(checkoutId);
              break;
            }
            case "error":
            case "fail":
              setIsProcessing(false);
              toast({
                title: type === "fail" ? "Paiement annulé" : "Erreur de paiement",
                description:
                  type === "fail"
                    ? "Le paiement a été annulé."
                    : "Une erreur est survenue lors du paiement.",
                variant: "destructive",
              });
              break;
            case "sent":
              setIsProcessing(true);
              toast({
                title: "Paiement en cours",
                description: "Votre paiement est en cours de traitement...",
              });
              break;
          }
        },
        onLoad: () => setWidgetMounted(true),
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger le formulaire de paiement.",
        variant: "destructive",
      });
    }
  };

  // Initialisation au montage
  useEffect(() => {
    createCheckout();
    // cleanup: démonter le widget quand le composant est démonté
    return () => {
      if (sumupCardRef.current) {
        sumupCardRef.current.unmount();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Monter le widget quand prêt
  useEffect(() => {
    if (checkoutId && window.SumUpCard && !widgetMounted) {
      setTimeout(mountWidget, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkoutId, widgetMounted]);

  return (
    <div className={className}>
      {/* Résumé de la commande */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-50 p-2 rounded border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.08)] flex-shrink-0">
            <Folder className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 text-lg">⦗FRONT-CLOUD⦘~ Football.zip</h3>
            <p className="text-xs text-gray-600">Quantité : 1</p>
          </div>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>Total :</span>
          <span className="text-lg">8.00 €</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 rounded-lg mt-3">
        <Info className="w-4 h-4 text-gray-500" />
        <p className="text-sm text-gray-600">
          Le lien de téléchargement sera disponible après la confirmation du token de paiement
        </p>
      </div>

      {/* État de chargement */}
      {isCreatingCheckout && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500 mr-3" />
          <span>Initialisation du paiement...</span>
        </div>
      )}

      {/* Widget */}
      {checkoutId && !isCreatingCheckout && (
        <div className="mt-3">
          <h3 className="text-lg font-semibold mb-4">Informations de paiement</h3>
          <div id={widgetId} className="min-h-[400px]"></div>

          {isProcessing && (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="h-5 w-5 animate-spin text-blue-500 mr-2" />
              <span>Traitement du paiement en cours...</span>
            </div>
          )}
        </div>
      )}

      {/* Footer SumUp */}
      <div className="mt-6 pt-6 pb-4 bg-gray-50 -mx-6 px-6 rounded-b-lg border-t border-gray-200">
        <div className="text-center mb-3">
          <p className="text-sm font-medium text-gray-700 mb-1">🔒 Paiement sécurisé via SumUp</p>
          <p className="text-xs text-gray-600">Vos données de paiement sont chiffrées et protégées</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500">
          <a 
            href="https://www.sumup.com/fr-fr/about-us/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            À propos de SumUp
          </a>
          <span className="text-gray-300">•</span>
          <a 
            href="https://www.sumup.com/fr-fr/security/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Sécurité
          </a>
          <span className="text-gray-300">•</span>
          <a 
            href="https://www.sumup.com/fr-fr/privacy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Confidentialité
          </a>
          <span className="text-gray-300">•</span>
          <a 
            href="https://help.sumup.com/hc/fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Support
          </a>
        </div>
        <div className="text-center mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            SumUp Limited est un établissement de monnaie électronique réglementé par la Banque centrale d'Irlande (numéro de référence : n°C195030).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentWidget;
