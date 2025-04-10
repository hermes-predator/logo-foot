
import React, { useState, useEffect } from 'react';
import ClubGallery from './gallery/ClubGallery';
import CompetitionGallery from './gallery/CompetitionGallery';
import { generateGalleryItems } from '@/utils/galleryData';
import { LazySection } from './ui/lazy-section';
import { Helmet } from 'react-helmet-async';
import { ImageObjectSchema } from './schema/ImageObjectSchema';

const ProductGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { clubItems, competitionItems } = generateGalleryItems();
  
  // Identifier les 3 premières images (best-sellers)
  const featuredItems = clubItems.slice(0, 3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Précharger nos images vedettes pour garantir un chargement rapide
    if (featuredItems.length > 0) {
      featuredItems.forEach(item => {
        const img = new Image();
        img.src = item.imageUrl;
        img.importance = 'high'; // Indique au navigateur de prioriser ces images
      });
    }

    return () => clearTimeout(timer);
  }, [featuredItems]);

  // Générer des schémas JSON-LD optimisés pour les 3 best-sellers
  const enhancedImageSchemas = featuredItems.map((item, index) => 
    ImageObjectSchema({
      imageUrl: item.imageUrl,
      title: `Best-seller ${index + 1}: ${item.title}`,
      altText: `Logo officiel ${item.country} - Collection premium haute qualité`,
      authorName: "FRONT-CLOUD",
      width: 1200,
      height: 1200,
      datePublished: "2025-04-01" // Date fixe pour donner de l'ancienneté
    })
  );

  return (
    <section className="w-full min-h-screen bg-white">
      <Helmet>
        {/* Schémas JSON-LD améliorés pour les best-sellers */}
        {enhancedImageSchemas.map((schema, index) => (
          <script key={`featured-image-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
        
        {/* Preload pour les images vedettes */}
        {featuredItems.map((item, index) => (
          <link 
            key={`preload-${index}`} 
            rel="preload" 
            href={item.imageUrl} 
            as="image" 
            importance="high" 
          />
        ))}
      </Helmet>

      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Logos des Clubs de Foot</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Plus de 8 600 logo foot des clubs de football en haute qualité</p>
            
            {/* Section des Best-Sellers mise en évidence */}
            {!isLoading && featuredItems.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nos Best-Sellers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {featuredItems.map((item, index) => (
                    <div 
                      key={`featured-${item.id}`}
                      className="relative rounded-lg overflow-hidden transform transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-xl border-2 border-gray-100 shadow-md"
                    >
                      <img
                        src={item.imageUrl}
                        alt={`Best-seller ${index + 1}: ${item.altText}`}
                        className="w-full h-full object-contain"
                        loading="eager"
                        decoding="sync"
                        width={400}
                        height={400}
                        itemProp="image"
                      />
                      <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                        TOP {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <LazySection height="400px">
              <ClubGallery items={clubItems} isLoading={isLoading} />
            </LazySection>
          </div>

          <LazySection 
            height="350px" 
            className="pt-8"
            rootMargin="200px"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Autres logos de foot connexes</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Logos des compétitions de foot majeures, logos des bookmakers...</p>
              <CompetitionGallery items={competitionItems} isLoading={isLoading} />
            </div>
          </LazySection>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
