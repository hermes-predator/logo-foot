import React, { useState, useEffect } from 'react';
import { Folder, Download, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import PackDescription from './PackDescription';
import HeroTestimonialBadge from './HeroTestimonialBadge';
import JudgeMeBadge from '@/components/blog/JudgeMeBadge';
import { useRecentBuyers } from '@/contexts/RecentBuyersContext';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

// Données des témoignages partagées (synchronisées avec Testimonials.tsx)
const testimonials = [
  {
    name: "Pierre M.",
    content: "Plus besoin de chercher pendant des heures les logo des club de foot. Tout est là, bien organisé. Merci !",
    rating: 5,
    initials: "PM",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    name: "Yassine B.",
    content: "Ça m'a beaucoup aidé pour mon projet de paris sportifs, merci.",
    rating: 5,
    initials: "YB",
    bgColor: "bg-gradient-to-br from-green-400 to-green-600"
  },
  {
    name: "Quentin D.",
    content: "Tout s'est bien passé, je recommande, merci !",
    rating: 5,
    initials: "QD",
    bgColor: "bg-gradient-to-br from-purple-400 to-purple-600"
  },
  {
    name: "Florent P.",
    content: "Très impressionné par le fichier, vaut son prix 👍.",
    rating: 5,
    initials: "FP",
    bgColor: "bg-gradient-to-br from-orange-400 to-orange-600"
  },
  {
    name: "Maxime L.",
    content: "J'avais besoin des logo des equipe de foot pour un projet. Le fichier est parfait. Que du +++",
    rating: 5,
    initials: "ML",
    bgColor: "bg-gradient-to-br from-red-400 to-red-600"
  },
  {
    name: "Alex G.",
    content: "Vraiment très content de l'avoir acheter, je recommande Logo Foot ! Merci",
    rating: 5,
    initials: "AG",
    bgColor: "bg-gradient-to-br from-teal-400 to-teal-600"
  },
  {
    name: "Emma L.",
    content: "Tout est parfait, merci :)",
    rating: 5,
    initials: "EL",
    bgColor: "bg-gradient-to-br from-pink-400 to-pink-600"
  }
];

const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToPayment
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const recentBuyers = useRecentBuyers();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return <section className="relative pt-14 pb-6 px-2 overflow-hidden">
      {/* Background avec dégradé simple et professionnel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-green-50/60" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Layout en deux colonnes */}
        <div className="grid md:grid-cols-[11fr_9fr] gap-6 items-center mb-2 relative">
          {/* Colonne gauche - H1 et bénéfices */}
          <div className="md:transform md:-translate-y-12">{/* Alignement avec le lecteur vidéo */}
            {/* Container avec fond clair pour le branding */}
            <div className="relative bg-gradient-to-br from-white/85 via-gray-50/40 to-white/70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 md:px-10 shadow-[0_1px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.01),inset_0_1px_0_rgba(255,255,255,0.8)] border border-gray-100 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-white/70 before:via-gray-100/50 before:to-gray-50/40 before:-z-10 before:m-[-1px]">{/* Container brandé avec glassmorphism */}
            {/* Titre principal - H1 */}
            {/* 1. H1 - Accroche principale */}
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4 leading-tight text-gray-900 text-left">
              <span>
                Tous les logos des clubs de football :
              </span>
            </h1>

            {/* Prix block */}
            <div className="text-left mb-2">
              <div className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Valeur du fichier :</div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl text-gray-400 line-through font-medium">100€</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">9€</span>
                <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">Meilleur prix</span>
              </div>
            </div>

            <Separator className="my-4 bg-gray-200" />

            {/* 2. Nom du fichier - Concrétise l'offre */}
            <div className="text-left mb-4">
              <h2 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 flex items-center gap-2"
                style={{
                  animation: 'subtlePulse 3s ease-in-out infinite'
                }}
              >
                <Folder 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 flex-shrink-0" 
                  fill="currentColor"
                />
                <em 
                  className="italic font-extrabold text-gray-900 inline-block text-base sm:text-lg md:text-xl lg:text-2xl break-all sm:whitespace-nowrap"
                >
                  ⦗FRONT-CLOUD⦘~ Football.zip
                </em>
                <style>{`
                  @keyframes subtlePulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                  }
                `}</style>
              </h2>
            </div>
            

            {/* 4. Carrés visuels des bénéfices - Rassure avant l'action */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 text-left mb-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 text-center border border-gray-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">8 800</div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Logos de football</div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 text-center border border-gray-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">60</div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Pays de football</div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 text-center border border-gray-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">🎨</div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">PNG + SVG</div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 text-center border border-gray-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">⚡️</div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Livraison instantanée</div>
              </div>
            </div>
            
            {/* Boutons déplacés dans la colonne de gauche */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-4 sm:px-5 py-3 sm:py-4 h-auto text-sm sm:text-base shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(0,0,0,0.12),inset_0_-1px_0_rgba(255,255,255,0.50),0_2px_6px_rgba(0,0,0,0.06)]" aria-label="Ouvrir le descriptif du ZIP">
                    <Folder className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />
                    Fichier
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      Descriptif du ZIP
                    </DialogTitle>
                     <div className="text-sm text-gray-600 mb-4">
                       <em className="italic">⦗FRONT-CLOUD⦘~ Football.zip</em>
                     </div>
                    <DialogDescription>
                      <PackDescription />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              
              <Button
                size="lg"
                onClick={onScrollToPayment}
                title="Paiement sécurisé avec SumUp - 9€"
                className="group relative max-w-sm w-full sm:w-auto rounded-xl bg-gradient-to-b from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-bold px-6 py-4 h-auto text-base shadow-[0_2px_8px_0_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_3px_12px_rgba(0,0,0,0.3)] border border-gray-800/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 animate-[glow_4s_ease-in-out_infinite]"
                aria-label="Commande sécurisée via SumUp"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-bold">Télécharger maintenant</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </div>
            
            {/* Pastille d'urgence - Achats récents */}
            <div className="flex justify-start ml-2 mt-4 sm:mt-6">
              <div className="inline-flex items-center gap-2 sm:gap-3 text-gray-600 text-sm font-medium">
                <div className="relative">
                  {/* Point vert principal */}
                  <div className="w-2 h-2 bg-green-500 rounded-full relative z-10"></div>
                  {/* Effet de pulsation plus lent et plus grand */}
                  <div className="absolute -inset-1 w-4 h-4 bg-green-400/60 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                </div>
                <span className="text-xs sm:text-sm">
                  <span className="font-extrabold">{recentBuyers}</span> <span className="font-bold">personnes</span> ont acheté récemment
                </span>
              </div>
            </div>
            </div> {/* Fin du container brandé */}
          </div>

          {/* Colonne droite - Vidéo uniquement */}
          <div className="mt-4">
            {/* Container fusionné : Vidéo + Judge.me */}
            <div className="md:transform md:-translate-y-14">
              {/* Vidéo preview du contenu */}
              <div className="relative bg-white/70 backdrop-blur-lg rounded-xl overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.015),inset_0_1px_0_rgba(255,255,255,0.8)] border border-white/50 before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-br before:from-white/60 before:via-gray-100/40 before:to-white/30 before:-z-10 before:m-[-1px]">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="/placeholder.svg"
                >
                  <source src="/videos/preview-zip.mp4" type="video/mp4" />
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <Folder className="w-12 h-12 text-gray-400" />
                  </div>
                </video>
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center justify-between">
                  <span>Aperçu du fichier</span>
                  <span className="text-[10px]">ZIP • 8 774 éléments</span>
                </div>
              </div>
              
              {/* Bloc des avis clients avec container de confiance */}
              <div className="backdrop-blur-lg rounded-xl px-3 pt-4 pb-3 text-center max-w-md mx-auto shadow-[0_1px_3px_rgba(0,0,0,0.015),0_1px_2px_rgba(0,0,0,0.01),inset_0_1px_0_rgba(255,255,255,0.8)] border border-teal-100/40 before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-br before:from-teal-100/30 before:via-green-100/40 before:to-emerald-200/50 before:-z-10 before:m-[-1px] relative bg-gradient-to-br from-teal-50/40 via-green-50/50 to-emerald-50/60 mt-3">
                {/* Animation des témoignages */}
                <div className="leading-tight">
                  <HeroTestimonialBadge currentIndex={currentTestimonialIndex} />
                </div>
                
              </div>
            </div>
          </div>
        </div>


        {/* Nouvelles mentions décoratives centrées */}
        <div className="flex flex-nowrap items-center justify-center gap-3 -mt-10 text-sm text-gray-600">
          {/* Paiement Sécurisé SumUp */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 ring-1 ring-gray-200/20 shadow-[0_1px_3px_rgba(0,0,0,0.015)] h-10 hover:shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-shadow duration-300">
            <img 
              src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" 
              alt="SumUp - Paiement Sécurisé" 
              className="h-4"
            />
            <span className="font-medium whitespace-nowrap">Paiement Sécurisé via SumUp</span>
          </div>

          {/* Point de séparation */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          {/* Fichier stockable sur Google Drive */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 ring-1 ring-gray-200/20 shadow-[0_1px_4px_rgba(0,0,0,0.02)] h-10 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <img 
              src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" 
              alt="Google Drive" 
              className="h-4"
            />
            <span className="font-medium whitespace-nowrap">Fichier stockable sur votre Google Drive</span>
          </div>

          {/* Point de séparation */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          {/* Note TrustPilot avec logo et étoiles */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 ring-1 ring-gray-200/20 shadow-[0_1px_4px_rgba(0,0,0,0.02)] h-10 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <img 
              src={trustpilotLogo} 
              alt="TrustPilot" 
              className="h-4"
            />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3.5 h-3.5 bg-[#00b67a] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-2 h-2 text-white fill-current">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="font-bold text-gray-700 whitespace-nowrap">4.8/5</span>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
