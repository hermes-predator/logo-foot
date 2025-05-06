
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex items-center justify-center">
            <CheckCircle className="text-green-500 h-12 w-12" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Paiement réussi !
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Merci pour votre achat. Votre téléchargement est prêt.
          </p>
        </div>
        
        <Button 
          onClick={() => navigate('/')}
          className="w-full bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-300 text-2xl py-6 h-auto font-medium"
        >
          <div className="flex items-center justify-center gap-3">
            <Download className="h-7 w-7" /> {/* Icon size increased */}
            <span>Retour à l'accueil</span>
          </div>
        </Button>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Si vous avez des questions, n'hésitez pas à nous contacter à <a href="mailto:contact@logo-foot.com" className="font-medium text-blue-600 hover:text-blue-500">contact@logo-foot.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
