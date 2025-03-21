
import React, { useEffect, useState } from 'react';
import { Download, CheckCircle, Shield, Receipt, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CustomerInfo } from '@/components/CustomerInfoForm';
import { downloadReceipt, ReceiptData } from '@/utils/receiptGenerator';

const PaymentSuccess = () => {
  const { toast } = useToast();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [purchaseDate, setPurchaseDate] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");

  useEffect(() => {
    // Récupérer les informations stockées dans sessionStorage
    const savedCustomerInfo = sessionStorage.getItem('customerInfo');
    const savedPurchaseTimestamp = sessionStorage.getItem('purchaseTimestamp');
    
    if (savedCustomerInfo) {
      setCustomerInfo(JSON.parse(savedCustomerInfo));
    }
    
    if (savedPurchaseTimestamp) {
      const date = new Date(savedPurchaseTimestamp);
      setPurchaseDate(date.toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }));
      
      // Générer un ID de commande basé sur la date et un nombre aléatoire
      const randomId = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
      setOrderId(`FC-${dateStr}-${randomId}`);
    }
  }, []);

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

  const handleDownloadReceipt = () => {
    if (!customerInfo || !orderId || !purchaseDate) return;
    
    const receiptData: ReceiptData = {
      customerInfo,
      orderId,
      date: purchaseDate,
      amount: "10,00€",
      description: "⦗FRONT-CLOUD⦘~ Football.zip - Collection de logos de football en haute qualité"
    };
    
    downloadReceipt(receiptData);
    
    toast({
      title: "Reçu généré",
      description: "Votre reçu a été téléchargé avec succès.",
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

        {customerInfo && (
          <div className="bg-purple-50/50 rounded-xl p-4 border border-purple-100 space-y-2">
            <div className="font-medium text-purple-800 mb-2">Détails de votre commande</div>
            {orderId && <div className="text-sm"><span className="font-medium">Commande:</span> {orderId}</div>}
            {purchaseDate && <div className="text-sm"><span className="font-medium">Date:</span> {purchaseDate}</div>}
            <div className="text-sm"><span className="font-medium">Nom:</span> {customerInfo.fullName}</div>
            <div className="text-sm"><span className="font-medium">Email:</span> {customerInfo.email}</div>
            {customerInfo.phone && <div className="text-sm"><span className="font-medium">Téléphone:</span> {customerInfo.phone}</div>}
            <div className="text-sm"><span className="font-medium">Montant:</span> 10,00€</div>
          </div>
        )}

        <div className="bg-purple-50/50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-5 h-5 text-purple-600" />
            <span>Téléchargement sécurisé et instantané</span>
          </div>
        </div>

        <Button
          onClick={handleDownload}
          size="lg"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
        >
          <Download className="mr-2 h-6 w-6" />
          Télécharger le pack
        </Button>

        {customerInfo && orderId && (
          <Button
            onClick={handleDownloadReceipt}
            variant="outline"
            className="w-full border-purple-200 hover:bg-purple-50 text-purple-700"
          >
            <Receipt className="mr-2 h-5 w-5" />
            Télécharger le reçu
          </Button>
        )}

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
