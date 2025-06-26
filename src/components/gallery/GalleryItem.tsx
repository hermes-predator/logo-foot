

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
                  ref={imgRef}
                  src={(isInView || isPriority) ? item.imageUrl : '/placeholder.svg'}
                  alt={getSeoDescription(item)}
                  className="w-full h-full object-contain transition-opacity duration-300"
                  loading={isPriority ? "eager" : "lazy"}
                  decoding={isPriority ? "sync" : "async"}
                  itemProp={isPriority ? "image" : undefined}
                  fetchPriority={isPriority ? "high" : "auto"}
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
      <p className="text-center mt-2 text-sm text-gray-600 transition-opacity duration-200 hover:opacity-100 opacity-80">
        {item.title}
      </p>
    </div>
  );
};

export default GalleryItem;

