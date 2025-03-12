
import React, { useState } from 'react';
import { Play, Maximize2, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

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

const galleryItems: GalleryItem[] = Array.from({ length: 64 }, (_, index) => {
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
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const getVideoTitle = (country: string) => {
    if (country === 'Sélections Nationales') {
      return 'Animation logos des sélections nationales de football';
    }
    if (country === 'Compétitions de football' || country === 'Compétitions internationales' || country === 'Coupes nationales') {
      return `Animation logos ${country.toLowerCase()}`;
    }
    const championship = countryChampionships[country];
    return championship ? `Animation logo foot ${championship}` : `Animation logo foot ${country}`;
  };

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
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full h-full text-left" onClick={() => setSelectedItem(item)}>
                    {hoveredItem === item.id ? (
                      <div className="w-full h-full">
                        <video
                          src={item.videoUrl}
                          className="absolute inset-0 w-full h-full object-contain bg-gray-900/95"
                          autoPlay
                          muted
                          loop
                          playsInline
                          title={getVideoTitle(item.country)}
                        />
                        <div className="absolute top-2 right-2 transform transition-all duration-300 ease-out hover:scale-110">
                          <Maximize2 className="w-6 h-6 text-white drop-shadow-lg opacity-70" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={item.imageUrl}
                          alt={item.altText}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute bottom-2 right-2 transform transition-all duration-300 ease-out hover:scale-110">
                          <Play className="w-6 h-6 text-white drop-shadow-lg opacity-70" />
                        </div>
                      </>
                    )}
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[90vw] p-0 bg-gradient-to-b from-gray-900 to-black border-none shadow-2xl">
                  <DialogHeader className="p-4 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent">
                    <DialogTitle className="text-white font-medium">
                      {getVideoTitle(item.country)}
                    </DialogTitle>
                    <DialogDescription className="text-gray-300 text-sm">
                      Animation des logos de football {item.country}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="relative w-full aspect-video">
                    <video
                      src={item.videoUrl}
                      className="w-full h-full object-contain"
                      autoPlay
                      controls
                      loop
                      playsInline
                      title={getVideoTitle(item.country)}
                    />
                  </div>
                  <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
                    <X className="h-4 w-4 text-white" />
                  </DialogClose>
                </DialogContent>
              </Dialog>
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
