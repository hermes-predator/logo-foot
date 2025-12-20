import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, CreditCard, Check } from 'lucide-react';
import PaymentWidget from '@/components/payment/PaymentWidget';

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Paiement sécurisé - Logo Foot</title>
        <meta name="description" content="Finalisez votre achat de la collection de logos de football" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
        <div className="container mx-auto max-w-xl">
          {/* Retour */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {/* Étape 1 - Sélection */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-600 mt-1 hidden sm:block">Sélection</span>
              </div>
              
              {/* Ligne de connexion */}
              <div className="flex-1 h-1 bg-blue-600 mx-2 rounded-full" />
              
              {/* Étape 2 - Paiement (active) */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium ring-4 ring-blue-100">
                  <CreditCard className="w-4 h-4" />
                </div>
                <span className="text-xs text-blue-600 font-medium mt-1 hidden sm:block">Paiement</span>
              </div>
              
              {/* Ligne de connexion */}
              <div className="flex-1 h-1 bg-gray-200 mx-2 rounded-full" />
              
              {/* Étape 3 - Téléchargement */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <span className="text-xs text-gray-400 mt-1 hidden sm:block">Téléchargement</span>
              </div>
            </div>
          </div>

          {/* Titre */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Finaliser votre achat</h1>
          </div>

          {/* Widget de paiement */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <PaymentWidget />
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-6">
            En procédant au paiement, vous acceptez nos conditions générales de vente.
          </p>
        </div>
      </div>
    </>
  );
};

export default Payment;
