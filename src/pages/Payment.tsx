

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Loader2, CreditCard, Folder, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Footer from '@/components/Footer';

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

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [widgetMounted, setWidgetMounted] = useState(false);
  const { toast } = useToast();
  const sumupCardRef = useRef<any>(null);
  const scriptLoadedRef = useRef(false);

  // Récupérer le checkout_id depuis l'URL si présent
  useEffect(() => {
    const urlCheckoutId = searchParams.get('checkout_id');
    if (urlCheckoutId) {
      setCheckoutId(urlCheckoutId);
    } else {
      // Si pas de checkout_id, en créer un automatiquement
      createCheckout();
    }
  }, [searchParams]);

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
      console.log('Création du checkout SumUp...');
      const response = await fetch('https://api.sumup.com/v0.1/checkouts', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sup_sk_Ocme3ueglhRoKR7KBE010BTpjgeeIVSn2',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          checkout_reference: `FC-${Date.now()}`,
          amount: 8.00,
          currency: 'EUR',
          description: '⦗FRONT-CLOUD⦘~ Football.zip - Collection de logos de football',
          merchant_code: 'MLMLFVAH',
          return_url: window.location.origin + '/payment-success-token13061995'
        })
      });
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Erreur API SumUp:', errorData);
        throw new Error(`Erreur lors de la création du checkout: ${response.status}`);
      }
      const data = await response.json();
      console.log('Checkout créé:', data);
      setCheckoutId(data.id);
    } catch (error) {
      console.error('Erreur création checkout:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'initialiser le paiement. Veuillez réessayer.",
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
      console.log('Montage du widget SumUp avec checkout:', checkoutId);
      sumupCardRef.current = window.SumUpCard.mount({
        id: 'sumup-card-widget',
        checkoutId: checkoutId,
        amount: '8.00',
        currency: 'EUR',
        locale: 'fr-FR',
        showSubmitButton: true,
        onResponse: (type: string, body: any) => {
          console.log('SumUp Response:', type, body);
          switch (type) {
            case 'success':
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
                description: "Votre paiement est en cours de traitement..."
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
      setTimeout(mountWidget, 100);
    }
  }, [checkoutId, widgetMounted]);

  // Nettoyer le widget au démontage
  useEffect(() => {
    return () => {
      if (sumupCardRef.current) {
        sumupCardRef.current.unmount();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      <Helmet>
        <title>Paiement sécurisé - Logo Foot</title>
        <meta name="description" content="Finalisez votre achat de la collection de logos de football" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex-grow py-6 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Bouton retour */}
          <Button variant="ghost" onClick={() => navigate('/')} className="mb-4 text-gray-600 hover:text-gray-800 hover:bg-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2 tracking-normal">
                Paiement sécurisé
              </CardTitle>
              <CardDescription>Finalisez votre transaction — <span className="font-semibold">⦗FRONT-CLOUD⦘~ Football.zip</span></CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Résumé de la commande */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gray-50 p-2 rounded border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.08)] flex-shrink-0">
                    <Folder className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 text-lg">
                      ⦗FRONT-CLOUD⦘~ Football.zip
                    </h3>
                    <p className="text-xs text-gray-600">
                      Quantité : 1
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span>Total :</span>
                  <span className="text-lg">8,00 €</span>
                </div>
              </div>

              {/* Information de téléchargement */}
              <div className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 rounded-lg -mt-2">
                <Info className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-600">
                  Le lien de téléchargement sera disponible après la confirmation du paiement
                </p>
              </div>

              {/* État de chargement */}
              {isCreatingCheckout && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-500 mr-3" />
                  <span>Initialisation du paiement...</span>
                </div>
              )}

              {/* Widget de paiement */}
              {checkoutId && !isCreatingCheckout && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Informations de paiement</h3>
                  <div id="sumup-card-widget" className="min-h-[400px]"></div>
                  
                  {isProcessing && (
                    <div className="flex items-center justify-center py-4">
                      <Loader2 className="h-5 w-5 animate-spin text-blue-500 mr-2" />
                      <span>Traitement du paiement en cours...</span>
                    </div>
                  )}
                </div>
              )}

              {/* Informations de sécurité */}
              <div className="text-center text-sm text-gray-600">
                <p className="text-sm">🔒 Paiement sécurisé via SumUp</p>
                <p>Vos données de paiement sont chiffrées et protégées</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Payment;

