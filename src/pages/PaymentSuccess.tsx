import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, Loader2, Download, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ConfettiCelebration from '@/components/effects/ConfettiCelebration';
import ReceiptDownload from '@/components/payment/ReceiptDownload';
import CheckoutProgressBar from '@/components/payment/CheckoutProgressBar';
import { clearPersistedSumupCheckoutId, persistSumupCheckoutId, readPersistedSumupCheckoutId } from '@/lib/sumup-checkout';

type PaymentStatus = 'loading' | 'success' | 'failed' | 'invalid';

interface SumUpCheckoutResponse {
  id: string;
  status: 'PAID' | 'PENDING' | 'FAILED' | 'CANCELED';
  amount: number;
  currency: string;
  date: string;
  description?: string;
}

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("loading");
  const [paymentData, setPaymentData] = useState<SumUpCheckoutResponse | null>(null);
  const [error, setError] = useState<string>("");

  const checkoutIdFromQuery = searchParams.get("checkout_id");
  const [effectiveCheckoutId, setEffectiveCheckoutId] = useState<string | null>(null);

  useEffect(() => {
    if (checkoutIdFromQuery) {
      setEffectiveCheckoutId(checkoutIdFromQuery);
      // Conserve l'ID pour un refresh / retour 3DS
      persistSumupCheckoutId(checkoutIdFromQuery);
      return;
    }

    // Fallback si SumUp ne renvoie pas le paramètre (ex: 3DS / redirection)
    const storedId = readPersistedSumupCheckoutId();
    setEffectiveCheckoutId(storedId);
  }, [checkoutIdFromQuery]);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!effectiveCheckoutId) {
        setPaymentStatus("invalid");
        setError("Identifiant de transaction manquant.");
        return;
      }

      try {
        console.log("Vérification du paiement avec checkout_id:", effectiveCheckoutId);

        const { supabase } = await import("@/integrations/supabase/client");
        const { data: respData, error } = await supabase.functions.invoke("verify-payment", {
          body: { checkoutId: effectiveCheckoutId },
        });

        console.log("Réponse verify-payment:", error || respData);

        if (error) {
          throw new Error(`Erreur Edge Function verify-payment: ${error.message || "unknown"}`);
        }

        const verifyData: SumUpCheckoutResponse = respData as any;
        console.log("Données du paiement:", verifyData);

        setPaymentData(verifyData);

        if (verifyData.status === "PAID") {
          setPaymentStatus("success");
          clearPersistedSumupCheckoutId();
        } else if (verifyData.status === "PENDING") {

          setPaymentStatus("loading");
          setError("Transaction en cours. Vérification dans 5 secondes...");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          setPaymentStatus("failed");
          setError("Transaction non validée.");
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du paiement:", error);
        setPaymentStatus("failed");
        setError("Erreur de vérification. Contactez le support.");
      }
    };

    verifyPayment();
  }, [effectiveCheckoutId]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/frontcloud-football.zip';
    link.download = 'collection-logos-football.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (paymentStatus) {
      case 'loading':
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
              </div>
              <CardTitle className="text-2xl">Vérification du paiement...</CardTitle>
              <CardDescription>
                Nous vérifions votre paiement auprès de notre processeur de paiement sécurisé.
              </CardDescription>
            </CardHeader>
            {error && (
              <CardContent>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              </CardContent>
            )}
          </Card>
        );

      case 'success':
        return (
          <>
            <ConfettiCelebration />
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-3xl text-primary mb-2">
                  Paiement confirmé ! 🎉
                </CardTitle>
                <CardDescription className="text-lg">
                  Votre paiement de {paymentData?.amount !== undefined ? new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(paymentData.amount) + '€' : '5€'} a été traité avec succès.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Résumé de l'achat */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">⦗FRONT-CLOUD⦘~ Football.zip</h3>
                      <p className="text-sm text-muted-foreground">Quantité : 1</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">Total :</span>
                    <span className="font-bold text-primary text-lg">
                      {paymentData?.amount !== undefined 
                        ? new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(paymentData.amount) + ' €' 
                        : '8.00 €'}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    onClick={handleDownload}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger le fichier (ZIP)
                  </Button>
                </div>

                <ReceiptDownload 
                  purchaseDate={paymentData?.date ? new Date(paymentData.date) : new Date()}
                  productName="⦗FRONT-CLOUD⦘~ Football.zip"
                  price={paymentData?.amount !== undefined ? `${new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(paymentData.amount)} €` : "5 €"}
                  orderNumber={effectiveCheckoutId || `FC-${Date.now().toString().slice(-6)}`}
                />
              </CardContent>
            </Card>
          </>
        );

      case 'failed':
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <XCircle className="h-16 w-16 text-destructive" />
              </div>
              <CardTitle className="text-2xl text-destructive">
                Paiement non confirmé
              </CardTitle>
              <CardDescription>
                Nous n'avons pas pu confirmer votre paiement.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
              
              <div className="text-center">
                <Button onClick={() => window.location.reload()}>
                  Réessayer la vérification
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 'invalid':
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-16 w-16 text-foreground" />
              </div>
              <CardTitle className="text-2xl">
                Accès non autorisé
              </CardTitle>
              <CardDescription>
                Cette page nécessite un identifiant de paiement valide.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
              
              {/* Pas de bouton "Retour à l'accueil" ici (demande UX) */}
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Confirmation de paiement - Logo Foot</title>
        <meta name="description" content="Confirmation de votre achat de la collection de logos de football" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-xl">
          {/* Progress bar - étape 3 quand succès, étape 2 sinon */}
          <CheckoutProgressBar currentStep={paymentStatus === 'success' ? 3 : 2} />
          
          {renderContent()}

          {paymentStatus === 'success' && (
            <div className="text-center mt-8 text-muted-foreground">
              <p className="text-sm">
                Besoin d'aide ? Contactez-nous à contact@logo-foot.com
              </p>
              <p className="text-xs mt-2">
                Transaction ID: {effectiveCheckoutId}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
