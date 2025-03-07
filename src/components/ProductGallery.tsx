
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface GalleryItem {
  id: number;
  imageUrl: string;
  videoUrl: string;
  title: string;
  country: string;
  altText: string;
}

// Liste des pays pour le football
const countries = [
  'France', 'Angleterre', 'Espagne', 'Allemagne', 'Italie', 
  'Portugal', 'Pays-Bas', 'Belgique', 'Suisse', 'Autriche',
  'Écosse', 'Irlande', 'Pays de Galles', 'Danemark', 'Norvège',
  'Suède', 'Finlande', 'Russie', 'Ukraine', 'Pologne',
  'République Tchèque', 'Croatie', 'Serbie', 'Grèce', 'Turquie',
  'Roumanie', 'Bulgarie', 'Hongrie', 'Slovaquie', 'Slovénie',
  'Brésil', 'Argentine', 'Uruguay', 'Colombie', 'Chili',
  'États-Unis', 'Mexique', 'Canada', 'Japon', 'Corée du Sud',
  'Australie', 'Maroc', 'Égypte', 'Sénégal', 'Nigeria',
  'Algérie', 'Tunisie', 'Côte d\'Ivoire', 'Ghana', 'Cameroun',
  'Qatar', 'Arabie Saoudite', 'Émirats Arabes Unis', 'Iran', 'Irak',
  'Chine', 'Inde', 'Indonésie', 'Thaïlande', 'Vietnam',
  'Nouvelle-Zélande', 'Afrique du Sud', 'Kenya', 'Israël', 'Kazakhstan'
];

// Format attendu des fichiers:
// - Images: /images/logo1.jpg, /images/logo2.jpg, etc.
// - Vidéos: /videos/logo1.mov, /videos/logo2.mov, etc.
const galleryItems: GalleryItem[] = Array.from({ length: 64 }, (_, index) => {
  const country = countries[index] || 'International';
  return {
    id: index + 1,
    imageUrl: `/images/logo${index + 1}.jpg`,
    videoUrl: `/videos/logo${index + 1}.mov`,
    country: country,
    title: `Logo ${country} - Collection officielle logos clubs de foot`,
    altText: `Logo vectoriel club de football ${country} - Format HD transparent - Collection complète FRONT-CLOUD`,
  };
});

const ProductGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {hoveredItem === item.id ? (
                <video
                  src={item.videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  title={`Animation logo ${item.country} - Collection FRONT-CLOUD`}
                />
              ) : (
                <>
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2">
                    <Play className="w-6 h-6 text-white drop-shadow-lg opacity-70" />
                  </div>
                </>
              )}
              <p className="text-center mt-2 text-sm text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
