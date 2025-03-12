
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
  return (
    <DialogContent className="w-[550px] overflow-hidden p-0 border-none shadow-2xl rounded-xl bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="flex flex-col h-full">
        <DialogHeader className="p-6 bg-gradient-to-b from-gray-100/90 via-gray-50/50 to-transparent">
          <DialogTitle className="text-gray-800 font-medium text-xl">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm font-light">
            Animation des logos de football {country}
          </DialogDescription>
        </DialogHeader>
        
        <div className="w-[550px] h-[550px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          <video
            src={videoUrl}
            className="w-[550px] h-[550px] object-contain"
            autoPlay
            controls
            loop
            playsInline
            title={title}
          />
        </div>

        <div className="p-4 pr-14 bg-gradient-to-t from-gray-100/90 via-gray-50/50 to-transparent">
          <DialogClose asChild>
            <Button 
              variant="destructive"
              className={cn(
                "w-full font-medium",
                "transition-all duration-200",
                "hover:bg-red-600"
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
