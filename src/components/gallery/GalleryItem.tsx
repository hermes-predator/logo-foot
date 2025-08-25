

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
      'Allemagne': 380,
      'Espagne': 420,
      'Italie': 400,
      'Angleterre': 450,
      'Portugal': 320,
      'Pays-Bas': 340,
      'Belgique': 280,
      'Turquie': 320,
      'Suisse': 240,
      'Écosse': 240,
      'Autriche': 220,
      'Grèce': 260,
      'Ukraine': 240,
      'Russie': 300,
      'Danemark': 220,
      'Norvège': 280,
      'Suède': 280,
      'Pologne': 300,
      'République Tchèque': 280,
      'Croatie': 180,
      'Serbie': 280,
      'Roumanie': 260,
      'Hongrie': 220,
      'Bulgarie': 240,
      'États-Unis': 500,
      'Argentine': 380,
      'Australie': 220,
      'Arabie Saoudite': 280
    };
    
    const logoCount = logoCountByCountry[item.country] || 240;
    return `Fichier de +${logoCount} logos de clubs ${item.country === 'Angleterre' ? 'anglais' : item.country.toLowerCase()}`;
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
        <p className="text-sm text-gray-600 transition-opacity duration-200 hover:opacity-100 opacity-80">
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

