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

const countries = [
  'Angleterre', 'Allemagne', 'Espagne', 'France', 'Italie',
  'Brésil', 'États-Unis', 'Pays-Bas', 'Sélections Nationales', 'Argentine',
  'Portugal', 'Turquie', 'Belgique', 'Danemark', 'Grèce',
  'Norvège', 'Pologne', 'Roumanie', 'Russie', 'Suède',
  'Suisse', 'République Tchèque', 'Autriche', 'Bulgarie', 'Croatie',
  'Hongrie', 'Serbie', 'Slovaquie', 'Biélorussie', 'Écosse',
  'Irlande', 'Pays de Galles', 'Finlande', 'Ukraine', 'Australie',
  'Arabie Saoudite', 'Bosnie-Herzégovine', 'Islande', 'Israël', 'Luxembourg',
  'Slovénie', 'Albanie', 'Irlande du Nord', 'Malte', 'Azerbaïdjan',
  'Moldavie', 'Arménie', 'Chypre', 'Estonie', 'Géorgie',
  'Kazakhstan', 'Kosovo', 'Lettonie', 'Lituanie', 'Macédoine du Nord',
  'Monténégro', 'Default', 'Iles Féroés', 'Qatar', 'Gibraltar',
  'Compétitions de football', 'Compétitions internationales', 'Coupes nationales', 'Championnats'
];

const getCountryDescription = (country: string) => {
  const countryChampionships: { [key: string]: string } = {
    'France': 'Ligue 1',
    'Allemagne': 'Bundesliga',
    'Espagne': 'La Liga',
    'Italie': 'Serie A',
    'Angleterre': 'Premier League',
    'Portugal': 'Liga Portugal',
    'Brésil': 'Brasileirão',
    'Pays-Bas': 'Eredivisie',
    'Belgique': 'Pro League',
    'Turquie': 'Süper Lig',
    'Suisse': 'Super League',
    'Écosse': 'Scottish Premiership',
    'Autriche': 'Bundesliga',
    'Grèce': 'Super League',
    'Ukraine': 'Premier League',
    'Russie': 'Premier Liga',
    'Danemark': 'Superliga',
    'Norvège': 'Eliteserien',
    'Suède': 'Allsvenskan',
    'Pologne': 'Ekstraklasa',
    'République Tchèque': 'First League',
    'Croatie': 'HNL',
    'Serbie': 'Super Liga',
    'Roumanie': 'Liga I',
    'Hongrie': 'NB I',
    'Bulgarie': 'First League',
    'États-Unis': 'MLS',
    'Argentine': 'Primera División',
    'Australie': 'A-League',
    'Arabie Saoudite': 'Saudi Pro League'
  };

  const countryAdjectives: { [key: string]: string } = {
    'France': 'Français',
    'Allemagne': 'Allemands',
    'Espagne': 'Espagnols',
    'Italie': 'Italiens',
    'Angleterre': 'Anglais',
    'Portugal': 'Portugais',
    'Brésil': 'Brésiliens',
    'Pays-Bas': 'Néerlandais',
    'Belgique': 'Belges',
  };

  const adjective = countryAdjectives[country] || `de ${country}`;
  const championship = countryChampionships[country] ? ` de la ${countryChampionships[country]}` : '';

  return `Collection complète des logos de foot ${adjective} - Format HD transparent - Collection complète équipes de foot${championship} - ${country}`;
};

const galleryItems: GalleryItem[] = Array.from({ length: 64 }, (_, index) => {
  const country = countries[index] || 'International';
  return {
    id: index + 1,
    imageUrl: `/images/logo${index + 1}.jpg`,
    videoUrl: `/videos/logo${index + 1}.mov`,
    country: country,
    title: `Logo ${country} - Collection officielle logos clubs de foot`,
    altText: getCountryDescription(country),
  };
});

const ProductGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {hoveredItem === item.id ? (
                <video
                  src={item.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out scale-105"
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
                    className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 transform transition-all duration-300 ease-out hover:scale-110">
                    <Play className="w-6 h-6 text-white drop-shadow-lg opacity-70" />
                  </div>
                </>
              )}
              <p className="text-center mt-2 text-sm text-gray-600 transition-opacity duration-300 hover:opacity-100 opacity-80">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
