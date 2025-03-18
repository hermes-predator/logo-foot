
import React from 'react';
import { Download, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const PaymentSuccess = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/frontcloud-football.zip';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-100/20">
        <div className="space-y-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center animate-ping opacity-30">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto relative" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Merci pour votre confiance !
            </h1>
            <p className="text-gray-600 text-lg">
              Votre pack de ressources est prêt à être téléchargé
            </p>
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-5 h-5 text-blue-600" />
            <span>Téléchargement sécurisé et instantané</span>
          </div>
        </div>

        <Button
          onClick={handleDownload}
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
        >
          <Download className="mr-2 h-6 w-6" />
          Télécharger le pack
        </Button>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Une fois le téléchargement terminé, vous recevrez également un lien par email.
          </p>
          <p className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
            Support client disponible 7j/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
