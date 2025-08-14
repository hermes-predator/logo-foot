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
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Titre principal - H1 */}
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-2 leading-tight whitespace-nowrap text-gray-900">
          FICHIER⎪Logos des clubs de football
        </h1>


        {/* Layout en deux colonnes */}
        <div className="grid md:grid-cols-2 gap-6 items-center mb-2 relative">
          <div className="hidden md:block absolute left-1/2 inset-y-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent pointer-events-none"></div>
          {/* Colonne gauche - Actions avec boutons plus petits */}
            <article className="md:-mt-4 animate-fade-in relative">
              <div className="absolute -inset-2 md:-inset-3 -z-10 bg-gradient-to-tr from-blue-50/60 to-transparent rounded-3xl" />
              <div className="text-left space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">⦗FRONT-CLOUD⦘~ Football.zip</h2>
                <p className="text-xs md:text-sm text-gray-600">➥ Un fichier complet contenant tous les logos des clubs de football.</p>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full rounded-xl bg-white/80 hover:bg-white border border-gray-200 text-gray-700 font-medium px-5 py-4 h-auto text-base hover-scale"
                      aria-label="Ouvrir le descriptif du ZIP"
                    >
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
                        ⦗FRONT-CLOUD⦘~ Football.zip
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
                  className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-4 h-auto text-base transition-colors hover-scale group"
                  aria-label="Télécharger le pack de logos de football"
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger (5€)
                  </span>
                </Button>
              </div>

              <p className="max-w-sm text-sm text-gray-600 mt-3 text-center md:text-left">
                Fichier téléchargeable • 63 Mo • 8 774 éléments
              </p>
            </article>

          
          {/* Colonne droite - Avis clients */}
          <div className="relative text-center animate-fade-in">
            {/* Avatars circulaires synchronisés */}
            <div className="flex justify-center items-center -space-x-2 mb-1 mt-2 flex-wrap">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm border-3 border-white shadow-xl transition-all duration-300 ${
                    index === currentTestimonialIndex ? 'scale-110 ring-4 ring-gray-600' : 'scale-100'
                  }`}
                >
                  {testimonial.initials}
                </div>
              ))}
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-3 border-white shadow-xl">
                +
              </div>
            </div>

            {/* Animation des témoignages */}
            <div className="mt-1">
              <HeroTestimonialBadge currentIndex={currentTestimonialIndex} />
            </div>

            {/* Badge Judge.me + note */}
            <div className="flex justify-center items-center gap-3 mt-3">
              <img 
                src="/lovable-uploads/fa482252-63e9-474f-8ef0-f601a343d074.png" 
                alt="Judge.me Badge" 
                className="h-8"
              />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="text-lg font-bold text-gray-700">4.9/5</span>
              <span className="text-sm text-gray-500">(1034 avis)</span>
            </div>
          </div>
        </div>


        {/* Note de confiance */}
        <p className="text-sm text-gray-500 mt-3">
          Création de compte non requise • Téléchargement instantané après paiement • Fichiers organisés • Support inclus
        </p>
      </div>
    </section>;
};
export default HeroSection;
