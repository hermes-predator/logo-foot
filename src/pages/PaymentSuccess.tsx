import React, { useEffect, useState } from 'react';
import { Download, CheckCircle, Shield, FileText, RotateCw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { jsPDF } from 'jspdf';

const PaymentSuccess = () => {
  const { toast } = useToast();
  const [customerName, setCustomerName] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isGeneratingReceipt, setIsGeneratingReceipt] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const location = useLocation();
  const [orderId] = useState(() => `FC-${Date.now().toString().slice(-8)}`);
  
  const [receiptFormat, setReceiptFormat] = useState<'html' | 'pdf'>('html');

  useEffect(() => {
    // Récupérer les informations depuis les paramètres d'URL ou localStorage
    const params = new URLSearchParams(location.search);
    const nameParam = params.get('name');
    
    // Priorité aux paramètres d'URL, puis localStorage
    const name = nameParam || localStorage.getItem('customer_name') || '';
    
    setCustomerName(name);
    
    // Afficher un toast de bienvenue sans mentionner le nom du client
    toast({
      title: "Confirmation",
      description: "Votre commande est prête.",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    });
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
      
      if (receiptFormat === 'html') {
        // Générer le reçu HTML
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
                <div class="logo">⦗FRONT-CLOUD⦘~ Football.zip</div>
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
              </div>
              
              <div class="product">
                <div class="info-row">
                  <div><strong>Produit</strong></div>
                  <div><strong>Prix</strong></div>
                </div>
                <div class="info-row">
                  <div>⦗FRONT-CLOUD⦘~ Football.zip</div>
                  <div>8,00 €</div>
                </div>
              </div>
              
              <div class="total">Total: 8,00 €</div>
              
              <div class="footer">
                <p>Merci pour votre confiance. Pour toute question, contactez notre service client : contact@logo-foot.com</p>
                <p>© ${new Date().getFullYear()} LOGO-FOOT - Tous droits réservés.</p>
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
      } else {
        // Générer le reçu PDF
        const doc = new jsPDF();
        
        // Paramètres de base
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("FRONT-CLOUD ~ Football.zip", 105, 20, { align: "center" });
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(14);
        doc.text("Reçu d'achat", 105, 30, { align: "center" });
        
        // Informations de commande
        doc.setFontSize(11);
        doc.text(`Numéro de commande: ${orderId}`, 20, 50);
        doc.text(`Date: ${dateTime}`, 20, 60);
        
        // Ligne de séparation
        doc.setDrawColor(220, 220, 220);
        doc.line(20, 70, 190, 70);
        
        // En-têtes produit
        doc.setFont("helvetica", "bold");
        doc.text("Produit", 20, 80);
        doc.text("Prix", 170, 80);
        
        // Produit - utiliser une version compatible PDF du nom du produit
        doc.setFont("helvetica", "normal");
        doc.text("FRONT-CLOUD ~ Football.zip", 20, 90);
        doc.text("8,00 €", 170, 90);
        
        // Ligne de séparation
        doc.line(20, 100, 190, 100);
        
        // Total
        doc.setFont("helvetica", "bold");
        doc.text("Total: 8,00 €", 170, 110);
        
        // Pied de page
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text("Merci pour votre confiance. Pour toute question, contactez notre service client : contact@logo-foot.com", 105, 240, { align: "center" });
        doc.text(`© ${new Date().getFullYear()} LOGO-FOOT - Tous droits réservés.`, 105, 250, { align: "center" });
        doc.text("Ce reçu a été généré automatiquement et ne constitue pas une facture officielle.", 105, 260, { align: "center" });
        
        // Enregistrer le PDF
        doc.save(`recu-front-cloud-${orderId.slice(-6)}.pdf`);
      }
      
      toast({
        title: "Reçu généré",
        description: `Votre reçu a été téléchargé en format ${receiptFormat.toUpperCase()}.`,
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-10">
      <Card className="max-w-4xl w-full space-y-8 bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        {/* En-tête avec statut de commande */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-green-50 p-4 rounded-full">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Paiement confirmé <span className="text-green-600">8,00€</span>
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
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Détails de votre commande
                </h3>
                <p className="text-gray-700 py-1">
                  Produit : <span className="font-medium">⦗FRONT-CLOUD⦘~ Football.zip</span>
                </p>
                <p className="text-gray-700 py-1">
                  Taille : <span className="font-medium">63 Mo</span>
                </p>
                <p className="text-gray-700 py-1">
                  Date : <span className="font-medium">{new Date().toLocaleString('fr-FR')}</span>
                </p>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Assistance</h3>
              <p className="text-gray-700 text-sm">
                Si vous avez besoin d'aide avec votre commande, n'hésitez pas à nous contacter à <span className="font-medium text-blue-600 hover:underline">contact@logo-foot.com</span>
              </p>
            </div>
          </div>

          {/* Section de téléchargement */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Téléchargements</h3>
              
              <div className="space-y-3">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-300 text-2xl py-6 h-auto font-medium"
                >
                  {isDownloading ? (
                    <><RotateCw className="mr-2 h-8 w-8 animate-spin" /> Préparation...</>
                  ) : (
                    <><Download className="mr-2 h-8 w-8 animate-[cartMove_1.5s_ease-in-out_infinite] hover:scale-110 transition-transform" /> Télécharger le fichier ZIP</>
                  )}
                </Button>
                
                {isDownloading && (
                  <div className="w-full">
                    <Progress value={downloadProgress} className="h-2 mb-1 bg-blue-100" />
                    <p className="text-xs text-gray-500 text-right">{downloadProgress}%</p>
                  </div>
                )}
                
                <div className="w-full space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Format du reçu:</span>
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant={receiptFormat === 'html' ? "default" : "outline"} 
                        size="sm"
                        onClick={() => setReceiptFormat('html')}
                        className={`text-xs h-7 px-2 ${receiptFormat === 'html' ? 'bg-gray-600 hover:bg-gray-700' : ''}`}
                      >
                        HTML
                      </Button>
                      <Button 
                        variant={receiptFormat === 'pdf' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setReceiptFormat('pdf')}
                        className={`text-xs h-7 px-2 ${receiptFormat === 'pdf' ? 'bg-gray-600 hover:bg-gray-700' : ''}`}
                      >
                        PDF
                      </Button>
                    </div>
                  </div>
                  <Button
                    onClick={generateReceipt}
                    disabled={isGeneratingReceipt}
                    variant="outline"
                    className="w-full border-gray-200 text-gray-700 hover:bg-gray-100 shadow-sm"
                  >
                    {isGeneratingReceipt ? (
                      <><RotateCw className="mr-1 h-4 w-4 animate-spin" /> Génération...</>
                    ) : (
                      <><FileText className="mr-1 h-4 w-4" /> Reçu d'achat</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Conteneur d'avertissement ambré avec texte modifié */}
            <div className="bg-amber-50 rounded-lg p-5 border border-amber-200 hover:border-amber-300 transition-colors shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-1">Téléchargez votre fichier maintenant</h3>
                  <p className="text-amber-700 text-sm">
                    Assurez-vous de télécharger votre fichier immédiatement afin d'éviter de le perdre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sécurité et garantie */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 p-4 mt-2 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-2 hover:text-gray-800 transition-colors">
            <Shield className="h-4 w-4 text-gray-600" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="hidden sm:block h-1 w-1 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-2 hover:text-gray-800 transition-colors">
            <CheckCircle className="h-4 w-4 text-gray-600" />
            <span>Satisfaction garantie</span>
          </div>
          <div className="hidden sm:block h-1 w-1 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-2 hover:text-gray-800 transition-colors">
            <Download className="h-4 w-4 text-gray-600" />
            <span>Téléchargement instantané</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
