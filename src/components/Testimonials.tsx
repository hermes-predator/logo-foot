
import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  },
  {
    name: "Sophie R.",
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
    name: "Emma V.",
    role: "Graphiste freelance",
    content: "La meilleure collection de logos que j'ai pu trouver. Mise à jour régulière et qualité constante.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-blue-50/30 sticky top-[90vh] z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Ce qu'en pensent nos clients
          </h2>
          <p className="text-gray-600 text-xs">
            Des centaines de créateurs de contenu nous font confiance
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 pb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col min-h-[160px]">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-2 flex-grow text-xs">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageCircle className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs">{testimonial.name}</p>
                      <p className="text-[10px] text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
