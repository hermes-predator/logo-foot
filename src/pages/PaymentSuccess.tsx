
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, Loader2, Download, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ConfettiCelebration from '@/components/effects/ConfettiCelebration';
import ReceiptDownload from '@/components/payment/ReceiptDownload';

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
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('loading');
  const [paymentData, setPaymentData] = useState<SumUpCheckoutResponse | null>(null);
  const [error, setError] = useState<string>('');

  const checkoutId = searchParams.get('checkout_id');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!checkoutId) {
        setPaymentStatus('invalid');
        setError('Identifiant de transaction manquant.');
        return;
      }

      try {
        console.log('Vérification du paiement avec checkout_id:', checkoutId);
        
        const { supabase } = await import('@/integrations/supabase/client');
        const { data: respData, error } = await supabase.functions.invoke('verify-payment', {
          body: { checkoutId }
        });

        console.log('Réponse verify-payment:', error || respData);

        if (error) {
          throw new Error(`Erreur Edge Function verify-payment: ${error.message || 'unknown'}`);
        }

        const verifyData: SumUpCheckoutResponse = respData as any;
        console.log('Données du paiement:', verifyData);
        
        setPaymentData(verifyData);

        if (verifyData.status === 'PAID') {
          setPaymentStatus('success');
        } else if (verifyData.status === 'PENDING') {
          setPaymentStatus('loading');
          setError('Transaction en cours. Vérification dans 5 secondes...');
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          setPaymentStatus('failed');
          setError('Transaction non validée.');
        }

      } catch (error) {
        console.error('Erreur lors de la vérification du paiement:', error);
        setPaymentStatus('failed');
        setError('Erreur de vérification. Contactez le support.');
      }
    };

    verifyPayment();
  }, [checkoutId]);

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
                <Loader2 className="h-16 w-16 animate-spin text-blue-500" />
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
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-3xl text-green-600 mb-2">
                  Paiement confirmé ! 🎉
                </CardTitle>
                <CardDescription className="text-lg">
                  Votre paiement de {paymentData?.amount !== undefined ? new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(paymentData.amount) + '€' : '5€'} a été traité avec succès.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Button 
                    onClick={handleDownload}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger votre collection (ZIP)
                  </Button>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Détails de votre achat :</h3>
                  <ul className="text-blue-700 space-y-1">
                    <li>• +1000 logos de football en PNG transparent</li>
                    <li>• Clubs européens, équipes nationales, compétitions</li>
                    <li>• Fichiers haute qualité prêts à utiliser</li>
                    <li>• Licence d'utilisation incluse</li>
                  </ul>
                </div>

                <ReceiptDownload 
                  purchaseDate={paymentData?.date ? new Date(paymentData.date) : new Date()}
                  productName="⦗FRONT-CLOUD⦘~ Football.zip"
                  price={paymentData?.amount !== undefined ? `${new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(paymentData.amount)} €` : "5 €"}
                  orderNumber={checkoutId || `FC-${Date.now().toString().slice(-6)}`}
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
                <XCircle className="h-16 w-16 text-red-500" />
              </div>
              <CardTitle className="text-2xl text-red-600">
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
                <Button 
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="mr-4"
                >
                  Retour à l'accueil
                </Button>
                <Button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-500 hover:bg-blue-600"
                >
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
                <AlertTriangle className="h-16 w-16 text-orange-500" />
              </div>
              <CardTitle className="text-2xl text-orange-600">
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
              
              <div className="text-center">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Retour à l'accueil
                </Button>
              </div>
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

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
        <div className="container mx-auto">
          {renderContent()}
          
          {paymentStatus === 'success' && (
            <div className="text-center mt-8 text-gray-600">
              <p className="text-sm">
                Besoin d'aide ? Contactez-nous à support@logo-foot.com
              </p>
              <p className="text-xs mt-2">
                Transaction ID: {checkoutId}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
