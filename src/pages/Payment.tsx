import { Helmet } from 'react-helmet-async';
import PaymentWidget from '@/components/payment/PaymentWidget';
import CheckoutProgressBar from '@/components/payment/CheckoutProgressBar';

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Paiement sécurisé - Logo Foot</title>
        <meta name="description" content="Finalisez votre achat de la collection de logos de football" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
        <div className="container mx-auto max-w-lg">
          {/* Progress bar */}
          <CheckoutProgressBar currentStep={2} />

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
