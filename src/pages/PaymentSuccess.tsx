import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Download, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConfettiCelebration from '../components/effects/ConfettiCelebration';
import ReceiptDownload from '../components/payment/ReceiptDownload';
import ContactForm from '../components/ContactForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PaymentSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Paiement Confirmé - Téléchargez vos Logos de Football | Logo Foot</title>
        <meta name="description" content="Votre paiement a été confirmé avec succès ! Téléchargez immédiatement votre collection de +8600 logos de football en haute qualité." />
        <link rel="canonical" href="https://logo-foot.com/payment-success" />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Paiement Confirmé - Téléchargez vos Logos de Football" />
        <meta property="og:description" content="Votre paiement a été confirmé avec succès ! Téléchargez immédiatement votre collection de +8600 logos de football." />
        <meta property="og:url" content="https://logo-foot.com/payment-success" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Paiement Confirmé - Téléchargez vos Logos de Football" />
        <meta name="twitter:description" content="Votre paiement a été confirmé avec succès ! Téléchargez immédiatement votre collection de +8600 logos de football." />
      </Helmet>

      <ConfettiCelebration duration={5000} />
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* En-tête de succès */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Paiement Confirmé ! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Merci pour votre achat ! Votre collection de logos est prête au téléchargement.
            </p>
          </div>

          {/* Section de téléchargement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Téléchargez Votre Collection
              </h2>
              <p className="text-gray-600 mb-6">
                Cliquez sur le bouton ci-dessous pour télécharger votre fichier ZIP contenant plus de 8600 logos de football en haute qualité.
              </p>
              
              <a
                href="/frontcloud-football.zip"
                download="FRONTCLOUD-FOOTBALL.zip"
                className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download className="w-6 h-6" />
                Télécharger la Collection (ZIP)
              </a>
            </div>
          </div>

          {/* Informations importantes */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">📁 Contenu du Pack</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Plus de 8600 logos de clubs</li>
                <li>• Organisés par pays et ligues</li>
                <li>• Format PNG haute qualité</li>
                <li>• Backgrounds transparents</li>
                <li>• Usage commercial autorisé</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">💡 Conseils d'utilisation</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sauvegardez votre fichier ZIP</li>
                <li>• Conservez votre reçu de paiement</li>
                <li>• Aucune limite de téléchargement</li>
                <li>• Support technique disponible</li>
              </ul>
            </div>
          </div>

          {/* Support et reçu */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <ReceiptDownload />
            
            <Dialog>
              <DialogTrigger className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5" />
                Besoin d'aide ?
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Support Client</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Retour à l'accueil */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
