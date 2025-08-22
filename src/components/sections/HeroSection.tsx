import React, { useState, useEffect } from 'react';
import { Folder, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PackDescription from './PackDescription';
import HeroTestimonialBadge from './HeroTestimonialBadge';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return <section className="relative pt-8 pb-6 px-4 overflow-hidden">
      {/* Background avec dégradé simple et professionnel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-green-50/60" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Layout en deux colonnes */}
        <div className="grid md:grid-cols-2 gap-6 items-center mb-2 relative">
          {/* Colonne gauche - H1 et Bénéfices produits */}
          <div className="space-y-4">
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
            <p className="text-lg md:text-xl text-gray-600 text-left mb-2 font-medium">
              Nous proposons le fichier le plus complet du marché.
            </p>
            
            {/* Liste des bénéfices produits */}
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Tous les logos de football triés par pays</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">8 774 logos au format PNG</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Prix : 5€ TTC (Valeur {'>'}100€)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Téléchargement immédiat</span>
              </div>
            </div>
          </div>

          {/* Trait de séparation vertical */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          {/* Colonne droite - Actions avec boutons */}
          <div className="space-y-4 md:space-y-5 md:mt-2">
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800"><em className="italic font-extrabold">⦗FRONT-CLOUD⦘~ Football.zip</em></h2>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center md:ml-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="w-full md:w-auto rounded-xl bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-5 py-4 h-auto text-base shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(0,0,0,0.12),inset_0_-1px_0_rgba(255,255,255,0.50),0_2px_6px_rgba(0,0,0,0.06)]" aria-label="Ouvrir le descriptif du ZIP">
                    <Folder className="w-5 h-5 mr-2" />
                    Descriptif du ZIP
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
                title="Télécharger le pack ZIP (63 Mo, 8 774 éléments)"
                className="group relative max-w-sm w-full md:w-auto rounded-xl bg-gradient-to-b from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-5 py-4 h-auto text-base border-2 border-green-900/20 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10),inset_0_-1px_0_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.25),0_-6px_16px_-6px_rgba(22,163,74,0.25),0_-2px_6px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12),inset_0_-1px_0_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.35),0_-10px_24px_-8px_rgba(22,163,74,0.30),0_-3px_8px_rgba(0,0,0,0.08)] ring-1 ring-green-900/20 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 overflow-hidden"
                aria-label="Télécharger le pack de logos de football"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Télécharger</span>
                  <span className="ml-1 font-normal opacity-90">(5.00€)</span>
                </span>
              </Button>
            </div>
            <p className="max-w-sm mx-auto text-sm font-medium text-gray-600 mt-2 animate-fade-in">Fichier ZIP téléchargeable • 63 Mo • 8 774 éléments</p>
            
            {/* Bloc des avis clients déplacé ici */}
            <div className="bg-white/80 rounded-xl p-3 text-center max-w-md mx-auto mt-4">
              {/* Avatars circulaires synchronisés */}
              <div className="flex justify-center items-center -space-x-1.5 mb-1 mt-3 flex-wrap">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-lg transition-all duration-300 ${
                      index === currentTestimonialIndex ? 'scale-110 ring-3 ring-gray-600' : 'scale-100'
                    }`}
                  >
                    {testimonial.initials}
                  </div>
                ))}
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-lg">
                  +
                </div>
              </div>

              {/* Animation des témoignages */}
              <div>
                <HeroTestimonialBadge currentIndex={currentTestimonialIndex} />
              </div>
            </div>
          </div>
        </div>

        {/* Nouvelles mentions décoratives centrées */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-gray-600">
          {/* Paiement Sécurisé SumUp */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg border border-gray-200/50">
            {/* Placeholder pour l'image SumUp */}
            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">IMG</div>
            <span className="font-medium">Paiement Sécurisé SumUp</span>
          </div>

          {/* Point de séparation */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          {/* Fichier stockable sur Google Drive */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg border border-gray-200/50">
            {/* Placeholder pour l'image Google Drive */}
            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">IMG</div>
            <span className="font-medium">Fichier stockable sur Google Drive</span>
          </div>

          {/* Point de séparation */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          {/* Note Judge.me avec logo et étoiles */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg border border-gray-200/50">
            <img 
              src="/lovable-uploads/fa482252-63e9-474f-8ef0-f601a343d074.png" 
              alt="Judge.me" 
              className="h-5"
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
