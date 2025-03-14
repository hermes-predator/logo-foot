import React, { useState, useEffect } from 'react';
import { GalleryItem as GalleryItemType } from '@/types/gallery';
import ClubGallery from './gallery/ClubGallery';
import CompetitionGallery from './gallery/CompetitionGallery';

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
  'Arabie Saoudite': 'Saudi Pro League',
  'Slovaquie': 'Super Liga',
  'Biélorussie': 'Premier League',
  'Bosnie-Herzégovine': 'Premier League',
  'Islande': 'Úrvalsdeild',
  'Israël': 'Premier League',
  'Luxembourg': 'National Division',
  'Slovénie': 'PrvaLiga',
  'Albanie': 'Superliga',
  'Malte': 'Premier League',
  'Azerbaïdjan': 'Premier League',
  'Moldavie': 'Super Liga',
  'Arménie': 'Premier League',
  'Chypre': 'First Division',
  'Estonie': 'Meistriliiga',
  'Géorgie': 'Erovnuli Liga',
  'Kazakhstan': 'Premier League',
  'Kosovo': 'Superliga',
  'Lettonie': 'Virsliga',
  'Lituanie': 'A Lyga',
  'Macédoine du Nord': 'First League',
  'Monténégro': 'First League',
  'Iles Féroés': 'Premier League',
  'Qatar': 'Stars League',
  'Gibraltar': 'National League'
];

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
    'Argentine': 'argentins',
    'Australie': 'australiens',
    'Arabie Saoudite': 'saoudiens',
    'Slovaquie': 'slovaques',
    'Biélorussie': 'biélorusses',
    'Bosnie-Herzégovine': 'bosniens',
    'Islande': 'islandais',
    'Israël': 'israéliens',
    'Luxembourg': 'luxembourgeois',
    'Slovénie': 'slovènes',
    'Albanie': 'albanais',
    'Malte': 'maltais',
    'Azerbaïdjan': 'azerbaïdjanais',
    'Moldavie': 'moldaves',
    'Arménie': 'arméniens',
    'Chypre': 'chypriotes',
    'Estonie': 'estoniens',
    'Géorgie': 'géorgiens',
    'Kazakhstan': 'kazakhs',
    'Kosovo': 'kosovars',
    'Lettonie': 'lettons',
    'Lituanie': 'lituaniens',
    'Macédoine du Nord': 'macédoniens',
    'Monténégro': 'monténégrins',
    'Iles Féroés': 'féroïens',
    'Qatar': 'qataris',
    'Gibraltar': 'gibraltariens'
  };

  if (country === 'Sélections Nationales') {
    return 'Collection complète des logos des sélections nationales de football - Format HD transparent - Tous les pays';
  }

  if (country === 'Compétitions de football' || country === 'Compétitions internationales' || country === 'Coupes nationales') {
    return `Collection complète des logos ${country.toLowerCase()} - Format HD transparent - ${country}`;
  }

  const adjective = countryAdjectives[country] || `de ${country}`;
  const championship = countryChampionships[country];
  
  if (championship) {
    return `Collection complète des logos de club de foot ${adjective} - Format HD transparent - Toutes les équipes de foot de la ${championship} - ${country}`;
  }

  return `Collection complète des logos de club de foot ${adjective} - Format HD transparent - ${country}`;
};

const clubItems: GalleryItemType[] = Array.from({ length: 60 }, (_, index) => {
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

const competitionItems: GalleryItemType[] = Array.from({ length: 4 }, (_, index) => {
  const arrayIndex = index + 60;
  const country = countries[arrayIndex] || 'International';
  return {
    id: arrayIndex + 1,
    imageUrl: `/public/images/logo${arrayIndex + 1}.png`,
    videoUrl: `/public/videos/video${arrayIndex + 1}.mov`,
    country: country,
    title: `Logo ${country} - Collection officielle logos clubs de foot`,
    altText: getCountryDescription(country),
  };
});

const ProductGallery = () => {
  const [isLoading, setIsLoading] = useState(true);

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
