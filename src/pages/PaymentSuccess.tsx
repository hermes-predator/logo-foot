
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, Receipt } from "lucide-react";
import { motion } from "framer-motion";
import ConfettiCelebration from '@/components/effects/ConfettiCelebration';
import ReceiptDownload from '@/components/payment/ReceiptDownload';

const PaymentSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  
  useEffect(() => {
    // Pour nettoyer les confettis après un certain temps
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    
    // Mesurer la conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: `order_${Date.now()}`,
        value: 9.00,
        currency: 'EUR',
        items: [{ item_name: 'Football Logos Collection' }]
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    // Créer un lien vers le fichier et déclencher le téléchargement
    const link = document.createElement('a');
    link.href = '/frontcloud-football.zip';
    link.download = 'frontcloud-football.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>Téléchargement Prêt | Merci pour votre achat | FRONT-CLOUD</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {showConfetti && <ConfettiCelebration duration={8000} />}
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col items-center justify-center text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Paiement réussi !</h1>
              <p className="text-gray-600">Votre fichier est prêt à être téléchargé</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Instructions :</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Cliquez sur le bouton "Télécharger maintenant" ci-dessous</li>
                <li>Une fois téléchargé, extrayez le fichier ZIP</li>
                <li>Vous pouvez maintenant utiliser les logos dans vos projets</li>
                <li>Conservez ce reçu comme preuve d'achat</li>
              </ol>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Button
                onClick={handleDownload}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 py-6 px-8"
              >
                <Download className="h-5 w-5" />
                Télécharger maintenant
              </Button>
              
              <ReceiptDownload 
                purchaseDate={new Date()}
                productName="FRONT-CLOUD Football.zip"
                price="9,00 €"
                orderNumber={`FC-${Date.now().toString().slice(-6)}`}
              />
            </div>
            
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
              <p className="flex items-center">
                <ShieldCheck className="h-4 w-4 mr-2 text-green-600" />
                <span>Votre paiement est sécurisé et chiffré.</span>
              </p>
              <p className="mt-2">Si vous rencontrez des problèmes avec votre téléchargement, veuillez nous contacter à support@front-cloud.fr</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PaymentSuccess;
