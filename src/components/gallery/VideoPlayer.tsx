
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { X } from "lucide-react";
import { VideoPlayerProps } from "@/types/gallery";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const VideoPlayer = ({ videoUrl, title, country }: VideoPlayerProps) => {
  return (
    <DialogContent className="w-[550px] overflow-hidden p-0 border-none shadow-2xl rounded-xl bg-gradient-to-br from-gray-900/95 via-gray-900 to-black">
      <div className="flex flex-col h-full">
        <DialogHeader className="p-6 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
          <DialogTitle className="text-white font-medium text-xl">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-sm font-light">
            Animation des logos de football {country}
          </DialogDescription>
        </DialogHeader>
        
        <div className="w-[550px] h-[550px] bg-gradient-to-br from-gray-900 to-black">
          <video
            src={videoUrl}
            className={cn(
              "w-full h-full object-contain",
              "transition-opacity duration-300 ease-in-out"
            )}
            autoPlay
            controls
            loop
            playsInline
            title={title}
          />
        </div>

        <div className="p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex justify-center">
          <DialogClose asChild>
            <Button 
              variant="outline" 
              className={cn(
                "bg-white/10 hover:bg-white/20 border-white/20",
                "text-white font-medium",
                "transition-all duration-200",
                "px-8"
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
