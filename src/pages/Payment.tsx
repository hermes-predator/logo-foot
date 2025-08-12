import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Rediriger proprement vers la home avec ouverture de la modal
    navigate('/?pay=1', { replace: true });
    // Déclencher l'ouverture (utile si l'hôte n'a pas encore lu l'URL)
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('open-payment-modal'));
    }, 0);
  }, [navigate]);

  return (
    <div>
      <Helmet>
        <title>Paiement - Redirection</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    </div>
  );
};

export default Payment;
