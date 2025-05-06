import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ConfettiCelebration from '@/components/effects/ConfettiCelebration';
import { Helmet } from 'react-helmet-async';

const PaymentSuccess = () => {
  const [paymentStatus, setPaymentStatus] = useState("success"); // Par défaut à "success"
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    
    if (status === 'success' || !status) {
      setPaymentStatus('success');
      setShowConfetti(true);
    } else if (status === 'pending') {
      setPaymentStatus('pending');
    } else if (status === 'cancelled') {
      setPaymentStatus('cancelled');
    }

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const downloadFile = () => {
    window.location.href = '/frontcloud-football.zip';
  };

  if (paymentStatus === 'processing') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="backdrop-blur-sm rounded-xl p-6 border border-gray-200 bg-white/40 transition-all duration-300">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Vérification du paiement...
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Veuillez patienter pendant que nous vérifions votre paiement.
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'pending') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="backdrop-blur-sm rounded-xl p-6 border border-gray-200 bg-white/40 transition-all duration-300">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Paiement en attente
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Votre paiement est en cours de traitement. Nous vous enverrons un email dès que le paiement sera confirmé.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="bg-blue-50 hover:bg-blue-100 text-blue-700"
              onClick={() => navigate('/')}
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'cancelled') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="backdrop-blur-sm rounded-xl p-6 border border-gray-200 bg-white/40 transition-all duration-300">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Paiement annulé
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Votre paiement a été annulé. Aucun montant n'a été débité de votre compte.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="bg-blue-50 hover:bg-blue-100 text-blue-700"
              onClick={() => navigate('/')}
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Téléchargement - Votre paiement a été accepté</title>
        <meta name="description" content="Votre paiement a été accepté. Téléchargez maintenant votre fichier de ressources football." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {showConfetti && <ConfettiCelebration />}
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
        <div className="backdrop-blur-sm rounded-xl p-6 border border-gray-200 bg-white/40 transition-all duration-300">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">
              Paiement accepté !
            </h1>
            
            <p className="text-gray-600 text-center mb-6 max-w-md">
              Merci pour votre achat. Votre paiement a été traité avec succès. 
              Vous pouvez maintenant télécharger votre fichier.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
              <Button
                onClick={downloadFile}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition font-semibold shadow-md"
              >
                <Download className="mr-2 h-6 w-6" />
                Télécharger le fichier ZIP
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={() => navigate('/')}
              >
                Retour à l'accueil
              </Button>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-4">
              <p className="mb-1">
                Si vous rencontrez des problèmes avec le téléchargement, 
                essayez de rafraîchir la page ou contactez notre support.
              </p>
              <p>
                Un email de confirmation a également été envoyé à votre adresse email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
