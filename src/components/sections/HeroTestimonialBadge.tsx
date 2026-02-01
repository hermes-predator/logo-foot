import React from 'react';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

const testimonials = [
  { name: "Quentin D.", content: "Tout s'est bien passé, je recommande, merci !", rating: 5, initials: "QD" },
  { name: "Florent P.", content: "Très impressionné par le fichier, vaut son prix 👍.", rating: 5, initials: "FP" },
  { name: "Emma L.", content: "Tout est parfait, merci :)", rating: 5, initials: "EL" },
  { name: "Yassine B.", content: "Ça m'a beaucoup aidé pour un projet, merci.", rating: 5, initials: "YB" },
  { name: "Lucas M.", content: "Super qualité, livraison instantanée !", rating: 5, initials: "LM" },
  { name: "Sophie R.", content: "Exactement ce que je cherchais, top.", rating: 5, initials: "SR" }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const HeroTestimonialBadge: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full py-4">
      {/* Carrousel avec défilement infini */}
      <div className="flex animate-scroll-reviews gap-4">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.initials}-${index}`}
            className="flex-shrink-0 bg-card rounded-xl px-4 py-3 border border-border shadow-sm min-w-[220px] max-w-[240px] hover:border-lime-200 transition-all duration-300"
          >
            {/* Étoiles */}
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 flex items-center justify-center rounded ${
                    i < testimonial.rating ? 'bg-lime-500' : 'bg-muted'
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-navy fill-current">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Commentaire */}
            <p className="text-sm text-muted-foreground leading-snug line-clamp-2 mb-2">
              "{testimonial.content}"
            </p>

            {/* Nom */}
            <span className="text-xs text-muted-foreground/70 font-medium">
              {testimonial.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Dégradés sur les côtés */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      
      {/* Badge Trustpilot en dessous */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <img src={trustpilotLogo} alt="TrustPilot" className="h-5 w-auto" />
        <span className="text-sm text-muted-foreground font-medium">4.8/5 sur 1034 avis vérifiés</span>
      </div>
    </div>
  );
};

export default HeroTestimonialBadge;
