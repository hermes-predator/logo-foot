
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
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Logos des Clubs de Foot</h2>
          <ClubGallery items={clubItems} isLoading={isLoading} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Logos des Compétitions</h2>
          <CompetitionGallery items={competitionItems} isLoading={isLoading} />
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
