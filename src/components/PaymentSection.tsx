import React, { useState, useEffect } from 'react';
import { ShoppingCart, Timer, Shield, Wallet, ShieldCheck, HandHeart, Download, FileArchive, RefreshCcw, Info, Check, Cloud, CloudUpload, Trophy, Sparkle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const PaymentSection = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 59,
    seconds: 59
  });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        // Reset timer when it reaches 0
        return { hours: 2, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handlePayment = () => {
    setIsProcessing(true);
    toast({
      title: "Redirection vers le paiement",
      description: "Vous allez être redirigé vers notre page de paiement sécurisée.",
    });
    const returnUrl = `${window.location.origin}/payment-success`;
    // Updated SumUp link
    window.location.href = `https://pay.sumup.com/b2c/QWBH42Z8?return_url=${encodeURIComponent(returnUrl)}`;
  };

  const features = [
    {
      icon: FileArchive,
      text: "Fichier de + de 8 600 ressources"
    },
    {
      icon: Check,
      text: "Contenu parfaitement organisé",
      className: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Download,
      text: "Téléchargement instantané"
    },
    {
      icon: Check,
      text: "Gain de temps",
      className: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Wallet,
      text: "Prix accessible"
    },
    {
      icon: Check,
      text: "Valeur à votre actif",
      className: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-6 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Prêt à tout recevoir ?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Recevez-le instantanément après paiement
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div 
          className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-blue-200"
          role="article"
          aria-label="Information sur le paiement sécurisé"
        >
          <ShieldCheck className="w-6 h-6 text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          <h3 className="font-medium mb-1 text-sm">Paiement Sécurisé</h3>
          <p className="text-xs text-gray-600 text-center">Transactions protégées via SumUp</p>
        </div>
        <div 
          className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-blue-200"
          role="article"
          aria-label="Information sur le téléchargement instantané"
        >
          <Download className="w-6 h-6 text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          <h3 className="font-medium mb-1 text-sm">Téléchargement instantané</h3>
          <p className="text-xs text-gray-600 text-center">Page d'après-paiement</p>
        </div>
        <div 
          className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-blue-200"
          role="article"
          aria-label="Information sur le support client"
        >
          <HandHeart className="w-6 h-6 text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          <h3 className="font-medium mb-1 text-sm">Support Réactif</h3>
          <p className="text-xs text-gray-600 text-center">Une équipe à votre écoute</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <div className="relative p-6 md:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500 ease-out">
            <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
              Pack Complet
            </div>
            
            {/* Content */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl md:text-3xl font-extrabold text-black">⦗FRONT-CLOUD⦘~ Football.zip</h3>
              </div>
              <p className="text-gray-600">La plus grande collection de logos de football en haute qualité</p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 text-gray-700">
                  <div className={`p-1.5 rounded-lg ${feature.className || 'bg-blue-50'}`}>
                    <feature.icon className={`h-5 w-5 ${feature.iconColor || 'text-blue-600'}`} />
                  </div>
                  <span className="text-[15px]">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Timer section - version épurée */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-gray-700">Cette offre expire dans:</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-800">
                  <div className="bg-white w-10 h-10 rounded-md flex items-center justify-center text-xl font-bold shadow-sm">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <span className="text-xl font-bold">:</span>
                  <div className="bg-white w-10 h-10 rounded-md flex items-center justify-center text-xl font-bold shadow-sm">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <span className="text-xl font-bold">:</span>
                  <div className="bg-white w-10 h-10 rounded-md flex items-center justify-center text-xl font-bold shadow-sm">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 mb-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-bold text-black">10,00€</span>
                <span className="text-gray-500 ml-2">TVA incluse</span>
              </div>
              <div>
                <div className="group">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-green-50 border border-green-100 hover:bg-green-100 transition-colors">
                        <RefreshCcw className="h-3.5 w-3.5 text-green-600" />
                        <span className="text-sm font-medium whitespace-nowrap text-green-700">
                          Satisfait ou remboursé
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px] p-4 space-y-2 text-sm bg-white border border-gray-100 shadow-lg rounded-lg">
                      <p className="font-semibold text-emerald-700">Votre satisfaction est importante.</p>
                      <div className="space-y-2 text-gray-600">
                        <p>Si vous n'êtes pas satisfait, contactez-nous dans les 14 jours suivant votre achat.</p>
                        <p>Veuillez noter qu'en matière de produits digitaux, nous n'avons pas d'obligations juridiques à vous proposer un retour.</p>
                        <p>Cependant, si vous considérez que le produit ne vous convient pas, nous pouvons émettre un ordre de remboursement intégral sur demande.</p>
                        <p className="mt-4 text-gray-500 text-[13px]">
                          Pour cela, contactez-nous par email "contact@logo-foot.com" en mentionnant :
                          <ul className="list-disc ml-4 mt-1 space-y-1">
                            <li>Votre nom et prénom</li>
                            <li>La date et l'heure d'achat</li>
                            <li>Une preuve d'achat</li>
                          </ul>
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-0"
              aria-label="Payer 10,00€ avec paiement sécurisé"
            >
              <ShoppingCart className="mr-2 h-6 w-6" aria-hidden="true" />
              {isProcessing ? "Redirection..." : "Payer 10,00€"}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-base text-gray-500 flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          Paiement sécurisé via SumUp
        </p>
      </div>
    </div>
  );
};

export default PaymentSection;
