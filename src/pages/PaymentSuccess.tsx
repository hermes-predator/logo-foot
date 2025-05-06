
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
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    
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
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Carte principale */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Bande décorative supérieure */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
              
              {/* En-tête avec motif géométrique */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-16 pb-12 px-6 sm:px-12">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <ShieldCheck className="h-12 w-12 text-white" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4 font-heading">
                    Paiement réussi !
                  </h1>
                  <p className="text-lg text-gray-600 text-center max-w-lg">
                    Merci pour votre confiance. Votre collection de logos est prête à être téléchargée.
                  </p>
                </div>
              </div>
              
              {/* Contenu principal */}
              <div className="p-6 sm:p-12">
                {/* Instructions */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </span>
                    Instructions de téléchargement
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Cliquez sur le bouton « Télécharger maintenant » ci-dessous",
                      "Une fois téléchargé, extrayez le fichier ZIP",
                      "Vous pouvez maintenant utiliser les logos dans vos projets",
                      "Conservez votre reçu comme preuve d'achat"
                    ].map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {step}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      onClick={handleDownload}
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Download className="h-6 w-6 mr-2" />
                      Télécharger maintenant
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ReceiptDownload 
                      purchaseDate={new Date()}
                      productName="FRONT-CLOUD Football.zip"
                      price="9,00 €"
                      orderNumber={`FC-${Date.now().toString().slice(-6)}`}
                    />
                  </motion.div>
                </div>

                {/* Footer avec informations de sécurité */}
                <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                    <h3 className="font-semibold text-gray-800">Paiement sécurisé</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Votre transaction a été traitée de manière sécurisée. Pour toute question concernant votre achat, 
                    n'hésitez pas à nous contacter à <span className="text-blue-600">support@front-cloud.fr</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
