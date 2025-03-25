import React, { useState } from 'react';
import { Shield, Wallet, ShieldCheck, HandHeart, Download, Folder, RefreshCcw, Info, Check, Cloud, CloudUpload, Trophy, Sparkle, Users, Lock } from 'lucide-react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "./ui/separator";

const PaymentSection = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

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
      icon: Folder,
      text: "Fichier de 8 600+ ressources"
    },
    {
      icon: Check,
      text: "Fichier organisé",
      className: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Wallet,
      text: "Prix accessible"
    },
    {
      icon: Check,
      text: "Gain de temps",
      className: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Download,
      text: "Téléchargement instantané"
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
          <p className="text-xs text-gray-600 text-center">Transactions via SumUp</p>
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
          <div className="relative p-6 md:p-8 pb-0 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white shadow-sm hover:shadow-md transition-all duration-500 ease-out hover:scale-[1.01] hover:border-blue-200">
            {/* Animated stars - in different positions */}
            <div className="absolute -bottom-4 -left-4 text-blue-400 opacity-20 animate-ping" 
                 style={{ animationDuration: '4s', animationIterationCount: 'infinite', animationDelay: '1s' }}>
              <Sparkle className="h-12 w-12" />
            </div>
            <div className="absolute top-1/2 -left-6 text-blue-400 opacity-20 animate-ping" 
                 style={{ animationDuration: '3.5s', animationIterationCount: 'infinite', animationDelay: '0.5s' }}>
              <Sparkle className="h-8 w-8" />
            </div>
            <div className="absolute top-1/2 -right-6 text-blue-400 opacity-20 animate-ping" 
                 style={{ animationDuration: '3.2s', animationIterationCount: 'infinite', animationDelay: '1.5s' }}>
              <Sparkle className="h-8 w-8" />
            </div>
            <div className="absolute bottom-1/3 -right-4 text-blue-400 opacity-20 animate-ping" 
                 style={{ animationDuration: '4.2s', animationIterationCount: 'infinite', animationDelay: '2s' }}>
              <Sparkle className="h-10 w-10" />
            </div>
            <div className="absolute -bottom-6 right-1/4 text-blue-400 opacity-20 animate-ping" 
                 style={{ animationDuration: '3.8s', animationIterationCount: 'infinite', animationDelay: '0.8s' }}>
              <Sparkle className="h-8 w-8" />
            </div>
            <div className="absolute bottom-2/3 -left-8 text-blue-400 opacity-20 animate-ping" 
                 style={{ animationDuration: '3.6s', animationIterationCount: 'infinite', animationDelay: '1.2s' }}>
              <Sparkle className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-8 left-1/3 text-blue-400 opacity-20 animate-ping" 
                 style={{ animationDuration: '4.5s', animationIterationCount: 'infinite', animationDelay: '0.3s' }}>
              <Sparkle className="h-10 w-10" />
            </div>
            <div className="absolute top-1/4 -left-10 text-blue-400 opacity-20 animate-ping" 
                 style={{ animationDuration: '3.9s', animationIterationCount: 'infinite', animationDelay: '1.8s' }}>
              <Sparkle className="h-8 w-8" />
            </div>
            
            {/* Bannière de confiance avec nombre d'utilisateurs - UPDATED TEXT HERE */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1.5 rounded-bl-lg rounded-tr-xl text-sm font-medium animate-fade-in flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              <span>4,376+ clients satisfaits</span>
            </div>
            
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

            {/* Prix simplifié avec prix barré - AMÉLIORÉ : style visuel du conteneur */}
            <div className="flex flex-col md:flex-row items-center justify-between p-5 mb-6 rounded-xl bg-gradient-to-r from-blue-50 via-blue-50/80 to-sky-50/90 border border-blue-100 shadow-inner relative overflow-hidden">
              {/* Effet de brillance subtil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              
              <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div>
                    {/* Prix normal barré */}
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-gray-500 text-lg line-through font-medium">40,00€</span>
                      <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-md text-xs font-semibold">Valeur réelle</span>
                    </div>
                    
                    {/* Nouveau prix mis en valeur */}
                    <div className="flex items-center gap-2">
                      <span className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-sm">10,00€</span>
                      <span className="text-gray-500 text-sm ml-1">TVA incluse</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-100 hover:bg-green-200 hover:shadow-md transition-all duration-300 transform hover:translate-y-[-1px] border border-green-200">
                      <RefreshCcw className="h-4 w-4 text-emerald-600 group-hover:rotate-180 transition-transform duration-500" />
                      <span className="text-sm whitespace-nowrap text-emerald-700 font-medium">
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

            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95 group disabled:opacity-75 disabled:cursor-not-allowed border-0 mb-0"
              aria-label="Payer 10,00€ avec paiement sécurisé"
            >
              <Lock className="mr-2 h-8 w-8 transition-all duration-300 group-hover:rotate-[-8deg]" aria-hidden="true" />
              {isProcessing ? "Redirection..." : "Payer 10,00€"}
            </Button>
          </div>
          
          <div className="flex items-center justify-center mt-6 flex-wrap gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-sm text-gray-700">Paiement sécurisé</span>
              <img 
                src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" 
                alt="SumUp Secure Payment" 
                className="h-5" 
              />
            </div>
            
            <Separator orientation="vertical" className="h-5 bg-gray-300 mx-1" />
            
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/34a0dfdd-f40d-4cc1-bb23-6ad3f96a2281.png" 
                alt="Cartes de paiement acceptées" 
                className="h-12" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
