
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
import { useEffect } from "react";

const VideoPlayer = ({ videoUrl, title, country }: VideoPlayerProps) => {
  // Désactiver le clic droit sur l'ensemble de la fenêtre modale
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Ajouter un message de notification si quelqu'un tente de capturer la vidéo
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquer les combinaisons de touches de capture d'écran
      if ((e.ctrlKey && (e.key === 'p' || e.key === 's')) || 
          (e.key === 'PrintScreen') || 
          (e.key === 'F12')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <DialogContent className="w-[550px] overflow-hidden p-0 border-none shadow-2xl rounded-xl bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="flex flex-col h-full">
        <DialogHeader className="p-1 pb-1 bg-gradient-to-b from-gray-100/90 via-gray-50/50 to-transparent">
          <DialogTitle className="text-gray-800 font-medium text-xs">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-[10px] font-extralight">
            Animation des logos de football {country}
          </DialogDescription>
        </DialogHeader>
        
        <div className="w-[550px] h-[550px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center pr-9 protected-content">
          <video
            src={videoUrl}
            className="w-full h-full object-contain"
            autoPlay
            controls
            loop
            playsInline
            title={title}
            onContextMenu={(e) => e.preventDefault()}
            controlsList="nodownload nofullscreen"
            disablePictureInPicture
          />
          <div className="absolute top-2 right-3 text-[10px] text-gray-400 opacity-70">
            © 2024 FootLogos
          </div>
        </div>

        <div className="p-4 pr-14 bg-gradient-to-t from-gray-100/90 via-gray-50/50 to-transparent">
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
