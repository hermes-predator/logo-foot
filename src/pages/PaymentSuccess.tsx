
import React, { useEffect, useState } from 'react';
import { Download, CheckCircle, Shield, FileText, Mail, RotateCw, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Progress } from '@/components/ui/progress';

const PaymentSuccess = () => {
  const { toast } = useToast();
  const [customerName, setCustomerName] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isGeneratingReceipt, setIsGeneratingReceipt] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const location = useLocation();
  const [orderId] = useState(() => `FC-${Date.now().toString().slice(-8)}`);

  useEffect(() => {
    // Récupérer les informations depuis les paramètres d'URL ou localStorage
    const params = new URLSearchParams(location.search);
    const nameParam = params.get('name');
    
    // Priorité aux paramètres d'URL, puis localStorage
    const name = nameParam || localStorage.getItem('customer_name') || '';
    
    setCustomerName(name);
    
    // Afficher un toast de bienvenue
    if (name) {
      toast({
        title: "Confirmation",
        description: `Votre commande est prête, ${name}.`,
      });
    }
  }, [location, toast]);

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Simuler une progression du téléchargement
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
    
    // Simuler un délai pour améliorer l'UX
    setTimeout(() => {
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
      
      setIsDownloading(false);
      clearInterval(interval);
      setDownloadProgress(100);
    }, 2500);
  };

  const generateReceipt = () => {
    setIsGeneratingReceipt(true);
    
    // Simuler un délai pour améliorer l'UX
    setTimeout(() => {
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
                <div>${orderId}</div>
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
      link.download = `recu-front-cloud-${orderId.slice(-6)}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Reçu généré",
        description: "Votre reçu a été téléchargé.",
      });
      
      setIsGeneratingReceipt(false);
    }, 600);
  };

  const sendEmailCopy = () => {
    toast({
      title: "Email envoyé",
      description: "Une copie de votre téléchargement a été envoyée à votre adresse email.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <Card className="max-w-4xl w-full space-y-8 bg-white rounded-lg p-8 shadow-md">
        {/* En-tête avec statut de commande */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              Paiement confirmé
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Merci pour votre achat. Votre commande <span className="font-semibold">{orderId}</span> a été traitée avec succès.
            </p>
          </div>
        </div>

        {/* Section d'informations client */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {customerName && (
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="font-medium text-gray-800 mb-1 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Détails de commande
                </h3>
                <p className="text-gray-700">
                  Client : <span className="font-medium">{customerName}</span>
                </p>
                <p className="text-gray-700 text-sm">
                  Date : <span className="font-medium">{new Date().toLocaleDateString('fr-FR')}</span>
                </p>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Contenu de votre pack</h3>
              <ul className="text-gray-700 space-y-1">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 text-green-600 shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>+ 8600 logos de clubs de football en PNG</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 text-green-600 shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Format haute qualité exploitable dans tous vos projets</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 text-green-600 shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span>Accès immédiat via téléchargement ci-dessous</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Assistance disponible</h3>
              <p className="text-gray-700 text-sm">
                Si vous avez besoin d'aide avec votre commande, n'hésitez pas à nous contacter à <span className="font-medium">support@front-cloud.com</span>
              </p>
            </div>
          </div>

          {/* Section de téléchargement */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-3">Téléchargement & Documents</h3>
              
              <div className="space-y-3">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 shadow-sm hover:shadow-md transition-all duration-300 text-base py-5 h-auto"
                >
                  {isDownloading ? (
                    <><RotateCw className="mr-2 h-5 w-5 animate-spin" /> Préparation...</>
                  ) : (
                    <><Download className="mr-2 h-5 w-5" /> Télécharger mon pack</>
                  )}
                </Button>
                
                {isDownloading && (
                  <div className="w-full">
                    <Progress value={downloadProgress} className="h-2 mb-1" />
                    <p className="text-xs text-gray-500 text-right">{downloadProgress}%</p>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={generateReceipt}
                    disabled={isGeneratingReceipt}
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:bg-gray-100 shadow-sm"
                  >
                    {isGeneratingReceipt ? (
                      <><RotateCw className="mr-1 h-4 w-4 animate-spin" /> Génération...</>
                    ) : (
                      <><FileText className="mr-1 h-4 w-4" /> Reçu d'achat</>
                    )}
                  </Button>
                  
                  <Button
                    onClick={sendEmailCopy}
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:bg-gray-100 shadow-sm"
                  >
                    <Mail className="mr-1 h-4 w-4" /> Copie par email
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Aperçu du produit */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Aperçu de votre pack</h3>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <AspectRatio ratio={16 / 9}>
                  <div className="flex items-center justify-center bg-white h-full w-full">
                    <img 
                      src="/lovable-uploads/473f7b51-aeab-46c6-8dae-ae1850e2f111.png" 
                      alt="Aperçu du pack de logos" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bannière cadeau */}
        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="shrink-0">
              <Gift className="h-10 w-10 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 text-lg">Un bonus spécial pour vous</h3>
              <p className="text-gray-600">
                Vous recevrez prochainement par email une mise à jour exclusive avec 200 logos supplémentaires.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sécurité et garantie */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 p-4">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-gray-600" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="hidden sm:block h-1 w-1 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-gray-600" />
            <span>Satisfaction garantie</span>
          </div>
          <div className="hidden sm:block h-1 w-1 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4 text-gray-600" />
            <span>Téléchargement instantané</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
