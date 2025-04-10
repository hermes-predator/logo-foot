
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Play, Maximize2 } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { GalleryItemProps } from "@/types/gallery";
import { useLazyLoading } from "@/hooks/useLazyLoading";
import { Skeleton } from "@/components/ui/skeleton";

const GalleryItem = ({ item, onHover, isHovered, isPriority = false }: GalleryItemProps) => {
  const { isInView, imgRef } = useLazyLoading();

  const getVideoTitle = (country: string) => {
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
          <button className="w-full h-full text-left">
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
                  alt={item.altText}
                  className="w-full h-full object-contain transition-opacity duration-300"
                  loading={isPriority ? "eager" : "lazy"}
                  decoding={isPriority ? "sync" : "async"}
                  itemProp={isPriority ? "image" : undefined}
                />
                <div className="absolute bottom-2 right-2 transform transition-all duration-200 ease-out hover:scale-110">
                  <Play className="w-6 h-6 text-white drop-shadow-lg opacity-70" />
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
