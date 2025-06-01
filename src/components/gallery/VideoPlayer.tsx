
import { useState, useRef } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { VideoPlayerProps } from "@/types/gallery";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const VideoPlayer = ({ videoUrl, title, country }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleError = () => {
    setError('Erreur lors du chargement de la vidéo');
  };

  // Déterminer la description appropriée en fonction du titre
  const getVideoDescription = (title: string, country: string) => {
    if (title.includes("Hugo Ekitike")) {
      return "Le talent français qui s'impose à l'Eintracht Francfort";
    }
    if (title.includes("Collection complète des clubs de football")) {
      return "PNG transparent - Wallet.Type";
    }
    if (title.includes("Collection complète des sélections nationales")) {
      return "PNG transparent - Wallet.Type";
    }
    if (title.includes("Collection complète des drapeaux mondiaux")) {
      return "PNG transparent";
    }
    
    if (country === 'Sélections Nationales') {
      return `Animation logos des sélections nationales de football`;
    }
    if (country === 'Compétitions de football' || country === 'Compétitions internationales' || country === 'Coupes nationales') {
      return `Animation des logos ${country.toLowerCase()}`;
    }
    return `Animation des logos de football ${country}`;
  };

  return (
    <DialogContent className="max-w-[540px] w-full overflow-hidden p-0 border-none shadow-2xl rounded-xl bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="flex flex-col h-full">
        <DialogHeader className="p-1 pb-1 bg-gradient-to-b from-gray-100/90 via-gray-50/50 to-transparent">
          <DialogTitle className="text-gray-800 font-medium text-xs">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-[10px] font-extralight">
            {getVideoDescription(title, country)}
          </DialogDescription>
        </DialogHeader>
        
        <div className="w-full aspect-square max-w-[540px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative">
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/90 z-10">
              <p className="text-red-600 text-sm mb-4">{error}</p>
            </div>
          )}
          
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain"
            controls
            playsInline
            title={title}
            onError={handleError}
            preload="metadata"
          />
        </div>

        <div className="p-4 px-4 bg-gradient-to-t from-gray-100/90 via-gray-50/50 to-transparent">
          <DialogClose asChild>
            <Button 
              variant="outline"
              className={cn(
                "w-full font-medium bg-gray-50/95 border-gray-200/80",
                "hover:bg-white/95 hover:border-gray-300/90",
                "transition-all duration-300 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]",
                "text-gray-700 hover:text-gray-900",
                "backdrop-blur-sm"
              )}
            >
              Fermer
            </Button>
          </DialogClose>
        </div>
      </div>
    </DialogContent>
  );
};

export default VideoPlayer;
