
import React, { useState, useEffect, useCallback } from 'react';
import TrustPilotBadge from './TrustPilotBadge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  title: string;
  content: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  { name: "Pierre M.", title: "Très pratique", content: "Plus besoin de chercher pendant des heures les logo des club de foot. Tout est là, bien organisé. Merci !", rating: 5, date: "12 novembre 2024" },
  { name: "Yassine B.", title: "Parfait pour mon projet", content: "Ça m'a beaucoup aidé pour mon projet de paris sportifs, merci.", rating: 5, date: "8 novembre 2024" },
  { name: "Quentin D.", title: "Je recommande", content: "Tout s'est bien passé, je recommande, merci !", rating: 5, date: "2 novembre 2024" },
  { name: "Florent P.", title: "Vaut son prix", content: "Très impressionné par le fichier, vaut son prix 👍.", rating: 5, date: "28 octobre 2024" },
  { name: "Maxime L.", title: "Fichier parfait", content: "J'avais besoin des logo des equipe de foot pour un projet. Le fichier est parfait. Que du +++", rating: 5, date: "21 octobre 2024" },
  { name: "Alex G.", title: "Très content", content: "Vraiment très content de l'avoir acheter, je recommande Logo Foot ! Merci", rating: 5, date: "15 octobre 2024" },
  { name: "Mathieu A.", title: "Très bon fichier", content: "Très bon fichier, merci.", rating: 5, date: "9 octobre 2024" },
  { name: "Vincent L.", title: "Top", content: "Top, tout les logos de clubs de football dans un fichier bien organisé.", rating: 5, date: "3 octobre 2024" },
  { name: "Adrien M.", title: "Impeccable", content: "Impeccable.", rating: 5, date: "27 septembre 2024" },
  { name: "Kevin T.", title: "Bien triés", content: "Parfait, tous les logo d'équipe de foot sont bien triés.", rating: 5, date: "20 septembre 2024" },
  { name: "Lucas M.", title: "Super bien organisé", content: "Tout est ok, la collection de logo des clubs de foot est super bien organisé.", rating: 5, date: "14 septembre 2024" },
  { name: "Emma L.", title: "Tout est parfait", content: "Tout est parfait, merci :)", rating: 5, date: "8 septembre 2024" },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [api, setApi] = useState<CarouselApi>();
  const autoplayInterval = 4000;

  useEffect(() => {
    if (!api || !autoplay) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [api, autoplay]);

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
      className="w-full py-16 bg-navy"
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
            "description": "Collection complète de plus de 8700 logos de clubs de football en haute qualité PNG",
            "image": "https://www.logo-foot.com/og-image.png",
            "sku": "LOGOPCK1",
            "brand": { "@type": "Brand", "name": "FRONT-CLOUD" },
            "offers": {
              "@type": "Offer",
              "url": "https://www.logo-foot.com",
              "priceCurrency": "EUR",
              "price": "9.99",
              "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "FRONT-CLOUD" }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": formattedAvgRating,
              "ratingCount": testimonials.length,
              "reviewCount": "1034",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": testimonials.map(t => ({
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": "5" },
              "author": { "@type": "Person", "name": t.name },
              "reviewBody": t.content
            }))
          })
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Avis collectés concernant notre service
          </h2>
          <p className="text-white/60">Plus de 1000 clients satisfaits</p>
        </div>
        
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          aria-label="Témoignages clients"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem 
                key={index} 
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-navy-light/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 h-full flex flex-col min-h-[200px] hover:border-lime-500/30 transition-all duration-300">
                  {/* Étoiles */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 flex items-center justify-center rounded ${
                          i < testimonial.rating ? 'bg-lime-500' : 'bg-white/20'
                        }`}
                      >
                        <svg viewBox="0 0 24 24" className="w-3 h-3 text-navy fill-current">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{testimonial.title}</h3>
                  <p className="text-white/70 mb-4 flex-grow text-sm leading-relaxed">{testimonial.content}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="font-medium text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.date}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-5 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="hidden md:flex -right-5 bg-white/10 border-white/20 text-white hover:bg-white/20" />

          <div className="flex justify-center gap-1.5 mt-6 md:hidden">
            {testimonials.slice(0, 6).map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex % 6 ? 'bg-lime-500 w-6' : 'bg-white/30'
                }`}
                aria-label={`Aller au témoignage ${idx + 1}`}
                onClick={() => api?.scrollTo(idx)}
              />
            ))}
          </div>
        </Carousel>

        <div className="flex items-center justify-center mt-10">
          <TrustPilotBadge reviewCount={1034} rating={4.8} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
