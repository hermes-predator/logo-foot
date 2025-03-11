
import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

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
  return (
    <section className="py-12 bg-gradient-to-b from-white to-purple-50/30 sticky top-[88vh] z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Ce qu'en pensent nos clients
          </h2>
          <p className="text-gray-600 text-sm">
            Des centaines de créateurs de contenu nous font confiance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-3 text-sm">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
