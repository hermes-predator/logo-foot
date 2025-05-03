import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirection automatique après 5 secondes
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Nettoyage du timer si le composant est démonté
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      {/* Conteneur amélioré pour la visibilité */}
      <div className="backdrop-blur-md rounded-xl p-6 border-2 border-amber-300 bg-amber-100 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center justify-center">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">Paiement réussi !</h1>
          <p className="text-gray-600 mb-4 text-center">
            Merci pour votre achat. Vous allez être redirigé vers la page d'accueil dans quelques secondes...
          </p>
          <Link to="/">
            <Button variant="outline">
              Retourner à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
