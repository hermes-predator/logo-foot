

import { Dialog, DialogTrigger } from "../ui/dialog";
import { Eye, Maximize2 } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { GalleryItemProps } from "@/types/gallery";
import { useLazyLoading } from "@/hooks/useLazyLoading";
import { Skeleton } from "@/components/ui/skeleton";

const GalleryItem = ({ item, onHover, isHovered, isPriority = false }: GalleryItemProps) => {
  const { isInView, imgRef } = useLazyLoading();

  const getVideoTitle = (country: string) => {
    // Titres spécifiques pour les articles 62, 63 et 64
    if (item.id === 62) {
      return 'Collection complète des clubs de football populaire - PNG transparent - Wallet.Type';
    }
    if (item.id === 63) {
      return 'Collection complète des sélections nationales - PNG transparent - Wallet.Type';
    }
    if (item.id === 64) {
      return 'Collection complète des drapeaux mondiaux - PNG transparent';
    }
    // Titres pour les autres articles
    if (country === 'Sélections Nationales') {
      return 'Animation logos des sélections nationales de football';
    }
    if (country === 'Compétitions de football' || country === 'Compétitions internationales' || country === 'Coupes nationales') {
      return `Animation logos ${country.toLowerCase()}`;
    }
    const championships: { [key: string]: string } = {
      'France': 'Ligue 1',
      'Allemagne': 'Bundesliga',
      'Espagne': 'La Liga',
      'Italie': 'Serie A',
      'Angleterre': 'Premier League',
      'Portugal': 'Liga Portugal',
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
    return championships[country] ? 
      `Animation logo foot ${country} ${championships[country]}` : 
      `Animation logo foot ${country}`;
  };

  // Fonction pour obtenir le texte descriptif de la collection
  const getCollectionText = (item: GalleryItemProps['item']): string => {
    // Pour les collections spéciales (items 61-64)
    if (item.id === 61) return "Article spécialisé Hugo Ekitike";
    if (item.id === 62) return "Collection de 50 logos de clubs populaires";
    if (item.id === 63) return "Collection de 32 logos de sélections nationales";
    if (item.id === 64) return "Collection de 195 drapeaux mondiaux";
    
    // Pour les clubs (items 1-60)
    const logoCountByCountry: { [key: string]: number } = {
      'France': 450,
      'Allemagne': 450,
      'Espagne': 450,
      'Italie': 400,
      'Angleterre': 450,
      'Portugal': 200,
      'Pays-Bas': 300,
      'Belgique': 150,
      'Turquie': 200,
      'Suisse': 150,
      'Écosse': 100,
      'Autriche': 120,
      'Grèce': 150,
      'Ukraine': 100,
      'Russie': 150,
      'Danemark': 150,
      'Norvège': 150,
      'Suède': 150,
      'Pologne': 150,
      'République Tchèque': 150,
      'Croatie': 120,
      'Serbie': 120,
      'Slovaquie': 120,
      'Roumanie': 150,
      'Hongrie': 120,
      'Bulgarie': 120,
      'États-Unis': 300,
      'Argentine': 200,
      'Brésil': 300,
      'Biélorussie': 100,
      'Irlande': 100,
      'Pays de Galles': 100,
      'Finlande': 100,
      'Australie': 80,
      'Arabie Saoudite': 80,
      'Bosnie-Herzégovine': 80,
      'Islande': 80,
      'Israël': 80,
      'Luxembourg': 80,
      'Slovénie': 80,
      'Albanie': 70,
      'Irlande du Nord': 60,
      'Malte': 60,
      'Azerbaïdjan': 50,
      'Moldavie': 50,
      'Arménie': 40,
      'Chypre': 40,
      'Estonie': 40,
      'Géorgie': 40,
      'Kazakhstan': 40,
      'Kosovo': 40,
      'Lettonie': 40,
      'Lituanie': 40,
      'Macédoine du Nord': 40,
      'Monténégro': 40,
      'Default': 20,
      'Iles Féroés': 20,
      'Qatar': 20,
      'Gibraltar': 12
    };

    // Conversion des noms de pays en adjectifs de nationalité
    const countryToAdjective: { [key: string]: string } = {
      'France': 'français',
      'Allemagne': 'allemands',
      'Espagne': 'espagnols',
      'Italie': 'italiens',
      'Angleterre': 'anglais',
      'Portugal': 'portugais',
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
      'République Tchèque': 'tchèques',
      'Croatie': 'croates',
      'Serbie': 'serbes',
      'Roumanie': 'roumains',
      'Hongrie': 'hongrois',
      'Bulgarie': 'bulgares',
      'Slovaquie': 'slovaques',
      'Biélorussie': 'biélorusses',
      'Irlande': 'irlandais',
      'Pays de Galles': 'gallois',
      'Finlande': 'finlandais',
      'Bosnie-Herzégovine': 'bosniens',
      'Islande': 'islandais',
      'Israël': 'israéliens',
      'Luxembourg': 'luxembourgeois',
      'Slovénie': 'slovènes',
      'Albanie': 'albanais',
      'Irlande du Nord': 'nord-irlandais',
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
      'Gibraltar': 'gibraltariens',
      'États-Unis': 'américains',
      'Argentine': 'argentins',
      'Brésil': 'brésiliens',
      'Australie': 'australiens',
      'Arabie Saoudite': 'saoudiens'
    };
    
    const logoCount = logoCountByCountry[item.country] || 240;
    const adjective = countryToAdjective[item.country] || item.country.toLowerCase();
    return `Fichier de + ${logoCount} logos de clubs ${adjective}`;
  };

  // Fonction pour obtenir le nombre de logos par fichier (pour l'ancien texte)
  const getLogoCount = (id: number): number => {
    // Collections spéciales avec beaucoup de logos
    if (id === 62) return 50; // Collection clubs populaires
    if (id === 63) return 32; // Collection sélections nationales
    if (id === 64) return 195; // Collection drapeaux mondiaux
    if (id === 61) return 1; // Article Hugo Ekitike
    
    // Pour les autres pays, nombre approximatif de clubs par pays
    const logoCountByCountry: { [key: string]: number } = {
      'France': 20,
      'Allemagne': 18,
      'Espagne': 20,
      'Italie': 20,
      'Angleterre': 20,
      'Portugal': 18,
      'Pays-Bas': 18,
      'Belgique': 16,
      'Turquie': 18,
      'Suisse': 12,
      'Écosse': 12,
      'Autriche': 12,
      'Grèce': 14,
      'Ukraine': 12,
      'Russie': 16,
      'Danemark': 12,
      'Norvège': 16,
      'Suède': 16,
      'Pologne': 16,
      'République Tchèque': 16,
      'Croatie': 10,
      'Serbie': 16,
      'Roumanie': 14,
      'Hongrie': 12,
      'Bulgarie': 14,
      'États-Unis': 28,
      'Argentine': 20,
      'Australie': 12,
      'Arabie Saoudite': 16
    };
    
    // Trouver le pays correspondant à cet ID
    const countries = [
      'France', 'Allemagne', 'Espagne', 'Italie', 'Angleterre', 'Portugal', 'Pays-Bas', 'Belgique',
      'Turquie', 'Suisse', 'Écosse', 'Autriche', 'Grèce', 'Ukraine', 'Russie', 'Danemark',
      'Norvège', 'Suède', 'Pologne', 'République Tchèque', 'Croatie', 'Serbie', 'Roumanie',
      'Hongrie', 'Bulgarie', 'États-Unis', 'Argentine', 'Australie', 'Arabie Saoudite'
    ];
    
    const countryIndex = (id - 1) % countries.length;
    const country = countries[countryIndex];
    return logoCountByCountry[country] || 12;
  };

  // Fonction pour déterminer la description SEO appropriée
  const getSeoDescription = (item: GalleryItemProps['item']) => {
    // Description spécifique pour l'article n°62
    if (item.id === 62) {
      return "Collection complète des clubs de football populaire - PNG transparent - Wallet.Type";
    }
    // Description spécifique pour l'article n°63
    if (item.id === 63) {
      return "Collection complète des sélections nationales - PNG transparent - Wallet.Type";
    }
    // Description spécifique pour l'article n°64
    if (item.id === 64) {
      return "Collection complète des drapeaux mondiaux - PNG transparent";
    }
    // Pour les autres éléments, utiliser la description existante
    return item.altText;
  };

  return (
    <div className="space-y-2">
      <div
        className="relative aspect-square rounded-lg overflow-hidden transform transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl"
        style={{
          opacity: 0,
          animation: `fadeIn 0.3s ease-out ${item.id * 0.05}s forwards`
        }}
        onMouseEnter={() => onHover(item.id)}
        onMouseLeave={() => onHover(null)}
      >
        <Dialog>
          <DialogTrigger asChild>
            <button 
              className="w-full h-full text-left group"
              aria-label={`Voir ${item.title}`}
            >
              {isHovered ? (
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
                  <div className="absolute top-2 right-2 transform transition-all duration-200 ease-out hover:scale-110">
                    <Maximize2 className="w-6 h-6 text-white drop-shadow-lg opacity-70" />
                  </div>
                </div>
              ) : (
                <>
                  {!isInView && !isPriority && (
                    <Skeleton className="w-full h-full absolute inset-0" />
                  )}
                  <img
                    ref={(el) => {
                      imgRef.current = el;
                      if (el && isPriority) {
                        el.setAttribute('fetchpriority', 'high');
                      }
                    }}
                    src={(isInView || isPriority) ? item.imageUrl : '/placeholder.svg'}
                    alt={getSeoDescription(item)}
                    className="w-full h-full object-contain transition-opacity duration-300"
                    loading={isPriority ? "eager" : "lazy"}
                    decoding={isPriority ? "sync" : "async"}
                    itemProp={isPriority ? "image" : undefined}
                    data-caption={item.title}
                    data-description={getSeoDescription(item)}
                  />
                  {/* Icône œil avec le même style que BlogHeaderCarousel */}
                  <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-70 group-hover:opacity-100 group-hover:bg-black/70 transition-all duration-300">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </>
              )}
            </button>
          </DialogTrigger>
          <VideoPlayer 
            videoUrl={item.videoUrl}
            title={getVideoTitle(item.country)}
            country={item.country}
          />
        </Dialog>
      </div>
      <div className="text-center space-y-1">
        <p className="text-sm text-gray-900 transition-opacity duration-200 hover:opacity-100 opacity-80 font-semibold">
          {item.title}
        </p>
        <p className="text-xs text-gray-500 font-medium">
          {getCollectionText(item)}
        </p>
      </div>
    </div>
  );
};

export default GalleryItem;

