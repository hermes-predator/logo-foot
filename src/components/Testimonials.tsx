
import React, { useEffect, useState } from 'react';
import { MessageCircle, Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// On limite à 3 témoignages les plus pertinents
const testimonials = [
  {
    name: "Thomas D.",
    role: "Développeur Web",
    content: "Une collection vraiment complète qui m'a fait gagner un temps fou sur mes projets. La qualité est au rendez-vous !",
    rating: 5
  },
  {
    name: "Marie L.",
    role: "Designer UI/UX",
    content: "Les logos sont parfaitement optimisés et uniformes. Exactement ce dont j'avais besoin pour mes maquettes.",
    rating: 5
  },
  {
    name: "Pierre M.",
    role: "Créateur de contenu sportif",
    content: "Plus besoin de chercher pendant des heures les logos des clubs. Tout est là, bien organisé. Je recommande !",
    rating: 5
  }
];

const Testimonials = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  // Chargement différé des témoignages
  useEffect(() => {
    const loadTestimonials = () => {
      // Simuler un délai minimal pour éviter le flash de contenu
      setTimeout(() => {
        setVisibleTestimonials(testimonials);
        setIsLoaded(true);
      }, 100);
    };

    // Observer pour charger les témoignages quand la section est proche du viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadTestimonials();
        observer.disconnect();
      }
    }, { rootMargin: '200px' });

    const section = document.getElementById('testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="testimonials-section" 
      className="pt-10 pb-2 bg-gradient-to-b from-white to-blue-50/30 sticky top-[95vh] z-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Ce qu'en pensent nos clients
          </h2>
          <p className="text-gray-600 text-sm">
            Des centaines de créateurs de contenu nous font confiance
          </p>
        </div>
        
        {!isLoaded ? (
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white/60 p-5 rounded-lg shadow-sm animate-pulse h-[200px]"></div>
            ))}
          </div>
        ) : (
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto px-4"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {visibleTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 pb-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col min-h-[210px] relative overflow-hidden">
                    <Quote className="absolute text-blue-100 w-16 h-16 -right-3 -top-3 opacity-30" />
                    <div className="flex items-center gap-1 text-yellow-400 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4 flex-grow text-sm leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-blue-100/70 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-2" />
            <CarouselNext className="hidden md:flex -right-2" />
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
