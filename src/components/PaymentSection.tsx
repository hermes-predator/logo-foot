import React, { useState, useEffect } from 'react';
import { Sparkle, ShieldCheck, CreditCard, Users, Lock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const PaymentSection = () => {
  const [recentBuyers, setRecentBuyers] = useState(25);
  const [showCopied, setShowCopied] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentBuyers((prev) => (prev > 5 ? prev - 1 : 25));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("FRONT2024")
      .then(() => {
        setShowCopied(true);
        toast({
          title: "Code promo copié !",
          description: "Le code promo 'FRONT2024' a été copié dans le presse-papier.",
        });
        setTimeout(() => setShowCopied(false), 3000);
      })
      .catch(err => {
        console.error("Erreur lors de la copie du code promo: ", err);
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de copier le code promo.",
        });
      });
  };

  const handleApplyCoupon = async () => {
    setIsApplying(true);
    // Simuler une vérification asynchrone du coupon
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (couponCode.toUpperCase() === "FRONT2024") {
      setDiscount(0.20); // 20% de réduction
      toast({
        title: "Coupon appliqué !",
        description: "Vous bénéficiez maintenant de 20% de réduction.",
      });
    } else {
      setDiscount(0);
      toast({
        variant: "destructive",
        title: "Coupon invalide",
        description: "Le code promo que vous avez entré n'est pas valide.",
      });
    }
    setIsApplying(false);
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
    });
    setEmail('');
    setMessage('');
  };
  
  return (
    <section id="payment-section" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Téléchargez le fichier ZIP maintenant
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Accédez à plus de 8 600 logos de clubs de football, compétitions et drapeaux du monde entier.
          </p>
        </div>
        
        {/* Main content */}
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          {/* Left column: payment card */}
          <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 text-blue-300/20 rotate-12 translate-y-1/4 -translate-x-1/4">
              <Sparkle className="h-36 w-36" />
            </div>
            <div className="absolute top-0 right-0 text-purple-300/20 rotate-45 -translate-y-1/3 translate-x-1/4">
              <Sparkle className="h-8 w-8" />
            </div>
            
            {/* Badge de personnes ayant récemment acheté - amélioration du contraste */}
            <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1.5 rounded-bl-lg rounded-tr-xl text-xs font-semibold shadow-md flex items-center gap-1.5 animate-[fastBlink_1s_ease-in-out_infinite]">
              <Users className="h-3 w-3" />
              <span>{recentBuyers} personnes ont acheté récemment</span>
            </div>

            {/* Payment details */}
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-5">
                Détails de paiement
              </h3>
              
              {/* Price display */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-medium">Prix total:</span>
                <span className="text-2xl font-bold text-gray-900">
                  {discount > 0 ? (
                    <>
                      <span className="text-sm text-gray-500 line-through mr-2">8€</span>
                      {(8 * (1 - discount)).toFixed(2)}€
                    </>
                  ) : (
                    "8€"
                  )}
                </span>
              </div>
              
              <Separator className="my-3" />

              {/* Coupon code input */}
              <div className="mb-4">
                <Label htmlFor="coupon" className="block text-sm font-medium text-gray-700">
                  Code promo
                </Label>
                <div className="relative mt-1">
                  <Input
                    type="text"
                    id="coupon"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md pr-20"
                    placeholder="FRONT2024"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={isApplying}
                  />
                  <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleApplyCoupon}
                      disabled={isApplying}
                      className="h-8"
                    >
                      {isApplying ? "Appliquer..." : "Appliquer"}
                    </Button>
                  </div>
                </div>
                {/* Copy coupon badge */}
                {!showCopied && (
                  <Badge
                    variant="secondary"
                    className="mt-2 cursor-pointer"
                    onClick={handleCopyClick}
                  >
                    Copier le code
                  </Badge>
                )}
              </div>

              {/* Payment methods */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Moyens de paiement acceptés:
                </h4>
                <img
                  src="/lovable-uploads/170059cc-f820-48d2-9a57-93c93a1ce8a7.png"
                  alt="Moyens de paiement acceptés: Visa, Mastercard, American Express, Apple Pay, Google Pay"
                  className="h-10 object-contain"
                />
              </div>

              {/* Secure checkout button */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="w-full justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-sm gap-4 hover:-translate-y-0.5 px-7 py-2.5 h-auto relative group overflow-hidden">
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 rounded-md blur-md opacity-70 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDuration: '2s' }}></div>
                      <div className="relative">
                        <CreditCard
                          className="h-4 w-4 transition-all animate-[cartMove_1.5s_ease-in-out_infinite]"
                          style={{
                            color: "#FFE082",
                            filter: 'drop-shadow(0 0 3px rgba(255, 224, 130, 0.8))'
                          }}
                        />
                      </div>
                      <span className="relative z-10 font-semibold tracking-wide">
                        Paiement sécurisé via SumUp
                      </span>
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30 opacity-40 group-hover:animate-shine" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center" className="bg-white/95 border border-gray-200 shadow-md p-3">
                    <p className="text-xs font-medium text-gray-800 pb-2 border-b border-gray-100">Téléchargement du fichier ZIP complet</p>
                    <div className="pt-2 flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-gray-400 text-[10px] w-4 text-center">1</span>
                        <span className="text-gray-500 text-xs">Paiement sécurisé via SumUp</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-gray-400 text-[10px] w-4 text-center">2</span>
                        <span className="text-gray-500 text-xs text-left">
                          Accès en page d'après-paiement
                        </span>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          {/* Right column: Features list */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Ce que vous obtenez:
              </h3>
              <p className="text-gray-600">
                Un fichier ZIP organisé et prêt à l'emploi, contenant:
              </p>
            </div>

            {/* Features list */}
            <ul className="list-none pl-0 space-y-3">
              <li className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm group hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <ShieldCheck className="h-3.5 w-3.5 text-green-600 group-hover:text-black transition-colors duration-300" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Licence d'utilisation commerciale</span>
              </li>
              <li className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm group hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <Lock className="h-3.5 w-3.5 text-green-600 group-hover:text-black transition-colors duration-300" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Paiement 100% sécurisé</span>
              </li>
              <li className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200/80 shadow-sm group hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <Download className="h-3.5 w-3.5 text-green-600 group-hover:text-black transition-colors duration-300" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Téléchargement instantané</span>
              </li>
            </ul>
            
            {/* Contact form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Une question ? Contactez-nous !
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Adresse e-mail
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="votre@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Votre message..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full justify-center">
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
