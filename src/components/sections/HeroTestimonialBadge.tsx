import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
const testimonials = [
  {
    name: "Pierre M.",
    content: "Plus besoin de chercher pendant des heures les logo des club de foot. Tout est là, bien organisé. Merci !",
    rating: 5,
    initials: "PM",
    bgColor: "bg-blue-500"
  },
  {
    name: "Yassine B.",
    content: "Ça m'a beaucoup aidé pour mon projet de paris sportifs, merci.",
    rating: 5,
    initials: "YB",
    bgColor: "bg-green-500"
  },
  {
    name: "Quentin D.",
    content: "Tout s'est bien passé, je recommande, merci !",
    rating: 5,
    initials: "QD",
    bgColor: "bg-purple-500"
  },
  {
    name: "Florent P.",
    content: "Très impressionné par le fichier, vaut son prix 👍.",
    rating: 5,
    initials: "FP",
    bgColor: "bg-orange-500"
  },
  {
    name: "Maxime L.",
    content: "J'avais besoin des logo des equipe de foot pour un projet. Le fichier est parfait. Que du +++",
    rating: 5,
    initials: "ML",
    bgColor: "bg-red-500"
  },
  {
    name: "Alex G.",
    content: "Vraiment très content de l'avoir acheter, je recommande Logo Foot ! Merci",
    rating: 5,
    initials: "AG",
    bgColor: "bg-teal-500"
  },
  {
    name: "Emma L.",
    content: "Tout est parfait, merci :)",
    rating: 5,
    initials: "EL",
    bgColor: "bg-pink-500"
  }
];
interface HeroTestimonialBadgeProps {
  currentIndex: number;
}
const HeroTestimonialBadge: React.FC<HeroTestimonialBadgeProps> = ({
  currentIndex
}) => {
  const currentTestimonial = testimonials[currentIndex];
  return <div className="flex items-center justify-center">
      {/* Le badge Judge.me est maintenant à l'intérieur du container vert */}
      
      {/* Témoignage à droite */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-green-50/80 to-emerald-50/75 backdrop-blur-sm rounded-2xl px-6 py-4 border border-green-150/65 transition-all duration-500 hover:from-green-50/90 hover:to-emerald-50/85 hover:border-green-150 hover:scale-[1.02] transform">
        {/* Badge Judge.me à gauche dans le container vert */}
        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-lg">
          <img src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" alt="Judge.me" className="h-6 w-auto" loading="lazy" />
        </div>
        
        <div className="flex items-center gap-2 min-w-0">
          <Quote className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 scale-x-[-1] fill-gray-400" />
          <div className="flex flex-col min-w-0">
            <p className="text-xs text-gray-600 truncate max-w-[380px] font-medium">
              {currentTestimonial.content}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 font-medium">
                - {currentTestimonial.name}
              </span>
              <div className="flex items-center gap-0.5">
                {[...Array(currentTestimonial.rating)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroTestimonialBadge;