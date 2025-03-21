
import { CustomerInfo } from '@/components/CustomerInfoForm';

export interface ReceiptData {
  customerInfo: CustomerInfo;
  orderId: string;
  date: string;
  amount: string;
  description: string;
}

// Génère un HTML pour le reçu que nous pourrons convertir en PDF côté client
export const generateReceiptHTML = (data: ReceiptData): string => {
  const { customerInfo, orderId, date, amount, description } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Reçu de paiement - FRONT-CLOUD</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .receipt {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 20px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #3b82f6;
        }
        .details {
          margin-bottom: 30px;
        }
        .details-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .label {
          font-weight: bold;
          width: 150px;
        }
        .value {
          flex: 1;
        }
        .footer {
          margin-top: 40px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }
        .amount {
          font-size: 22px;
          font-weight: bold;
          color: #2563eb;
        }
        .thank-you {
          margin-top: 40px;
          text-align: center;
          font-size: 18px;
          color: #4b5563;
        }
      </style>
    </head>
    <body>
      <div class="receipt">
        <div class="header">
          <div class="logo">FRONT-CLOUD</div>
          <div>Reçu de paiement</div>
        </div>
        
        <div class="details">
          <div class="details-row">
            <div class="label">Numéro de commande:</div>
            <div class="value">${orderId}</div>
          </div>
          <div class="details-row">
            <div class="label">Date:</div>
            <div class="value">${date}</div>
          </div>
          <div class="details-row">
            <div class="label">Client:</div>
            <div class="value">${customerInfo.fullName}</div>
          </div>
          <div class="details-row">
            <div class="label">Email:</div>
            <div class="value">${customerInfo.email}</div>
          </div>
          ${customerInfo.phone ? `
          <div class="details-row">
            <div class="label">Téléphone:</div>
            <div class="value">${customerInfo.phone}</div>
          </div>
          ` : ''}
        </div>
        
        <h3>Détails de l'achat</h3>
        <div class="details">
          <div class="details-row">
            <div class="label">Description:</div>
            <div class="value">${description}</div>
          </div>
          <div class="details-row">
            <div class="label">Montant:</div>
            <div class="value amount">${amount}</div>
          </div>
          <div class="details-row">
            <div class="label">Méthode de paiement:</div>
            <div class="value">Carte de crédit (via SumUp)</div>
          </div>
        </div>
        
        <div class="thank-you">
          Merci pour votre achat !
        </div>
        
        <div class="footer">
          <p>FRONT-CLOUD - Collection de logos de football en haute qualité</p>
          <p>Pour toute question: contact@logo-foot.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Fonction pour télécharger le reçu au format HTML (peut être ouvert dans un navigateur)
export const downloadReceipt = (data: ReceiptData) => {
  const html = generateReceiptHTML(data);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `recu-paiement-${data.orderId}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
