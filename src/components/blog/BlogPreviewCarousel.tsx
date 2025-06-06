
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useLazyLoading } from "@/hooks/useLazyLoading";

interface BlogPreviewCarouselProps {
  images?: string[];
}

export const BlogPreviewCarousel = ({ images = [] }: BlogPreviewCarouselProps) => {
  const { isInView, imgRef, shouldLoad, handleLoad } = useLazyLoading();

  if (images.length === 0) return null;

  return (
    <div className="relative mb-8">
      <h3 className="text-xl font-semibold mb-4 text-center">
        Aperçu de Notre Collection
      </h3>
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="w-32 h-32 bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow duration-200">
              <OptimizedImage
                ref={index === 0 ? imgRef : undefined}
                src={shouldLoad ? image : ''}
                alt={`Aperçu logo ${index + 1}`}
                className="w-full h-full object-contain"
                onLoad={handleLoad}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
