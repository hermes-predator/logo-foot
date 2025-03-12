
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

const VideoPlayer = ({ videoUrl, title, country }: VideoPlayerProps) => {
  return (
    <DialogContent className="max-w-4xl w-[90vw] overflow-hidden p-0 bg-gradient-to-br from-gray-900/95 via-gray-900 to-black border-none shadow-2xl rounded-xl">
      <DialogHeader className="p-6 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
        <DialogTitle className="text-white font-medium text-xl">
          {title}
        </DialogTitle>
        <DialogDescription className="text-gray-300 text-sm font-light">
          Animation des logos de football {country}
        </DialogDescription>
      </DialogHeader>
      
      <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 to-black">
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

      <DialogClose className={cn(
        "absolute top-4 right-4",
        "p-2.5 rounded-full",
        "bg-black/40 hover:bg-black/60",
        "backdrop-blur-sm",
        "border border-white/10",
        "transition-all duration-200 ease-out",
        "hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-white/20"
      )}>
        <X className="h-4 w-4 text-white/90" />
        <span className="sr-only">Fermer</span>
      </DialogClose>
    </DialogContent>
  );
};

export default VideoPlayer;
