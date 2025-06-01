
import { useState, useEffect, useRef } from "react";
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
import { Play, Pause, Volume2, VolumeX, Loader, Maximize } from "lucide-react";
import { Slider } from "../ui/slider";

const VideoPlayer = ({ videoUrl, title, country }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [error, setError] = useState<string | null>(null);

  // Désactiver le clic droit sur l'ensemble de la fenêtre modale
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
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

  // Gérer le chargement et les erreurs de la vidéo
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        setLoading(false);
        console.log('Vidéo chargée avec succès');
      };
      
      const handleWaiting = () => setLoading(true);
      const handlePlaying = () => setLoading(false);
      
      const handleError = (e: Event) => {
        console.error('Erreur de chargement vidéo:', e);
        setError('Erreur lors du chargement de la vidéo');
        setLoading(false);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  // Mettre à jour la progression de la vidéo
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleTimeUpdate = () => {
        const progress = (video.currentTime / video.duration) * 100;
        setProgress(progress);
      };

      const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
        if (video) video.currentTime = 0;
      };
      
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          await videoRef.current.play();
          setIsPlaying(true);
        }
        setError(null);
      } catch (error) {
        console.error("Erreur lors de la lecture:", error);
        setError('Impossible de lire la vidéo');
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const handleProgressChange = (value: number[]) => {
    const newProgress = value[0];
    if (videoRef.current) {
      const newTime = (videoRef.current.duration / 100) * newProgress;
      videoRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const enterFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen().catch(err => {
          console.error(`Erreur lors du passage en plein écran: ${err.message}`);
        });
      }
    }
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
        
        <div className="w-full aspect-square max-w-[540px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative protected-content">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100/30 backdrop-blur-[1px] z-10">
              <Loader className="h-8 w-8 text-gray-600 animate-spin" />
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/90 z-10">
              <p className="text-red-600 text-sm mb-4">{error}</p>
              <Button onClick={togglePlay} variant="outline" size="sm">
                Réessayer
              </Button>
            </div>
          )}
          
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain"
            playsInline
            title={title}
            onContextMenu={(e) => e.preventDefault()}
            controlsList="nodownload nofullscreen"
            disablePictureInPicture
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            preload="metadata"
          />
          
          {/* Contrôles personnalisés */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-gray-800/40 to-transparent backdrop-blur-[1px] flex flex-col gap-2">
            <Slider 
              value={[progress]} 
              max={100} 
              step={0.1}
              onValueChange={handleProgressChange}
              className="cursor-pointer h-1"
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={togglePlay}
                  className="h-7 w-7 text-white hover:bg-white/20"
                >
                  {isPlaying ? 
                    <Pause className="h-4 w-4" /> : 
                    <Play className="h-4 w-4" />
                  }
                </Button>
                
                <div className="flex items-center">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={toggleMute}
                    className="h-7 w-7 text-white hover:bg-white/20"
                  >
                    {isMuted ? 
                      <VolumeX className="h-4 w-4" /> : 
                      <Volume2 className="h-4 w-4" />
                    }
                  </Button>
                  
                  <div className="w-14 flex items-center">
                    <Slider
                      value={[isMuted ? 0 : volume]}
                      min={0}
                      max={1}
                      step={0.01}
                      onValueChange={handleVolumeChange}
                      className="cursor-pointer h-1"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon"
                onClick={enterFullscreen}
                className="h-7 w-7 text-white hover:bg-white/20"
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
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
