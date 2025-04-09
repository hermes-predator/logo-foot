
import React from 'react';
import { MessageCircle, Star, Users, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Pierre M.",
    role: "Développeur",
    content: "Plus besoin de chercher pendant des heures les logos des clubs. Tout est là, bien organisé. Je recommande !",
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
    role: "Non renseigné",
    content: "Le pack est très complet. Il s'intègre parfaitement à sur mon Drive Google. Très satisfait.",
    rating: 5
  },
  {
    name: "Abdou B.",
    role: "Non renseigné",
    content: "Le zip est parfait rien à dire, mais il manque un espace utilisateur. Je recommande cela dit",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="w-full pt-8 pb-0 bg-gray-50 sticky top-[95vh] z-10">
      <div className="w-full px-4 sm:px-2 relative">
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
                <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col min-h-[180px] border border-gray-100 will-change-transform hover:translate-y-[-2px]">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="w-3.5 h-3.5 text-gray-200" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-3 flex-grow text-sm font-medium">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
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
          <CarouselPrevious className="hidden md:flex -left-5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" />
          <CarouselNext className="hidden md:flex -right-5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50" />
        </Carousel>
        
        {/* Judge.me verified reviews badge - Premium & Discreet */}
        <div className="flex items-center justify-center mt-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 px-3.5 py-1.5 rounded-md border border-gray-100 transition-all duration-200">
            <img 
              src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
              alt="Judge.me Reviews" 
              className="h-4" 
            />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-700 tracking-wide">Avis vérifiés</span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
