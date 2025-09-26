
import React from 'react';
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import { jsPDF } from "jspdf";

interface ReceiptDownloadProps {
  purchaseDate?: Date;
  productName?: string;
  price?: string;
  orderNumber?: string;
  onDownloadComplete?: () => void;
}

const ReceiptDownload = ({
  purchaseDate = new Date(),
  productName = "⦗FRONT-CLOUD⦘~ Football.zip",
  price = "11.90€",
  orderNumber = `FC-${Date.now().toString().slice(-6)}`,
  onDownloadComplete
}: ReceiptDownloadProps) => {

  const generateReceipt = () => {
    const doc = new jsPDF();
    
    // Add logo/header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("FRONT-CLOUD", 105, 20, { align: "center" });
    
    // Receipt title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("REÇU D'ACHAT", 105, 35, { align: "center" });
    
    // Horizontal line
    doc.setLineWidth(0.5);
    doc.line(20, 40, 190, 40);
    
    // Customer information section
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    // Date formatting
    const formattedDate = purchaseDate.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const formattedTime = purchaseDate.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    
    // Order information
    doc.text(`N° de commande: ${orderNumber}`, 20, 55);
    doc.text(`Date: ${formattedDate} à ${formattedTime}`, 20, 65);
    
    // Purchase details section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Détail de l'achat:", 20, 85);
    
    // Table header
    doc.setLineWidth(0.2);
    doc.line(20, 90, 190, 90);
    
    doc.setFontSize(12);
    doc.text("Produit", 25, 100);
    doc.text("Prix", 160, 100);
    
    doc.line(20, 105, 190, 105);
    
    // Product and price - Using a sanitized product name to avoid display issues
    doc.setFont("helvetica", "normal");
    doc.text("FRONT-CLOUD Football.zip", 25, 115);
    doc.text(price, 160, 115);
    
    // Total
    doc.line(20, 125, 190, 125);
    doc.setFont("helvetica", "bold");
    doc.text("Total", 130, 135);
    doc.text(price, 160, 135);
    
    // Footer
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Merci pour votre achat chez Logo-Foot", 105, 170, { align: "center" });
    doc.text("Pour toute question, contactez-nous à contact@logo-foot.com", 105, 180, { align: "center" });
    doc.text("logo-foot.com", 105, 190, { align: "center" });
    
    // Save the PDF
    doc.save(`recu-front-cloud-${orderNumber}.pdf`);
    
    // Call the callback when download is complete
    if (onDownloadComplete) {
      onDownloadComplete();
    }
  };

  return (
    <Button 
      onClick={generateReceipt}
      variant="outline" 
      className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-all duration-300 hover:border-indigo-300 hover:text-indigo-600 shadow-sm group h-20 text-xl"
      size="lg"
    >
      <Ticket className="h-8 w-8 mr-3 text-gray-500 group-hover:text-indigo-500 transition-colors" />
      <span className="relative">Télécharger votre reçu</span>
    </Button>
  );
};

export default ReceiptDownload;
