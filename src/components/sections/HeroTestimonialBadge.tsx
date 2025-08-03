
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
    content: "Ça m'a beaucoup aidé pour mon projet de paris sportifs, merci pour le gain de temps",
    rating: 5,
    initials: "YB",
    bgColor: "bg-green-500"
  },
  {
    name: "Emma L.",
    content: "Tout est parfait, merci :)",
    rating: 5,
    initials: "EL",
    bgColor: "bg-purple-500"
  },
  {
    name: "Thomas D.",
    content: "Exactement ce qu'il me fallait pour mon site. Logos haute qualité et formats variés.",
    rating: 5,
    initials: "TD",
    bgColor: "bg-orange-500"
  },
  {
    name: "Sarah K.",
    content: "Super pratique, j'ai gagné des heures de travail. Je recommande !",
    rating: 5,
    initials: "SK",
    bgColor: "bg-red-500"
  },
  {
    name: "Lucas R.",
    content: "Collection complète et bien organisée. Parfait pour mes projets.",
    rating: 5,
    initials: "LR",
    bgColor: "bg-teal-500"
  },
  {
    name: "Marie C.",
    content: "Qualité professionnelle, livraison instantanée. Rien à redire !",
    rating: 5,
    initials: "MC",
    bgColor: "bg-pink-500"
  }
];

interface HeroTestimonialBadgeProps {
  currentIndex: number;
}

const HeroTestimonialBadge: React.FC<HeroTestimonialBadgeProps> = ({ currentIndex }) => {
  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex items-center gap-4">
      {/* Badge Judge.me rond à gauche */}
      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-lg">
        <img 
          src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
          alt="Judge.me" 
          className="h-8 w-auto" 
          loading="lazy"
        />
      </div>
      
      {/* Témoignage à droite */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-green-50/80 to-emerald-50/75 backdrop-blur-sm rounded-2xl px-6 py-4 border border-green-150/65 transition-all duration-500 hover:from-green-50/90 hover:to-emerald-50/85 hover:border-green-150 hover:scale-[1.02] transform">
        {/* Avatars empilés */}
        <div className="flex items-center -space-x-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white text-xs font-semibold border-2 border-white transition-transform duration-300 ${
                index === currentIndex ? 'scale-110 z-10' : 'z-0'
              }`}
            >
              {testimonial.initials}
            </div>
          ))}
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
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTestimonialBadge;
