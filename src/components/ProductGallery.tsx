import React, { useState, useEffect } from 'react';
import ClubGallery from './gallery/ClubGallery';
import CompetitionGallery from './gallery/CompetitionGallery';
import { generateGalleryItems } from '@/utils/galleryData';
import { LazySection } from './ui/lazy-section';
import { Helmet } from 'react-helmet-async';
import { Eye, MousePointer } from 'lucide-react';
const ProductGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    clubItems,
    competitionItems
  } = generateGalleryItems();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Récupérer les 3 premières images pour le SEO (best-sellers)
  const bestSellerItems = clubItems.slice(0, 3);
  return <section className="w-full min-h-screen bg-white">
      <Helmet>
        {/* Préchargement des images prioritaires pour Google */}
        {bestSellerItems.map((item, index) => <link key={`preload-${index}`} rel="preload" href={item.imageUrl} as="image"
      // Pas d'attribut importance car non supporté sur le type HTMLLinkElement
      />)}
        
        {/* Schéma LD+JSON pour les images (pour Google Images) */}
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

      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <div className="relative">
            {/* Badge flottant discret - taille ajustée */}
            <div className="absolute top-2 right-0 z-10 transform translate-x-0 translate-y-2">
              <div className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs px-3 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-sm">
                <Eye className="w-3.5 h-3.5 opacity-70" />
                <span className="font-medium">Survolez les dossiers</span>
                <MousePointer className="w-3.5 h-3.5" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Logo des Clubs de Foot</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Plus de 8 600 logo des équipes de football uniformes, nommés et triés par pays</p>
            
            <LazySection height="400px">
              <ClubGallery items={clubItems} isLoading={isLoading} />
            </LazySection>
          </div>

          <LazySection height="350px" className="pt-8" rootMargin="200px">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Logo de foot - Autres ressources de logos de football</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Logos des compétitions de foot majeures, drapeaux mondiaux et bien plus encore (Voir le Descriptif du ZIP)</p>
              <CompetitionGallery items={competitionItems} isLoading={isLoading} />
            </div>
          </LazySection>
        </div>
      </div>
    </section>;
};
export default ProductGallery;