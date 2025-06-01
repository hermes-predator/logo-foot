
import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useLazyElement } from '@/hooks/useLazyElement';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface BeforeAfterComparisonProps {
  videoUrl?: string;
  title: string;
  description: string;
  showButton?: boolean;
  onOpen?: () => void;
  isDialogOpen?: boolean;
  onDialogOpenChange?: (open: boolean) => void;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  videoUrl = "/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png",
  title,
  description,
  showButton = true,
  onOpen,
  isDialogOpen,
  onDialogOpenChange
}) => {
  const [internalDialogOpen, setInternalDialogOpen] = useState(false);
  const { isInView, elementRef } = useLazyElement();
  
  // Use either controlled or uncontrolled dialog state
  const dialogOpen = isDialogOpen !== undefined ? isDialogOpen : internalDialogOpen;
  const setDialogOpen = onDialogOpenChange || setInternalDialogOpen;

  const handleOpenDialog = () => {
    if (onOpen) {
      onOpen();
    } else {
      setDialogOpen(true);
    }
  };

  return (
    <div className="mb-12 mt-6" ref={elementRef as React.RefObject<HTMLDivElement>}>
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800">
          {title}
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          {description}
        </p>
      </div>

      {showButton && (
        <div className="flex justify-center">
          <Button 
            onClick={handleOpenDialog}
            className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            size="lg"
          >
            {/* Sparkles avec animations améliorées */}
            <div className="absolute -top-4 -left-4 text-purple-400/30 animate-floating" 
                 style={{ 
                   animationDuration: '3s',
                   animationDelay: '0s'
                 }}>
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="absolute -top-2 -right-5 text-blue-400/25 animate-floating" 
                 style={{ 
                   animationDuration: '4s',
                   animationDelay: '1s'
                 }}>
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="absolute -bottom-4 -right-3 text-purple-400/35 animate-floating" 
                 style={{ 
                   animationDuration: '3.5s',
                   animationDelay: '0.5s'
                 }}>
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-2 -left-5 text-blue-400/20 animate-floating" 
                 style={{ 
                   animationDuration: '4.5s',
                   animationDelay: '2s'
                 }}>
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="absolute top-1 right-1 text-white/15 animate-floating" 
                 style={{ 
                   animationDuration: '5s',
                   animationDelay: '1.5s'
                 }}>
              <Sparkles className="h-3 w-3" />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                <Play className="h-5 w-5 fill-white text-white" />
              </div>
              <span className="font-medium">Aperçu</span>
            </div>
          </Button>
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl w-[90vw]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              Découvrez la différence de qualité entre les versions gratuites et premium
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            {isInView || dialogOpen ? (
              <video 
                src={videoUrl} 
                controls 
                autoPlay={dialogOpen}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to image if video fails to load
                  const target = e.target as HTMLVideoElement;
                  const img = document.createElement('img');
                  img.src = "/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png";
                  img.alt = "Aperçu de la collection";
                  img.className = "w-full h-full object-cover";
                  target.parentNode?.replaceChild(img, target);
                }}
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Chargement...</span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BeforeAfterComparison;
