
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

export const useCarouselImages = (imagesCount: number) => {
  const { toast } = useToast();
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    Array(imagesCount).fill(false)
  );

  const handleImageLoad = (index: number) => {
    const newLoadedState = [...imagesLoaded];
    newLoadedState[index] = true;
    setImagesLoaded(newLoadedState);
    
    // Afficher un toast pour la dernière image (5e image)
    if (index === 4) {
      toast({
        title: "Images chargées",
        description: "Toutes les images du carrousel sont prêtes",
        variant: "default",
        icon: <Check className="h-4 w-4 text-green-500" />
      });
    }
  };

  return {
    imagesLoaded,
    handleImageLoad
  };
};
