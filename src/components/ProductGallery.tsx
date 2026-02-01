import React, { useState } from 'react';
import ClubGallery from './gallery/ClubGallery';
import CompetitionGallery from './gallery/CompetitionGallery';
import { generateGalleryItems } from '@/utils/galleryData';
import { LazySection } from './ui/lazy-section';
import { Helmet } from 'react-helmet-async';
import { Gift } from 'lucide-react';

const ProductGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { clubItems, competitionItems } = generateGalleryItems();
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Récupérer les 3 premières images pour le SEO
  const bestSellerItems = clubItems.slice(0, 3);
  
  return (
    <section className="w-full py-12 bg-background">
      <Helmet>
        {bestSellerItems.map((item, index) => (
          <link key={`preload-${index}`} rel="preload" href={item.imageUrl} as="image" />
        ))}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Logos des Clubs de Football - Collection Premium",
            "description": "Plus de 8 600 logo foot des clubs de football en haute qualité",
            "image": bestSellerItems.map(item => item.imageUrl),
            "contentUrl": bestSellerItems.map(item => item.imageUrl),
            "thumbnailUrl": bestSellerItems.map(item => item.imageUrl),
            "about": {
              "@type": "Thing",
              "name": "Logos de Football",
              "description": "Collection des logos de football officiels des grands clubs européens"
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section principale des clubs */}
          <div className="relative">
            <LazySection height="400px">
              <ClubGallery items={clubItems} isLoading={isLoading} />
            </LazySection>
          </div>

          {/* Section bonus avec style différent */}
          <LazySection height="350px" rootMargin="200px">
            <div className="relative">
              {/* Badge bonus */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-lime-100 border border-lime-200 mb-6">
                <Gift className="w-5 h-5 text-lime-600" />
                <span className="text-sm font-semibold text-navy">Bonus offert</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
                Autres logos de football
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Logos des compétitions majeures, drapeaux mondiaux et autres logos de football inclus dans le fichier.
              </p>
              
              <CompetitionGallery items={competitionItems} isLoading={isLoading} />
            </div>
          </LazySection>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
