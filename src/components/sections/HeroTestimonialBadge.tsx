import React from 'react';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

const testimonials = [
  {
    name: "Pierre M.",
    content: "Plus besoin de chercher pendant des heures les logo des club de foot. Tout est là, bien organisé. Merci !",
    rating: 5,
    initials: "PM"
  },
  {
    name: "Yassine B.",
    content: "Ça m'a beaucoup aidé pour mon projet de paris sportifs, merci.",
    rating: 5,
    initials: "YB"
  },
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
    name: "Maxime L.",
    content: "J'avais besoin des logo des equipe de foot pour un projet. Le fichier est parfait. Que du +++",
    rating: 5,
    initials: "ML"
  },
  {
    name: "Alex G.",
    content: "Vraiment très content de l'avoir acheter, je recommande Logo Foot ! Merci",
    rating: 5,
    initials: "AG"
  },
  {
    name: "Emma L.",
    content: "Tout est parfait, merci :)",
    rating: 5,
    initials: "EL"
  }
];

interface HeroTestimonialBadgeProps {
  currentIndex: number;
}

const HeroTestimonialBadge: React.FC<HeroTestimonialBadgeProps> = ({
  currentIndex
}) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [displayIndex, setDisplayIndex] = React.useState(currentIndex);

  React.useEffect(() => {
    if (currentIndex !== displayIndex) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setDisplayIndex(currentIndex);
        setIsVisible(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, displayIndex]);

  const currentTestimonial = testimonials[displayIndex];
  
  return (
    <div className="flex items-center justify-center">
      <div className={`relative flex flex-col items-center justify-center gap-0.5 rounded-2xl px-4 py-1.5 w-full max-w-md mx-auto h-[80px] transform -translate-y-1 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        
        {/* Étoiles TrustPilot style */}
        <div className={`flex gap-0.5 mb-1 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 flex items-center justify-center ${
                i < currentTestimonial.rating ? 'bg-[#00b67a]' : 'bg-gray-200'
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
        <p className={`text-[11px] text-gray-600 max-w-[400px] font-medium leading-tight text-center line-clamp-2 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          "{currentTestimonial.content}"
        </p>

        {/* Nom et badge TrustPilot */}
        <div className={`flex items-center justify-center gap-3 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs text-gray-500 font-medium">
            {currentTestimonial.name}
          </span>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1.5">
            <img 
              src={trustpilotLogo} 
              alt="TrustPilot" 
              className="h-4 w-auto"
            />
            <span className="text-[10px] text-gray-400">4.8/5 (1034 avis)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTestimonialBadge;
