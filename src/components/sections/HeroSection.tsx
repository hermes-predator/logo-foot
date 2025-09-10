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
  return <section className="relative pt-8 pb-6 px-2 overflow-hidden">
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
          <div className="transform -translate-y-12">{/* Alignement ajusté avec le lecteur vidéo */}
            {/* Container avec fond clair pour le branding */}
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-8 px-12 shadow-sm border border-gray-100/60">{/* Container brandé */}
            {/* Titre principal - H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900 text-left">
              Téléchargez tous les{' '}
              <span className="font-black">
                logos des clubs de football
              </span>
              {' '}
              <span className="underline decoration-2 decoration-gray-800 underline-offset-4">
                en une fois
              </span>
            </h1>
            
            {/* Phrase marketing */}
            <p className="text-lg md:text-xl text-gray-500 text-left mb-8 font-semibold">
              Nous proposons le fichier sur le thème du football le plus complet du marché.
            </p>
            
            
            {/* Titre du produit déplacé ici */}
            <div className="text-left mb-4">
              <h2 
                className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 flex items-center gap-2"
                style={{
                  animation: 'subtlePulse 3s ease-in-out infinite'
                }}
              >
                <Folder 
                  className="w-6 h-6 text-gray-900 flex-shrink-0" 
                  fill="currentColor"
                />
                <em 
                  className="italic font-extrabold text-gray-900 inline-block whitespace-nowrap"
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
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Fichier Premium : <span className="font-bold">8 774 logos de football</span></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Logos uniformes et classés par pays</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Livraison instantanée incluse</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium">Prix : </span>
                  <span className="text-gray-400 line-through text-lg">100€</span>
                  <span className="text-gray-900 font-bold text-lg">7.90€</span>
                  <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full font-medium">-95%</span>
                </div>
              </div>
            </div>
            
            {/* Boutons déplacés dans la colonne de gauche */}
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center mt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="w-full md:w-auto rounded-xl bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-5 py-4 h-auto text-base shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(0,0,0,0.12),inset_0_-1px_0_rgba(255,255,255,0.50),0_2px_6px_rgba(0,0,0,0.06)]" aria-label="Ouvrir le descriptif du ZIP">
                    <Folder className="w-6 h-6 mr-1" />
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
                title="Paiement sécurisé avec SumUp - 7.90€"
                className="group relative max-w-sm w-full md:w-auto rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold px-5 py-4 h-auto text-base border-2 border-gray-700/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.15),0_-6px_16px_-6px_rgba(0,0,0,0.25),0_-2px_6px_rgba(0,0,0,0.06)] ring-1 ring-gray-700/30 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 overflow-hidden"
                aria-label="Commande sécurisée via SumUp"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="font-semibold">Télécharger avec</span>
                  <img 
                    src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" 
                    alt="SumUp" 
                    className="h-5 ml-2 brightness-0 invert"
                  />
                </span>
              </Button>
            </div>
            
            {/* Pastille d'urgence - Achats récents */}
            <div className="mt-12 flex justify-start ml-2">
              <div className="inline-flex items-center gap-3 text-gray-600 text-sm font-medium">
                <div className="relative">
                  {/* Point vert principal */}
                  <div className="w-2 h-2 bg-green-500 rounded-full relative z-10"></div>
                  {/* Effet de pulsation plus lent et plus grand */}
                  <div className="absolute -inset-1 w-4 h-4 bg-green-400/60 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                </div>
                <span className="text-xs">
                  <span className="font-extrabold">{recentBuyers}</span> <span className="font-bold">personnes</span> ont acheté récemment
                </span>
              </div>
            </div>
            </div> {/* Fin du container brandé */}
          </div>

          {/* Colonne droite - Vidéo uniquement */}
          <div className="space-y-3 md:space-y-4 md:mt-12">
            {/* Vidéo preview du contenu */}
            <div className="relative mb-6" style={{ transform: 'translateY(-68px)' }}>
              <video 
                className="w-full max-w-md mx-auto rounded-xl shadow-lg border border-gray-200"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="/placeholder.svg"
              >
                <source src="/videos/preview-zip.mp4" type="video/mp4" />
                <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Folder className="w-12 h-12 text-gray-400" />
                </div>
              </video>
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                Aperçu du fichier
              </div>
            </div>
            
            {/* Informations du fichier ZIP */}
            <div className="text-center -mt-8 transform -translate-y-[76px]">
              <p className="text-xs font-medium text-gray-500">Fichier ZIP téléchargeable • 63 Mo • 8 774 éléments</p>
            </div>
            
            {/* Bloc des avis clients avec container de confiance */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl px-3 pt-4 pb-3 -mb-1 text-center max-w-md mx-auto transform translate-y-[-4.7rem]">
              {/* Animation des témoignages */}
              <div className="leading-tight">
                <HeroTestimonialBadge currentIndex={currentTestimonialIndex} />
              </div>
              
            </div>
          </div>
        </div>


        {/* Nouvelles mentions décoratives centrées */}
        <div className="flex flex-wrap items-center justify-center gap-4 -mt-6 text-sm text-gray-600">
          {/* Paiement Sécurisé SumUp */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg border border-gray-200/50 min-w-[200px] h-12">
            <img 
              src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" 
              alt="SumUp - Paiement Sécurisé" 
              className="h-4"
            />
            <span className="font-medium">Paiement Sécurisé SumUp</span>
          </div>

          {/* Point de séparation */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          {/* Fichier stockable sur Google Drive */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg border border-gray-200/50 min-w-[200px] h-12">
            {/* Placeholder pour l'image Google Drive */}
            <img 
              src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" 
              alt="Google Drive" 
              className="h-4"
            />
            <span className="font-medium">Fichier stockable sur Google Drive</span>
          </div>

          {/* Point de séparation */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          {/* Note Judge.me avec logo et étoiles */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg border border-gray-200/50 min-w-[200px] h-12">
            <img 
              src="/lovable-uploads/fa482252-63e9-474f-8ef0-f601a343d074.png" 
              alt="Judge.me" 
              className="h-4"
            />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="font-bold text-gray-700">4.9/5</span>
            <span className="text-sm text-gray-500">(1034 avis)</span>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
