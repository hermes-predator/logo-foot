import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Folder, FolderArchive, Download, ArrowRight, Star, Users, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import PackDescription from './PackDescription';
import HeroTestimonialBadge from './HeroTestimonialBadge';
import JudgeMeBadge from '@/components/blog/JudgeMeBadge';
import { useRecentBuyers } from '@/contexts/RecentBuyersContext';
import { useDownloadCount } from '@/contexts/DownloadCountContext';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

// Données des témoignages partagées (synchronisées avec Testimonials.tsx)

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

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const goToPayment = () => navigate('/payment');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const recentBuyers = useRecentBuyers();
  const downloadCount = useDownloadCount();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return <section className="relative pt-4 pb-2 px-2 overflow-hidden">
      {/* Background avec dégradé simple et professionnel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-green-50/60" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Layout en deux colonnes */}
        <div className="grid md:grid-cols-[12fr_8fr] gap-4 items-stretch mb-2 relative">
          {/* Colonne gauche - H1 et bénéfices */}
          <div>{/* Alignement naturel avec le lecteur vidéo */}
            {/* Container avec fond clair pour le branding */}
            <div className="relative bg-gradient-to-br from-white/85 via-gray-50/40 to-white/70 backdrop-blur-lg rounded p-[14px] sm:p-5 md:p-6 md:px-7 shadow-[0_1px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.01),inset_0_1px_0_rgba(255,255,255,0.8)] border border-gray-100 before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-br before:from-white/70 before:via-gray-100/50 before:to-gray-50/40 before:-z-10 before:m-[-1px]">{/* Container brandé avec glassmorphism */}

            {/* 2. Nom du fichier - Concrétise l'offre */}
            <div className="text-left mb-1">
              <h2 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 flex items-center gap-2"
                style={{
                  animation: 'subtlePulse 3s ease-in-out infinite'
                }}
              >
                <Folder 
                  className="w-7 h-7 sm:w-8 sm:h-8 text-black flex-shrink-0" 
                  fill="black"
                  strokeWidth={1.5}
                />
                <span 
                  className="font-extrabold not-italic text-gray-900 inline-block text-base sm:text-lg md:text-xl lg:text-2xl break-all sm:whitespace-nowrap"
                >
                  ⦗FRONT-CLOUD⦘~ Football.zip
                </span>
                <style>{`
                  @keyframes subtlePulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                  }
                `}</style>
              </h2>
            </div>

            {/* 4. Carrés visuels des bénéfices - Rassure avant l'action */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-2 mt-2 max-w-[380px] sm:max-w-[450px]">
              <div className="bg-white rounded px-8 py-1.5 border border-gray-200 shadow-sm flex flex-col items-center justify-center">
                <div className="text-sm sm:text-base font-bold text-gray-900">+1</div>
                <div className="text-[7px] sm:text-[9px] text-gray-600 font-medium leading-tight whitespace-nowrap">Fichier football</div>
              </div>
              <div className="bg-white rounded px-8 py-1.5 border border-gray-200 shadow-sm flex flex-col items-center justify-center">
                <div className="text-sm sm:text-base font-bold text-gray-900">+70</div>
                <div className="text-[7px] sm:text-[9px] text-gray-600 font-medium leading-tight whitespace-nowrap">Sous-fichiers</div>
              </div>
              <div className="bg-white rounded px-8 py-1.5 border border-gray-200 shadow-sm flex flex-col items-center justify-center">
                <div className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">+8 800</div>
                <div className="text-[7px] sm:text-[9px] text-gray-600 font-medium leading-tight whitespace-nowrap">Logos de football</div>
              </div>
              <div className="bg-white rounded px-8 py-1.5 border border-gray-200 shadow-sm flex flex-col items-center justify-center">
                <div className="text-sm sm:text-base font-bold text-gray-900">+BONUS</div>
                <div className="text-[7px] sm:text-[9px] text-gray-600 font-medium leading-tight whitespace-nowrap">Fichiers connexes</div>
              </div>
            </div>

            {/* Boutons déplacés dans la colonne de gauche */}
            <div className="flex flex-col gap-3 mt-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto rounded bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 sm:px-7 py-5 h-[72px] text-sm sm:text-base shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(0,0,0,0.12),inset_0_-1px_0_rgba(255,255,255,0.50),0_2px_6px_rgba(0,0,0,0.06)]" aria-label="Ouvrir le descriptif du ZIP">
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
                         <span className="font-extrabold not-italic">⦗FRONT-CLOUD⦘~ Football.zip</span>
                       </div>
                      <DialogDescription>
                        <PackDescription />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                
                <Button
                  size="lg"
                  onClick={goToPayment}
                  title="Paiement sécurisé avec SumUp - 5€"
                  className="group relative w-full sm:w-auto sm:min-w-[297px] rounded bg-gradient-to-b from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-bold px-8 py-4 h-[72px] text-base shadow-[0_2px_8px_0_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_3px_12px_rgba(0,0,0,0.3)] border border-gray-800/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 overflow-hidden"
                  aria-label="Commande sécurisée via SumUp"
                >
                  {/* Effet de lumière réfléchissante - identique à PaymentButton */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shine_2.5s_ease-in-out_infinite]"></div>
                  <span className="relative flex flex-col items-center justify-center w-full">
                    <span className="flex items-center gap-3">
                      <span className="font-bold">Télécharger maintenant</span>
                      <ArrowRight 
                        className="w-5 h-5 drop-shadow-sm transition-all duration-300 group-hover:translate-x-1"
                      />
                    </span>
                    <span className="flex items-center gap-1 text-[9px] text-white/50 font-normal -mt-0.5">
                      <Download className="!w-[10px] !h-[10px]" />
                      {downloadCount.toLocaleString('fr-FR')} downloads •
                      <img 
                        src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" 
                        alt="SumUp" 
                        className="h-3.5 brightness-0 invert"
                      />
                    </span>
                  </span>
                </Button>
              </div>
              
            </div>
            {/* Titre + Prix block - en dessous des boutons */}
            <h1 className="text-[9px] sm:text-[10px] md:text-[11px] font-bold mb-1 leading-tight text-gray-700 text-left mt-4">
              <span>
                Télécharger tous les <span className="underline">logos des clubs de football</span> en 2 MINS ⏱️:
              </span>
            </h1>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-sm sm:text-base font-semibold text-gray-400 line-through tracking-tight">86€</span>
                <span className="bg-red-100 text-red-700 text-[7px] sm:text-[8px] font-bold px-1 py-0.5 rounded-full">Valeur réelle</span>
                <span className="w-px h-3 bg-gray-300"></span>
                <span className="font-serif text-base sm:text-lg font-bold text-gray-900 tracking-tight">5€</span>
                <span className="bg-green-100 text-green-700 text-[7px] sm:text-[8px] font-bold px-1 py-0.5 rounded-full">Cotation actuelle</span>
              </div>
            </div>

            {/* Texte de réassurance sous les boutons */}
            <div className="mt-2 text-[8px] sm:text-[10px] text-gray-500 text-left">
              <div className="font-bold text-gray-700 text-[9px] sm:text-[11px]">Bon à savoir :</div>
              <div>◼︎ Le fichier est délivré dans l'immédiat, inscription non requise</div>
              <div>◼︎ Logo-foot.com est un site français sécurisé : <span className="font-bold">contact@logo-foot.com</span></div>
            </div>

            {/* Badges de confiance minimalistes */}
            <div className="flex flex-wrap items-center gap-2.5 mt-4 text-[10px] sm:text-[11px] text-gray-500">
              <div className="flex items-center gap-1.5">
                <img src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" alt="SumUp" className="h-3.5" />
                <span>Paiement Sécurisé</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <img src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" alt="Google Drive" className="h-3.5" />
                <span>Stockable sur Drive</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <img src={trustpilotLogo} alt="TrustPilot" className="h-3.5" />
                <span className="font-medium">4.8/5</span>
              </div>
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
                  <span className="font-extrabold">{recentBuyers}</span> <span className="font-bold">personnes</span> ont téléchargé récemment
                </span>
              </div>
            </div>
            </div> {/* Fin du container brandé */}
          </div>

          {/* Colonne droite - Vidéo uniquement */}
          <div className="h-full flex flex-col">
            {/* Container fusionné : Vidéo + Judge.me */}
            <div className="h-full flex flex-col">
              {/* Vidéo preview du contenu */}
              <div className="relative flex-1 bg-white/70 backdrop-blur-lg rounded overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.015),inset_0_1px_0_rgba(255,255,255,0.8)] border border-white/50 before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-br before:from-white/60 before:via-gray-100/40 before:to-white/30 before:-z-10 before:m-[-1px] group">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="auto"
                >
                  <source src="https://www.logo-foot.com/videos/preview-zip.mp4" type="video/mp4" />
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <Folder className="w-12 h-12 text-gray-400" />
                  </div>
                </video>
                
                {/* Overlay cadenas - disparaît au survol */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                    <Lock className="w-8 h-8 text-gray-600 animate-wiggle" />
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center justify-between">
                  <span>Aperçu du fichier</span>
                  <span className="text-[10px]">ZIP • 8 774 éléments</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Carrousel des avis clients */}
        <div className="w-full mt-4 mb-2">
          <HeroTestimonialBadge />
        </div>


      </div>
    </section>;
};
export default HeroSection;
