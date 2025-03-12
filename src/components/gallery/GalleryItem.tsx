
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Play, Maximize2 } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { GalleryItemProps } from "@/types/gallery";

const GalleryItem = ({ item, onHover, isHovered }: GalleryItemProps) => {
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
      // ... add other championships as needed
    };
    return championships[country] ? 
      `Animation logo foot ${championships[country]}` : 
      `Animation logo foot ${country}`;
  };

  return (
    <div
      className="relative aspect-square rounded-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl"
      style={{
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${item.id * 0.1}s forwards`
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
        <VideoPlayer 
          videoUrl={item.videoUrl}
          title={getVideoTitle(item.country)}
          country={item.country}
        />
      </Dialog>
      <p className="text-center mt-2 text-sm text-gray-600 transition-opacity duration-300 hover:opacity-100 opacity-80">
        {item.title}
      </p>
    </div>
  );
};

export default GalleryItem;
