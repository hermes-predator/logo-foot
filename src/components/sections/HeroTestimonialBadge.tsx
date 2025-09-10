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
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl px-6 py-4 w-full max-w-md mx-auto h-[120px] transform -translate-y-1">
        <div className="flex items-center gap-2 min-w-0 justify-center flex-col text-center -mt-3">
          <div className="flex items-center justify-center gap-2 min-w-0">
            <Quote className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 scale-x-[-1] fill-gray-400 -mt-5" />
            <div className="flex flex-col min-w-0 flex-1 items-center text-center mt-4">
               <p className="text-sm text-gray-600 max-w-[500px] font-medium leading-tight line-clamp-3 min-h-[60px]">
                 {currentTestimonial.content}
               </p>
               <div className="flex items-center justify-center gap-2 mt-2">
                <div className="flex items-center gap-1.5">
                  {/* Affichage de la bulle du témoignage actuel */}
                  <div className="flex items-center">
                    <div className={`w-5 h-5 ${currentTestimonial.bgColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/50 transition-transform duration-200 hover:scale-110`}>
                      <span className="text-[10px] font-bold text-white drop-shadow-sm">
                        {currentTestimonial.initials}
                      </span>
                    </div>
                  </div>
                   <span className="text-xs text-gray-400 font-medium ml-1">
                     {currentTestimonial.name}
                   </span>
                 </div>
                 <div className="flex items-center gap-1">
                   {[...Array(currentTestimonial.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                   <a 
                     href="https://judge.me/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="ml-1"
                   >
                     <img 
                       src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
                       alt="Judge.me" 
                       className="h-6 w-auto" 
                     />
                   </a>
                 </div>
              </div>
            </div>
            <Quote className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 fill-gray-400 -mt-6" />
          </div>
        </div>
      </div>
    </div>;
};
export default HeroTestimonialBadge;