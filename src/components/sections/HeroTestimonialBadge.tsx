
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Pierre M.",
    content: "Plus besoin de chercher pendant des heures les logo des équipes de foot. Tout est là, bien organisé.",
    rating: 5
  },
  {
    name: "Yassine B.",
    content: "Ça m'a apporté beaucoup de confiance pour mon projet, merci pour le gain de temps",
    rating: 5
  },
  {
    name: "Emma L.",
    content: "Tout est parfait, merci :)",
    rating: 5
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
    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-gray-200/80 transition-all duration-500 hover:shadow-lg">
      {/* Logo Judge.me */}
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
          alt="Judge.me" 
          className="h-4 w-auto" 
          loading="lazy"
        />
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      
      <div className="h-4 w-px bg-gray-200" />
      
      <div className="flex items-center gap-2 min-w-0">
        <Quote className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
        <div className="flex flex-col min-w-0">
          <p className="text-xs text-gray-600 truncate max-w-[180px] font-medium">
            {currentTestimonial.content}
          </p>
          <span className="text-[10px] text-gray-400 font-medium">
            - {currentTestimonial.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroTestimonialBadge;
