import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Pierre M.",
    content: "Plus besoin de chercher pendant des heures les logo des équipes de foot. Tout est là, bien organisé.",
    rating: 5,
    initials: "PM",
    bgColor: "bg-blue-500"
  },
  {
    name: "Yassine B.",
    content: "Ça m'a beaucoup aidé pour mon projet de paris sportifs, merci pour le gain de temps",
    rating: 5,
    initials: "YB",
    bgColor: "bg-green-500"
  },
  {
    name: "Emma L.",
    content: "Tout est parfait, merci :)",
    rating: 5,
    initials: "EL",
    bgColor: "bg-purple-500"
  }
];

const HeroTestimonialBadge = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50/80 to-emerald-50/75 backdrop-blur-sm rounded-2xl px-6 py-4 border border-green-150/65 transition-all duration-500 hover:from-green-50/90 hover:to-emerald-50/85 hover:border-green-150 hover:scale-[1.02] transform">
      {/* Avatars empilés */}
      <div className="flex items-center -space-x-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white text-xs font-semibold border-2 border-white transition-transform duration-300 ${
              index === currentIndex ? 'scale-110 z-10' : 'z-0'
            }`}
          >
            {testimonial.initials}
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-2 min-w-0">
        <Quote className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 scale-x-[-1] fill-gray-400" />
        <div className="flex flex-col min-w-0">
          <p className="text-xs text-gray-600 truncate max-w-[430px] font-medium">
            {currentTestimonial.content}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 font-medium">
              - {currentTestimonial.name}
            </span>
            <div className="flex items-center gap-0.5">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-4 w-px bg-gray-200" />
      
      {/* Logo Judge.me */}
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
          alt="Judge.me" 
          className="h-7 w-auto" 
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroTestimonialBadge;
