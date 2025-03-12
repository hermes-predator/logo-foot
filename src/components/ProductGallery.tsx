import React, { useState } from 'react';
import GalleryItem from './gallery/GalleryItem';
import { GalleryItem as GalleryItemType } from '@/types/gallery';

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

const getCountryDescription = (country: string) => {
  const countryAdjectives: { [key: string]: string } = {
    'France': 'français',
    'Allemagne': 'allemands',
    'Espagne': 'espagnols',
    'Italie': 'italiens',
    'Angleterre': 'anglais',
    'Portugal': 'portugais',
    'Brésil': 'brésiliens',
    'Pays-Bas': 'néerlandais',
    'Belgique': 'belges',
    'Turquie': 'turcs',
    'Suisse': 'suisses',
    'Écosse': 'écossais',
    'Autriche': 'autrichiens',
    'Grèce': 'grecs',
    'Ukraine': 'ukrainiens',
    'Russie': 'russes',
    'Danemark': 'danois',
    'Norvège': 'norvégiens',
    'Suède': 'suédois',
    'Pologne': 'polonais',
    'Roumanie': 'roumains',
    'Hongrie': 'hongrois',
    'Bulgarie': 'bulgares',
    'États-Unis': 'américains',
    'Argentine': 'argentins'
  };

  if (country === 'Sélections Nationales') {
    return 'Collection complète des logos des sélections nationales de football - Format HD transparent - Tous les pays';
  }

  if (country === 'Compétitions de football' || country === 'Compétitions internationales' || country === 'Coupes nationales') {
    return `Collection complète des logos ${country.toLowerCase()} - Format HD transparent`;
  }

  const adjective = countryAdjectives[country] || `de ${country}`;
  const championship = countryChampionships[country];
  if (championship) {
    return `Collection complète des logos de club de foot ${adjective} - Format HD transparent - Toutes les équipes de foot de la ${championship} - ${country}`;
  }

  return `Collection complète des logos de foot ${adjective} - Format HD transparent - Toutes les équipes de foot - ${country}`;
};

const galleryItems: GalleryItemType[] = Array.from({ length: 64 }, (_, index) => {
  const country = countries[index] || 'International';
  return {
    id: index + 1,
    imageUrl: `/public/images/logo${index + 1}.png`,
    videoUrl: `/public/videos/video${index + 1}.mov`,
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
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onHover={setHoveredItem}
              isHovered={hoveredItem === item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
