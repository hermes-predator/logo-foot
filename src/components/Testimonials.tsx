
import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, Star, Users, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Types for testimonial structure
interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Pierre M.",
    role: "Développeur",
    content: "Plus besoin de chercher pendant des heures les logos des clubs. Tout est là, bien organisé. Je recommande !",
    rating: 5
  },
  {
    name: "Emma V.",
    role: "Designer Web",
    content: "La meilleure collection de logos que j'ai pu trouver.",
    rating: 5
  },
  {
    name: "Alexandre G.",
    role: "Analyste sportif",
    content: "Ce pack m'a grandement aidé pour mon projet de paris sportifs, merci encore à vous.",
    rating: 5
  },
  {
    name: "Yassine B.",
    role: "Community Manager",
    content: "Merci pour le gain de temps !",
    rating: 5
  },
  {
    name: "Lucas F.",
    role: "Journaliste sportif",
    content: "Une ressource indispensable pour tout créateur de contenu sport. Service client au top !",
    rating: 5
  },
  {
    name: "Marie L.",
    role: "Designer UI/UX",
    content: "Les logos sont parfaitement optimisés et uniformes. Exactement ce dont j'avais besoin pour mes maquettes.",
    rating: 5
  },
  {
    name: "Thomas D.",
    role: "Développeur",
    content: "Une collection vraiment complète qui m'a fait gagner un temps fou sur mes projets. La qualité est au rendez-vous !",
    rating: 5
  },
  {
    name: "Nicolas P.",
    role: "Freelance",
    content: "Excellent pour le prix. Je suis entièrement satisfait. Merci !",
    rating: 5
  },
  {
    name: "Loïc D.",
    role: "non renseigné",
    content: "Le pack est très complet. Il s'intègre parfaitement à sur mon Drive Google. Très satisfait.",
    rating: 5
  },
  {
    name: "Abdou B.",
    role: "non renseigné",
    content: "Le zip est parfait rien à dire, mais il manque un espace utilisateur. Je recommande cela dit",
    rating: 4
  }
];

const Testimonials = () => {
  const [visibleItems, setVisibleItems] = useState<number>(1);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const autoplayInterval = 5000; // 5 seconds

  // Adjust visible items based on screen size
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

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Pause autoplay on hover or focus
  const pauseAutoplay = useCallback(() => setAutoplay(false), []);
  const resumeAutoplay = useCallback(() => setAutoplay(true), []);

  // Calculate average rating
  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;
  const formattedAvgRating = averageRating.toFixed(1);

  return (
    <section 
      className="w-full pt-8 pb-0 bg-gray-50 sticky top-[95vh] z-10"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      onFocus={pauseAutoplay}
      onBlur={resumeAutoplay}
    >
      <div className="w-full px-4 sm:px-2 relative">
        {/* StructuredData for SEO */}
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
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
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col min-h-[180px] border border-gray-100 will-change-transform hover:translate-y-[-2px]"
                  role="article"
                >
                  <div 
                    className="flex items-center gap-1 text-yellow-400 mb-2"
                    aria-label={`Évaluation: ${testimonial.rating} sur 5 étoiles`}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="w-3.5 h-3.5 text-gray-200" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-3 flex-grow text-sm font-medium">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs">{testimonial.name}</p>
                      <p className="text-[10px] text-gray-500 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation controls with improved visibility */}
          <CarouselPrevious className="hidden md:flex -left-5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" />
          <CarouselNext className="hidden md:flex -right-5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" />
          
          {/* Mobile navigation indicators */}
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
        
        {/* Reviews badge with enhanced visual appeal */}
        <div className="flex items-center justify-center mt-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 px-3.5 py-1.5 rounded-md border border-gray-100 transition-all duration-200 hover:border-gray-200">
            <img 
              src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
              alt="Judge.me Reviews" 
              className="h-4" 
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-700 tracking-wide">Avis vérifiés basés sur 1034 avis</span>
              <div className="flex items-center gap-1">
                <div className="flex" aria-label={`Note moyenne: ${formattedAvgRating} sur 5`}>
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">{formattedAvgRating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
