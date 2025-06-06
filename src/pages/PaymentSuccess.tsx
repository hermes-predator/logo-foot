import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Check, Folder, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";
import ConfettiCelebration from '@/components/effects/ConfettiCelebration';
import ReceiptDownload from '@/components/payment/ReceiptDownload';
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
const PaymentSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: `order_${Date.now()}`,
        value: 9.00,
        currency: 'EUR',
        items: [{
          item_name: '⦗FRONT-CLOUD⦘~ Football.zip'
        }]
      });
    }

    // Afficher un toast de bienvenue dès que la page est chargée
    toast({
      title: "Paiement confirmé !",
      description: "Votre collection de logos est prête à être téléchargée.",
      duration: 5000,
      icon: <Check className="h-4 w-4 text-green-500" />
    });
    return () => clearTimeout(timer);
  }, []);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/frontcloud-football.zip';
    link.download = 'frontcloud-football.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Afficher un toast après le téléchargement
    toast({
      title: "Téléchargement démarré !",
      description: "Votre fichier ZIP est en cours de téléchargement.",
      duration: 3000,
      icon: <Check className="h-4 w-4 text-blue-500" />
    });
  };
  const handleReceiptDownload = () => {
    // Toast pour le téléchargement du reçu
    toast({
      title: "Reçu téléchargé",
      description: "Votre reçu d'achat a été téléchargé avec succès.",
      duration: 3000,
      icon: <FileText className="h-4 w-4 text-indigo-500" />
    });
  };
  const orderDate = new Date();
  const orderNumber = `FC-${Date.now().toString().slice(-6)}`;
  return <>
      <Helmet>
        <title>Téléchargement Prêt | Merci pour votre achat | FRONT-CLOUD</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {showConfetti && <ConfettiCelebration duration={8000} />}
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="max-w-4xl mx-auto space-y-6">
            {/* Header Section */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.1,
            duration: 0.5
          }} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-500" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-3">Paiement confirmé ! (9,00€)</h1>
                <p className="text-lg text-blue-100 max-w-md">Merci pour votre confiance. 
Votre collection de logos est prête à être téléchargée.</p>
              </div>
            </motion.div>

            {/* Warning Section - Moved before Order Summary Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} className="bg-amber-50 rounded-lg border border-amber-200">
              <div className="p-6">
                <div>
                  <h2 className="text-xl font-bold text-amber-800 mb-2">
                    Avertissement
                  </h2>
                  <p className="text-amber-700">
                    Télécharger sans attendre votre fichier ZIP avant de quitter cette page, vous êtes actuellement en invité(e).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Order Details Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.25,
            duration: 0.5
          }} className="bg-white rounded-lg border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Récapitulatif de la commande
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4 text-gray-700">
                  <div>
                    <p className="text-sm text-gray-500">Numéro de commande</p>
                    <p className="font-medium">{orderNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{orderDate.toLocaleDateString('fr-FR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })} à {orderDate.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 my-4 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                        <Folder className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">⦗FRONT-CLOUD⦘~ Football.zip</h3>
                        <p className="text-sm text-gray-500">Package ZIP complet</p>
                      </div>
                    </div>
                    <span className="font-semibold">9,00 €</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between text-gray-700">
                    <span>Total</span>
                    <span className="font-bold text-lg">9,00 €</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Download Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="bg-white rounded-lg border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Téléchargement
                </h2>
                <p className="text-gray-600 mb-4">
                  Votre collection est prête à être téléchargée. Cliquez sur le bouton ci-dessous pour obtenir votre fichier ZIP.
                </p>
                
                {/* Technical details about the file */}
                <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3">⦗FRONT-CLOUD⦘~ Football.zip</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Poids</p>
                      <p className="font-medium text-gray-800">63 Mo</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Taille</p>
                      <p className="font-medium text-gray-800">8 774 éléments</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-300 hover:shadow-lg relative overflow-hidden group h-20 text-xl flex items-center justify-center" size="lg">
                    <span className="relative">Télécharger le fichier ZIP</span>
                  </Button>
                  
                  <ReceiptDownload purchaseDate={orderDate} productName="⦗FRONT-CLOUD⦘~ Football.zip" price="9,00 €" orderNumber={orderNumber} onDownloadComplete={handleReceiptDownload} />
                </div>
              </div>
            </motion.div>

            {/* Instructions Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.5
          }} className="bg-white rounded-lg border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Instructions d'utilisation</h2>
                <div className="space-y-3">
                  {["Téléchargez le fichier ZIP en cliquant sur le bouton ci-dessus", "Extrayez le contenu du fichier ZIP sur votre ordinateur", "Accédez aux dossiers organisés par catégories pour trouver les logos", "Stockez le fichier sur votre Google Drive ou disque dur externe"].map((step, index) => <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>)}
                </div>
              </div>
            </motion.div>

            {/* Security Info */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.5
          }} className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Paiement sécurisé</h3>
                  <p className="text-gray-600 text-sm">
                    Votre transaction a été traitée de manière sécurisée. Pour toute question concernant votre achat, 
                    n'hésitez pas à nous contacter à <span className="text-blue-600">contact@logo-foot.com</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>;
};
export default PaymentSuccess;