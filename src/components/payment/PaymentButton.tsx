
import React, { useState } from 'react';
import { ShoppingCart, ArrowRight, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const PaymentButton = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }
    
    // Store email in localStorage
    localStorage.setItem('customer_email', email);
    setEmailSubmitted(true);
    
    toast({
      title: "Email enregistré",
      description: "Vous pouvez maintenant finaliser votre commande.",
    });
  };

  const handlePayment = () => {
    if (!emailSubmitted && (!email || !email.includes('@') || !email.includes('.'))) {
      toast({
        title: "Email requis",
        description: "Veuillez d'abord entrer votre email pour recevoir votre produit.",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    toast({
      title: "Redirection vers le paiement",
      description: "Vous allez être redirigé vers notre page de paiement sécurisée.",
    });
    const returnUrl = `${window.location.origin}/payment-success?email=${encodeURIComponent(email)}`;
    // Updated SumUp link
    window.location.href = `https://pay.sumup.com/b2c/QWBH42Z8?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="space-y-4">
      {!emailSubmitted ? (
        <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-3">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-blue-600 mr-2" />
            <label htmlFor="customer-email" className="font-medium text-gray-700">
              Votre email pour recevoir votre produit
            </label>
          </div>
          <div className="flex space-x-2">
            <Input
              id="customer-email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-blue-200 focus:border-blue-400"
              required
            />
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700"
            >
              Valider
            </Button>
          </div>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start">
          <Mail className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
          <div>
            <p className="font-medium text-green-700">Email enregistré</p>
            <p className="text-green-600 text-sm truncate">{email}</p>
          </div>
        </div>
      )}
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-6 text-lg rounded-lg shadow-md border-b-[3px] border-blue-800 hover:shadow-lg transition-all duration-300 active:border-b-0 active:translate-y-0.5 active:scale-[0.99] group h-20 relative overflow-hidden"
              aria-label="Payer 8€ avec paiement sécurisé"
            >
              {/* Effet de brillance sur le bouton */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2.5s_ease-in-out_infinite] z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent animate-[shine_3.5s_ease-in-out_infinite_1s] z-0"></div>
              </div>
              
              <div className="flex items-center justify-center w-full gap-4 relative z-10">
                <ShoppingCart className="h-10 w-10 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
                <div className="flex flex-col items-center">
                  <span className="text-center font-semibold text-2xl">
                    {isProcessing ? "Redirection..." : "Télécharger maintenant (8€)"}
                  </span>
                </div>
                <ArrowRight className="h-9 w-9 transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-2" />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="bg-white/95 border border-gray-200 shadow-md p-3 whitespace-nowrap">
            <p className="text-sm font-medium text-gray-800">Accès immédiat en page d'après-paiement</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default PaymentButton;
