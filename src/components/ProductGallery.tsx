
import React, { useState, useEffect } from 'react';
import ClubGallery from './gallery/ClubGallery';
import CompetitionGallery from './gallery/CompetitionGallery';
import { generateGalleryItems } from '@/utils/galleryData';

const ProductGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { clubItems, competitionItems } = generateGalleryItems();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Logos des Clubs de Foot</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Plus de 8 600 logo foot des clubs de football en haute qualité</p>
            <ClubGallery items={clubItems} isLoading={isLoading} />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Autres ressources connexes</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Collection complète des logos des compétitions majeures</p>
            <CompetitionGallery items={competitionItems} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;

