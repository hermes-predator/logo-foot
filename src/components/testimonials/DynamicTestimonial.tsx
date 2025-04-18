
import React, { useState, useEffect } from 'react';
import { MessageCircle, Star } from 'lucide-react';

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
    content: "Pack très complet, tous les logos sont là. Impeccable !",
    rating: 5
  },
  {
    name: "Emma L.",
    role: "Designer",
    content: "Excellente qualité des logos, gain de temps énorme.",
    rating: 5
  },
  {
    name: "Thomas R.",
    role: "Community Manager",
    content: "Les logos sont parfaitement organisés, facile à utiliser.",
    rating: 5
  }
];

const DynamicTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div 
      className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
      style={{ maxWidth: '300px' }}
    >
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
            <MessageCircle className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{currentTestimonial.name}</p>
            <p className="text-xs text-gray-500">{currentTestimonial.role}</p>
          </div>
        </div>
        
        <div className="flex gap-0.5 mb-2">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <Star 
              key={i} 
              className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
        
        <p className="text-sm text-gray-600 italic">"{currentTestimonial.content}"</p>
        
        <div className="flex justify-center gap-1 mt-3">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-500 w-3' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicTestimonial;
