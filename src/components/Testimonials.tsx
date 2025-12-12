
import React, { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import TrustPilotBadge from './TrustPilotBadge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

// Types for testimonial structure
interface Testimonial {
  name: string;
  title: string;
  content: string;
  rating: number;
  date: string;
}

// Nouvelle ordre strictement respectant la demande :
const testimonials: Testimonial[] = [
  {
    name: "Pierre M.",
    title: "Très pratique",
    content: "Plus besoin de chercher pendant des heures les logo des club de foot. Tout est là, bien organisé. Merci !",
    rating: 5,
    date: "12 novembre 2024"
  },
  {
    name: "Yassine B.",
    title: "Parfait pour mon projet",
    content: "Ça m'a beaucoup aidé pour mon projet de paris sportifs, merci.",
    rating: 5,
    date: "8 novembre 2024"
  },
  {
    name: "Quentin D.",
    title: "Je recommande",
    content: "Tout s'est bien passé, je recommande, merci !",
    rating: 5,
    date: "2 novembre 2024"
  },
  {
    name: "Florent P.",
    title: "Vaut son prix",
    content: "Très impressionné par le fichier, vaut son prix 👍.",
    rating: 5,
    date: "28 octobre 2024"
  },
  {
    name: "Maxime L.",
    title: "Fichier parfait",
    content: "J'avais besoin des logo des equipe de foot pour un projet. Le fichier est parfait. Que du +++",
    rating: 5,
    date: "21 octobre 2024"
  },
  {
    name: "Alex G.",
    title: "Très content",
    content: "Vraiment très content de l'avoir acheter, je recommande Logo Foot ! Merci",
    rating: 5,
    date: "15 octobre 2024"
  },
  {
    name: "Mathieu A.",
    title: "Très bon fichier",
    content: "Très bon fichier, merci.",
    rating: 5,
    date: "9 octobre 2024"
  },
  {
    name: "Vincent L.",
    title: "Top",
    content: "Top, tout les logos de clubs de football dans un fichier bien organisé.",
    rating: 5,
    date: "3 octobre 2024"
  },
  {
    name: "Adrien M.",
    title: "Impeccable",
    content: "Impeccable.",
    rating: 5,
    date: "27 septembre 2024"
  },
  {
    name: "Kevin T.",
    title: "Bien triés",
    content: "Parfait, tous les logo d'équipe de foot sont bien triés.",
    rating: 5,
    date: "20 septembre 2024"
  },
  {
    name: "Lucas M.",
    title: "Super bien organisé",
    content: "Tout est ok, la collection de logo des clubs de foot est super bien organisé.",
    rating: 5,
    date: "14 septembre 2024"
  },
  {
    name: "Emma L.",
    title: "Tout est parfait",
    content: "Tout est parfait, merci :)",
    rating: 5,
    date: "8 septembre 2024"
  },
  {
    name: "Jonathan M.",
    title: "Très bien",
    content: "Merci pour la collection de logo des clubs de foot. Le fichier est très bien.",
    rating: 5,
    date: "1 septembre 2024"
  },
  {
    name: "Antoine R.",
    title: "Très satisfait",
    content: "Très satisfait, tous les logos de football sont super bien classés, ça fait plaisir à avoir.",
    rating: 5,
    date: "25 août 2024"
  },
  {
    name: "Camille B.",
    title: "Excellent",
    content: "Excellent, merci.",
    rating: 5,
    date: "18 août 2024"
  },
  {
    name: "Damien L.",
    title: "Fichier idéal",
    content: "Le fichier de logo de football idéal ! Encore merci à vous.",
    rating: 5,
    date: "11 août 2024"
  },
  {
    name: "Sébastien M.",
    title: "Exactement ce que je cherchais",
    content: "Exactement ce que je cherchais, fichier bien structuré et complet.",
    rating: 5,
    date: "4 août 2024"
  },
  {
    name: "Raphaël B.",
    title: "Parfait",
    content: "Parfait pour les logos des équipes de football 😀.",
    rating: 5,
    date: "28 juillet 2024"
  },
  {
    name: "Thomas D.",
    title: "Heureux de mon achat",
    content: "Heureux de mon achat, je l'ai ajouté sur mon Google Drive comme recommandé, je sais qu'il sera utile dans mon parcours.",
    rating: 4,
    date: "21 juillet 2024"
  },
  {
    name: "Julien R.",
    title: "Très bonne solution",
    content: "Très bonne solution pour les logos club de foot.",
    rating: 5,
    date: "14 juillet 2024"
  },
  {
    name: "Nicolas P.",
    title: "M'a parfaitement aidé",
    content: "Logo foot m'a parfaitement aidé à trouver l'ensemble des logos des clubs de football. Merci encore.",
    rating: 5,
    date: "7 juillet 2024"
  },
  {
    name: "Loïc D.",
    title: "Parfait mais attention",
    content: "Le ZIP est parfait rien à dire, mais attention de bien le télécharger immédiatement comme l'achat se fait en invité.",
    rating: 4,
    date: "30 juin 2024"
  },
  {
    name: "Sylvain B.",
    title: "Excellent pour le prix",
    content: "Excellent pour le prix. Je suis satisfait. Merci Logo foot!",
    rating: 5,
    date: "23 juin 2024"
  },
  {
    name: "Enzo D.",
    title: "Super bien",
    content: "Super bien, c'est vraiment bien servi en logos de foot. On se rend mieux compte en vrai.",
    rating: 5,
    date: "16 juin 2024"
  },
  {
    name: "Olivier D.",
    title: "Bonne solution",
    content: "Bonne solution pour les logo des clubs de football.",
    rating: 5,
    date: "9 juin 2024"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [api, setApi] = useState<CarouselApi>();
  const autoplayInterval = 4000; // Réduit l'intervalle pour plus de dynamisme

  // Effet pour gérer l'autoplay avec le carousel
  useEffect(() => {
    if (!api || !autoplay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [api, autoplay]);

  // Synchroniser activeIndex avec le carousel
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

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
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col min-h-[220px] border border-gray-100 will-change-transform"
                  role="article"
                >
                  {/* Étoiles TrustPilot style */}
                  <div 
                    className="flex gap-0.5 mb-4"
                    aria-label={`Évaluation: ${testimonial.rating} sur 5 étoiles`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 flex items-center justify-center ${
                          i < testimonial.rating ? 'bg-[#00b67a]' : 'bg-gray-200'
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3 h-3 text-white fill-current"
                          aria-hidden="true"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {testimonial.title}
                  </h3>
                  
                  {/* Contenu */}
                  <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                  
                  {/* Auteur et date */}
                  <div className="mt-auto">
                    <p className="font-medium text-gray-800 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.date}</p>
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
          <TrustPilotBadge reviewCount={1034} rating={4.8} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
