import React, { useState, useEffect } from 'react';
import { Folder, Download, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import PackDescription from './PackDescription';
import HeroTestimonialBadge from './HeroTestimonialBadge';
import JudgeMeBadge from '@/components/blog/JudgeMeBadge';
import { useRecentBuyers } from '@/contexts/RecentBuyersContext';

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
          <div className="md:transform md:-translate-y-10">{/* Alignement ajusté avec le lecteur vidéo */}
            {/* Container avec fond clair pour le branding */}
            <div className="relative bg-gradient-to-br from-white/85 via-gray-50/40 to-white/70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 md:px-12 shadow-[0_1px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.01),inset_0_1px_0_rgba(255,255,255,0.8)] border border-gray-100 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-white/70 before:via-gray-100/50 before:to-gray-50/40 before:-z-10 before:m-[-1px]">{/* Container brandé avec glassmorphism */}
            {/* Titre principal - H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900 text-left">
              <span className="font-black">
                Tous les logos des clubs de football
              </span>
              {' '}
              <span className="underline decoration-2 decoration-gray-800 underline-offset-4">
                en un fichier
              </span>
              {' 📁'}
            </h1>
            
            {/* Phrase marketing */}
            <p className="text-base sm:text-lg md:text-xl text-gray-500 text-left mb-6 sm:mb-8 font-medium">
              Nous offrons le fichier sur la thématique du football le plus complet du marché.
            </p>
            
            
            {/* Titre du produit déplacé ici */}
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
                  className="italic font-extrabold text-gray-900 inline-block text-sm sm:text-base md:text-lg lg:text-xl break-all sm:whitespace-nowrap"
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
            
            {/* Liste des bénéfices produits */}
            <div className="space-y-2 sm:space-y-3 text-left">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium">Fichier ≃ <span className="font-bold">8 800 logos football</span></span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium">Logos uniformes et classés par pays</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium">Livraison instantanée ⚡️</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Prix du fichier : </span>
                  <span className="text-gray-400 line-through text-base sm:text-lg">100€</span>
                  <span className="text-gray-900 font-bold text-base sm:text-lg">9€</span>
                  <span className="bg-gray-600 text-white text-xs px-2.5 py-1 rounded-full font-semibold">Offre limitée</span>
                </div>
              </div>
            </div>
            
            {/* Boutons déplacés dans la colonne de gauche */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mt-6">
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
                className="group relative max-w-sm w-full sm:w-auto rounded-xl bg-gradient-to-b from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-bold px-6 py-4 h-auto text-base shadow-[0_2px_8px_0_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_3px_12px_rgba(0,0,0,0.3)] border border-gray-800/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
                aria-label="Commande sécurisée via SumUp"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  <span className="font-bold">Télécharger avec</span>
                  <img 
                    src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" 
                    alt="SumUp" 
                    className="h-5 brightness-0 invert"
                  />
                </span>
              </Button>
            </div>
            
            {/* Pastille d'urgence - Achats récents */}
            <div className="mt-6 sm:mt-8 md:mt-12 flex justify-start ml-2">
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
          <div className="space-y-3 md:space-y-4 mt-4">
            {/* Vidéo preview du contenu */}
            <div className="relative mb-6 bg-white/70 backdrop-blur-lg rounded-xl overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.015),inset_0_1px_0_rgba(255,255,255,0.8)] border border-white/50 before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-br before:from-white/60 before:via-gray-100/40 before:to-white/30 before:-z-10 before:m-[-1px] md:transform md:-translate-y-12">
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
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                Aperçu du fichier
              </div>
            </div>
            
            {/* Informations du fichier ZIP */}
            <div className="text-center -mt-8 md:transform md:-translate-y-[60px]">
              <p className="text-[9px] sm:text-[10px] font-medium text-gray-500">Fichier ZIP téléchargeable • 63 Mo • 8 774 éléments</p>
            </div>
            
            {/* Bloc des avis clients avec container de confiance */}
            <div className="backdrop-blur-lg rounded-xl px-3 pt-1 pb-3 -mb-1 text-center max-w-md mx-auto md:transform md:-translate-y-[3rem] mt-4 shadow-[0_1px_3px_rgba(0,0,0,0.015),0_1px_2px_rgba(0,0,0,0.01),inset_0_1px_0_rgba(255,255,255,0.8)] border border-teal-100/40 before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-br before:from-teal-100/30 before:via-green-100/40 before:to-emerald-200/50 before:-z-10 before:m-[-1px] relative bg-gradient-to-br from-teal-50/40 via-green-50/50 to-emerald-50/60">
              {/* Décoration avec icône utilisateurs en haut à droite du container vert */}
              <div className="absolute top-0 right-0 text-white rounded-bl-xl rounded-tr-xl px-2.5 py-2" style={{backgroundColor: 'rgb(90, 180, 165)'}}>
                <Users className="w-3 h-3" />
              </div>
              {/* Animation des témoignages */}
              <div className="leading-tight">
                <HeroTestimonialBadge currentIndex={currentTestimonialIndex} />
              </div>
              
            </div>
          </div>
        </div>


        {/* Nouvelles mentions décoratives centrées */}
        <div className="flex flex-wrap items-center justify-center gap-4 -mt-8 text-sm text-gray-600">
          {/* Paiement Sécurisé SumUp */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 ring-1 ring-gray-200/20 shadow-[0_1px_3px_rgba(0,0,0,0.015)] min-w-[200px] h-12 hover:shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-shadow duration-300">
            <img 
              src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" 
              alt="SumUp - Paiement Sécurisé" 
              className="h-4"
            />
            <span className="font-medium">Paiement Sécurisé via SumUp</span>
          </div>

          {/* Point de séparation */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          {/* Fichier stockable sur Google Drive */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 ring-1 ring-gray-200/20 shadow-[0_1px_4px_rgba(0,0,0,0.02)] min-w-[200px] h-12 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            {/* Placeholder pour l'image Google Drive */}
            <img 
              src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" 
              alt="Google Drive" 
              className="h-4"
            />
            <span className="font-medium">Fichier stockable sur votre Google Drive</span>
          </div>

          {/* Point de séparation */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          {/* Note Judge.me avec logo et étoiles */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 ring-1 ring-gray-200/20 shadow-[0_1px_4px_rgba(0,0,0,0.02)] min-w-[200px] h-12 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <img 
              src="/lovable-uploads/fa482252-63e9-474f-8ef0-f601a343d074.png" 
              alt="Judge.me" 
              className="h-4"
            />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" />)}
            </div>
            <span className="font-bold text-gray-700">4.9/5</span>
            <span className="text-sm text-gray-500">(1034 avis)</span>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
