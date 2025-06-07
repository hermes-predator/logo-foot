
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Download, FileText, Palette, Users, Star } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import HeroTestimonialBadge from './HeroTestimonialBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection = ({ onScrollToPayment }: HeroSectionProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleQuickPurchase = () => {
    setIsProcessing(true);
    toast({
      title: "Redirection vers le paiement",
      description: "Vous allez être redirigé vers notre page de paiement sécurisée.",
    });
    
    const returnUrl = `${window.location.origin}/payment-success`;
    window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-100 rounded-full opacity-20 blur-xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                8 600+ logos
              </span>
              <br />
              <span className="text-gray-800">
                de football dans un seul fichier
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              La collection de logos de football la plus complète. Tous les clubs, toutes les équipes nationales, 
              <span className="font-semibold text-gray-800"> organisés et prêts à utiliser</span>.
            </p>
          </div>

          {/* Social proof badge */}
          <div className="flex justify-center">
            <HeroTestimonialBadge />
          </div>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              <div className="p-2 bg-blue-100 rounded-full">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Organisation parfaite</p>
                <p className="text-sm text-gray-600">Par pays et compétitions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              <div className="p-2 bg-emerald-100 rounded-full">
                <Palette className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Haute qualité</p>
                <p className="text-sm text-gray-600">PNG transparents HD</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              <div className="p-2 bg-purple-100 rounded-full">
                <Download className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Accès immédiat</p>
                <p className="text-sm text-gray-600">Téléchargement instantané</p>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button
              onClick={onScrollToPayment}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Voir les détails
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleQuickPurchase}
                  disabled={isProcessing}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg rounded-xl transition-all duration-300 relative"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {isProcessing ? "Redirection..." : "Achat rapide"}
                  <div className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                    9€
                  </div>
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                side="bottom" 
                className="bg-white border border-gray-200/50 shadow-md p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Paiement sécurisé via</span>
                  <img 
                    src="/lovable-uploads/923b6032-194e-45e0-8dbf-9b832712094d.png" 
                    alt="SumUp" 
                    className="h-4 w-auto"
                  />
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span>Collection unique</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>+1000 clients satisfaits</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>Téléchargement instantané</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
