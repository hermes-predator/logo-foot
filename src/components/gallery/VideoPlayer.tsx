
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { X } from "lucide-react";
import { VideoPlayerProps } from "@/types/gallery";

const VideoPlayer = ({ videoUrl, title, country }: VideoPlayerProps) => {
  return (
    <DialogContent className="max-w-4xl w-[90vw] p-0 bg-gradient-to-b from-gray-900 to-black border-none shadow-2xl">
      <DialogHeader className="p-4 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent">
        <DialogTitle className="text-white font-medium">
          {title}
        </DialogTitle>
        <DialogDescription className="text-gray-300 text-sm">
          Animation des logos de football {country}
        </DialogDescription>
      </DialogHeader>
      <div className="relative w-full aspect-video">
        <video
          src={videoUrl}
          className="w-full h-full object-contain"
          autoPlay
          controls
          loop
          playsInline
          title={title}
        />
      </div>
      <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
        <X className="h-4 w-4 text-white" />
      </DialogClose>
    </DialogContent>
  );
};

export default VideoPlayer;
