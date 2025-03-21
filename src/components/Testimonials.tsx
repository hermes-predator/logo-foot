
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
    name: "Emma V.",
    role: "Graphiste",
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
    name: "Nicolas P.",
    role: "Freelance",
    content: "Excellent pour le prix. Je suis entièrement satisfait. Merci !",
    rating: 5
  },
  {
    name: "Loïc D.",
    role: "Non renseigné",
    content: "Le pack est très complet. Il s'intègre parfaitement à sur mon Drive Google. Très satisfait.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="w-full pt-8 pb-0 bg-gradient-to-b from-white to-blue-50/30 sticky top-[95vh] z-10">
      <div className="w-full px-2">
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
                <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col min-h-[180px]">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-3 flex-grow text-sm">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
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
          <CarouselPrevious className="hidden md:flex -left-5" />
          <CarouselNext className="hidden md:flex -right-5" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
