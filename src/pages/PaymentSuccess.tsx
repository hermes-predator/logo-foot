
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Check, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConfettiCelebration from '@/components/effects/ConfettiCelebration';
import { Helmet } from 'react-helmet-async';

interface LocationState {
  paymentStatus?: string;
}

const PaymentSuccess = () => {
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Access state directly from location
    const state = location.state as LocationState;
    const status = state?.paymentStatus || null;
    setPaymentStatus(status);

    // Show confetti after a delay
    if (status === 'success') {
      const timer = setTimeout(() => {
        setShowConfetti(true);
      }, 500); // Delay showing confetti by 0.5s

      return () => clearTimeout(timer); // Clear timeout if component unmounts
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Paiement Confirmé | Front Cloud Football</title>
        <meta name="description" content="Votre paiement a été confirmé avec succès. Téléchargez immédiatement votre pack de logos de football." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        {showConfetti && <ConfettiCelebration />}
        
        <div className="w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center">
              {paymentStatus === 'success' ? (
                <>
                  <Check className="mx-auto h-12 w-12 text-green-600 mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Paiement réussi!</h2>
                  <p className="mt-2 text-gray-600">Votre paiement a été confirmé. Merci pour votre achat.</p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900">Paiement en attente</h2>
                  <p className="mt-2 text-gray-600">Votre paiement est en cours de traitement. Veuillez patienter.</p>
                </>
              )}
            </div>
            
            <div className="mt-8 space-y-6">
              <div className="flex justify-center">
                <a 
                  href="/frontcloud-football.zip" 
                  download 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Télécharger le fichier ZIP</span>
                  <Download className="h-4 w-4 animate-bounce" />
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Détails de votre commande</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Accès sécurisé et immédiat à tous les logos</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600">Fichiers haute résolution prêts à l'emploi</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600">Licence commerciale incluse</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Link to="/" className="text-blue-600 hover:underline">
                  Retour à la page d'accueil
                </Link>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Besoin d'aide ? <a href="mailto:support@example.com" className="text-blue-600 hover:underline">Contactez notre support</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
