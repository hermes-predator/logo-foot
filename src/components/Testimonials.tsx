import React, { useState, useEffect, useCallback } from 'react';
import { Star, ExternalLink, UserRound, Quote, CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Types for testimonial structure
interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

// Nouvelle ordre strictement respectant la demande :
const testimonials: Testimonial[] = [
  {
    name: "Pierre M.",
    role: "Community Manager",
    content: "Plus besoin de chercher pendant des heures les logo des équipes de foot. Tout est là, bien organisé. Merci !",
    rating: 5
  },
  {
    name: "Yassine B.",
    role: "Community Manager",
    content: "Ça m'a beaucoup aidé pour mon projet de paris sportifs, merci pour le gain de temps",
    rating: 5
  },
  {
    name: "Quentin D.",
    role: "Non renseigné",
    content: "Très impressionné par le fichier, vaut largement son prix 👍🏼",
    rating: 5
  },
  {
    name: "Florent P.",
    role: "Non renseigné",
    content: "Le pack est très complet. Il s'intègre parfaitement à sur mon Drive Google. Très satisfait.",
    rating: 5
  },
  {
    name: "Alex G.",
    role: "Community Manager",
    content: "Vraiment très content de l'avoir acheter, je recommande Logo-foot.com ! Merci",
    rating: 5
  },
  {
    name: "Emma L.",
    role: "Freelance",
    content: "Tout est parfait, merci :)",
    rating: 5
  },
  {
    name: "Thomas D.",
    role: "Non renseigné",
    content: "Vraiment heureux de mon achat, je l'ai ajouté sur mon Google Drive comme recommandé, je sais qu'il sera utile dans mon parcours.",
    rating: 5
  },
  {
    name: "Nicolas P.",
    role: "Freelance",
    content: "Excellent pour le prix. Je suis satisfait. Merci !",
    rating: 5
  },
  {
    name: "Loïc D.",
    role: "Non renseigné",
    content: "Le ZIP est parfait rien à dire, mais attention de bien le télécharger immédiatement comme l'achat se fait en invité.",
    rating: 4
  },
  {
    name: "Sylvain B.",
    role: "Non renseigné",
    content: "Un sentiment d'en avoir eu beaucoup pour mon argent. Je recommande !",
    rating: 5
  }
];

const Testimonials = () => {
  const [visibleItems, setVisibleItems] = useState<number>(1);
  // activeIndex initial à 0 pour démarrer sur Pierre M.
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [api, setApi] = useState<CarouselApi>();
  const autoplayInterval = 5000;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 640) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay]);

  const pauseAutoplay = useCallback(() => setAutoplay(false), []);
  const resumeAutoplay = useCallback(() => setAutoplay(true), []);

  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;
  const formattedAvgRating = averageRating.toFixed(1);

  return (
    <section 
      className="w-full pt-8 pb-0 md:pb-0 bg-gray-50 sticky top-[95vh] z-10"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      onFocus={pauseAutoplay}
      onBlur={resumeAutoplay}
    >
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Pack Complet de Logos de Football",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": formattedAvgRating,
              "ratingCount": testimonials.length,
              "reviewCount": "1034",
              "bestRating": "5"
            },
            "review": testimonials.map(t => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": t.name
              },
              "reviewBody": t.content
            }))
          })
        }}
      />

      <div className="w-full px-4 sm:px-2 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full max-w-4xl mx-auto"
          aria-label="Témoignages clients"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 md:basis-1/3 pb-4"
                tabIndex={0}
                aria-label={`Témoignage de ${testimonial.name}`}
              >
                <div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col min-h-[200px] border border-gray-100 will-change-transform relative overflow-hidden group"
                  role="article"
                >
                  {/* Guillemets décoratifs en arrière-plan */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Quote className="w-16 h-16 text-blue-500 rotate-12" aria-hidden="true" />
                  </div>
                  
                  {/* Badge de vérification subtil */}
                  <div className="absolute top-3 left-3 opacity-80">
                    <div className="flex items-center gap-1 bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white border border-gray-200 hover:border-gray-200 rounded-full px-2 py-1 transition-all duration-300">
                      <CircleCheck className="w-3 h-3 text-gray-600" aria-hidden="true" />
                      <span className="text-xs text-gray-700 font-semibold">Vérifié</span>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center gap-1 text-yellow-400 mb-3 mt-8"
                    aria-label={`Évaluation: ${testimonial.rating} sur 5 étoiles`}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="w-4 h-4 text-gray-200" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4 flex-grow text-base font-medium leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <UserRound className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" />
          <CarouselNext className="hidden md:flex -right-5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" />

          <div className="flex justify-center gap-1 mt-2 md:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Aller au témoignage ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </Carousel>

        <div className="flex items-center justify-center mt-8 mb-8 md:mb-0">
          <a 
            href="https://judge.me" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-transparent hover:bg-gradient-to-r hover:from-gray-50 hover:to-white px-5 py-3 rounded-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Effet de brillance subtil */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
            
            <img 
              src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
              alt="Judge.me Reviews" 
              className="h-7 relative z-10" 
              loading="lazy"
            />
            <div className="flex flex-col relative z-10">
              <span className="text-sm font-medium text-gray-500 tracking-wide">
                Avis vérifiés basés sur 1034 avis
              </span>
              <div className="flex items-center gap-2">
                <div className="flex" aria-label={`Note moyenne: ${formattedAvgRating} sur 5`}>
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" aria-hidden="true" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" aria-hidden="true" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" aria-hidden="true" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" aria-hidden="true" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" aria-hidden="true" />
                </div>
                <span className="text-base font-bold text-gray-700 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                  {formattedAvgRating}/5
                </span>
              </div>
            </div>
            <ExternalLink 
              className="w-5 h-5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" 
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
