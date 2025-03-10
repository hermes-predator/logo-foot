
import React from 'react';
import { Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const PaymentSuccess = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/public/football-resources.zip';
    link.download = 'frontcloud-football.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Téléchargement démarré",
      description: "Votre fichier va être téléchargé automatiquement.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold text-gray-900">
            Paiement réussi !
          </h1>
          <p className="text-gray-600">
            Merci pour votre achat. Vous pouvez maintenant télécharger votre pack de ressources.
          </p>
        </div>

        <Button
          onClick={handleDownload}
          size="lg"
          className="w-full max-w-sm mx-auto"
        >
          <Download className="mr-2 h-5 w-5" />
          Télécharger le pack
        </Button>

        <p className="text-sm text-gray-500">
          En cas de problème avec le téléchargement, contactez notre support.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
