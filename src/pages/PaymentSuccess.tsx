
import React, { useEffect, useState } from 'react';
import { Download, CheckCircle, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const { toast } = useToast();
  const [customerName, setCustomerName] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    // Récupérer les informations depuis les paramètres d'URL ou localStorage
    const params = new URLSearchParams(location.search);
    const nameParam = params.get('name');
    
    // Priorité aux paramètres d'URL, puis localStorage
    const name = nameParam || localStorage.getItem('customer_name') || '';
    
    setCustomerName(name);
  }, [location]);

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

  const generateReceipt = () => {
    const dateTime = new Date().toLocaleString('fr-FR');
    const receiptHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Reçu d'achat - FRONT-CLOUD</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .receipt {
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 5px;
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 10px;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #4a6cf7;
          }
          .info {
            margin-bottom: 20px;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          }
          .product {
            margin: 20px 0;
            padding: 10px 0;
            border-top: 1px solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0;
          }
          .total {
            font-size: 18px;
            font-weight: bold;
            text-align: right;
            margin-top: 20px;
          }
          .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="header">
            <div class="logo">FRONT-CLOUD</div>
            <div>Reçu d'achat</div>
          </div>
          
          <div class="info">
            <div class="info-row">
              <div><strong>Numéro de commande:</strong></div>
              <div>FC-${Date.now().toString().slice(-8)}</div>
            </div>
            <div class="info-row">
              <div><strong>Date:</strong></div>
              <div>${dateTime}</div>
            </div>
            <div class="info-row">
              <div><strong>Client:</strong></div>
              <div>${customerName}</div>
            </div>
          </div>
          
          <div class="product">
            <div class="info-row">
              <div><strong>Produit</strong></div>
              <div><strong>Prix</strong></div>
            </div>
            <div class="info-row">
              <div>Pack de ressources Football</div>
              <div>8,00 €</div>
            </div>
            <div class="info-row">
              <div>- Plus de 8600 logos de clubs de football</div>
              <div></div>
            </div>
            <div class="info-row">
              <div>- Format PNG haute qualité</div>
              <div></div>
            </div>
          </div>
          
          <div class="total">Total: 8,00 €</div>
          
          <div class="footer">
            <p>Merci pour votre confiance. Pour toute question, contactez notre service client.</p>
            <p>© ${new Date().getFullYear()} FRONT-CLOUD - Tous droits réservés.</p>
            <p>Ce reçu a été généré automatiquement et ne constitue pas une facture officielle.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([receiptHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `recu-front-cloud-${Date.now().toString().slice(-6)}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Reçu généré",
      description: "Votre reçu a été téléchargé.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-purple-100/20">
        <div className="space-y-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center animate-ping opacity-30">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto relative" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Merci pour votre confiance !
            </h1>
            <p className="text-gray-600 text-lg">
              Votre pack de ressources est prêt à être téléchargé
            </p>
          </div>
        </div>

        {customerName && (
          <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              Client : <span className="font-medium">{customerName}</span>
            </p>
          </div>
        )}

        <div className="bg-purple-50/50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-5 h-5 text-purple-600" />
            <span>Téléchargement sécurisé et instantané</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            onClick={handleDownload}
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
          >
            <Download className="mr-2 h-6 w-6" />
            Télécharger le pack
          </Button>
          
          <Button
            onClick={generateReceipt}
            size="lg"
            variant="outline"
            className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300 text-lg py-6"
          >
            <FileText className="mr-2 h-6 w-6" />
            Télécharger le reçu
          </Button>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Une fois le téléchargement terminé, vous recevrez également un lien par email.
          </p>
          <p className="text-sm text-purple-600 hover:text-purple-700 transition-colors">
            Support client disponible 7j/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
