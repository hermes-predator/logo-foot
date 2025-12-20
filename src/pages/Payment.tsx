import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
