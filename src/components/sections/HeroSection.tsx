import React, { useState, useEffect } from 'react';
import { Folder, Download, ShoppingCart, Star, Zap, Shield } from "lucide-react";
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
  return <section className="relative pt-20 pb-16 px-4 overflow-hidden">
      {/* Background avec dégradé simple et professionnel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-green-50/60" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge premium simple */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
          <Zap className="w-4 h-4" />
          Solution complète de ressources football
        </div>

        {/* Titre principal - H1 avec le mot-clé important */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Logos des clubs de football
        </h1>


        {/* Layout en deux colonnes */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
          {/* Colonne gauche - Avis clients */}
          <div className="space-y-4">
            {/* Bloc des avis clients déplacé ici */}
            <div className="bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-lg text-center">
              {/* Badge Judge.me et étoiles sur la même ligne */}
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="flex items-center">
                  <img 
                    src="https://judge.me/reviews/badge_shop_preview?url=https%3A%2F%2Flogo-foot.fr%2F&color=%23FFD700" 
                    alt="Judge.me Badge" 
                    className="h-6"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=50&fit=crop&auto=format';
                    }}
                  />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-base font-semibold text-gray-700">
                  {(testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length).toFixed(1)}/5
                </span>
              </div>
              
              {/* Avatars circulaires synchronisés */}
              <div className="flex justify-center items-center -space-x-2 mb-4 flex-wrap">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm border-3 border-white shadow-xl transition-all duration-300 ${
                      index === currentTestimonialIndex ? 'scale-110 ring-4 ring-blue-200' : 'scale-100'
                    }`}
                  >
                    {testimonial.initials}
                  </div>
                ))}
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-3 border-white shadow-xl">
                  +
                </div>
              </div>
              
              {/* Animation des témoignages */}
              <div>
                <HeroTestimonialBadge currentIndex={currentTestimonialIndex} />
              </div>
            </div>
          </div>

          {/* Colonne droite - Actions avec boutons plus petits */}
          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="max-w-sm bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 h-auto text-base">
                  <Folder className="w-4 h-4 mr-2" />
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
            
            <Button size="lg" onClick={onScrollToPayment} className="max-w-sm bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-3 h-auto text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Télécharger (8€)
            </Button>
          </div>
        </div>


        {/* Note de confiance */}
        <p className="text-sm text-gray-500 mt-6">
          Téléchargement instantané après paiement • Fichiers organisés • Support inclus
        </p>
      </div>
    </section>;
};
export default HeroSection;