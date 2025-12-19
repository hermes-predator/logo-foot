import React from 'react';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

const testimonials = [
  {
    name: "Quentin D.",
    content: "Tout s'est bien passé, je recommande, merci !",
    rating: 5,
    initials: "QD"
  },
  {
    name: "Florent P.",
    content: "Très impressionné par le fichier, vaut son prix 👍.",
    rating: 5,
    initials: "FP"
  },
  {
    name: "Emma L.",
    content: "Tout est parfait, merci :)",
    rating: 5,
    initials: "EL"
  },
  {
    name: "Yassine B.",
    content: "Ça m'a beaucoup aidé pour un projet, merci.",
    rating: 5,
    initials: "YB"
  },
  {
    name: "Lucas M.",
    content: "Super qualité, livraison instantanée !",
    rating: 5,
    initials: "LM"
  },
  {
    name: "Sophie R.",
    content: "Exactement ce que je cherchais, top.",
    rating: 5,
    initials: "SR"
  }
];

// On double le tableau pour le défilement infini
const duplicatedTestimonials = [...testimonials, ...testimonials];

interface HeroTestimonialBadgeProps {
  currentIndex?: number;
}

const HeroTestimonialBadge: React.FC<HeroTestimonialBadgeProps> = () => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Carrousel avec défilement infini */}
      <div className="flex animate-scroll-reviews gap-4">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.initials}-${index}`}
            className="flex-shrink-0 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-100 shadow-sm min-w-[200px] max-w-[220px]"
          >
            {/* Étoiles */}
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 flex items-center justify-center ${
                    i < testimonial.rating ? 'bg-[#00b67a]' : 'bg-gray-200'
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-2 h-2 text-white fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Commentaire */}
            <p className="text-[11px] text-gray-600 font-medium leading-tight line-clamp-2 mb-1">
              "{testimonial.content}"
            </p>

            {/* Nom */}
            <span className="text-[10px] text-gray-400 font-medium">
              {testimonial.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Dégradés sur les côtés */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />
      
      {/* Badge Trustpilot en dessous */}
      <div className="flex items-center justify-center gap-2 mt-3">
        <img 
          src={trustpilotLogo} 
          alt="TrustPilot" 
          className="h-4 w-auto"
        />
        <span className="text-xs text-gray-500 font-medium">4.8/5 sur 1034 avis vérifiés</span>
      </div>
    </div>
  );
};

export default HeroTestimonialBadge;
