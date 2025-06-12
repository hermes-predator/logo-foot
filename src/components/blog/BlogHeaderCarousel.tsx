
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { OptimizedImage } from '@/components/ui/optimized-image';

const BlogHeaderCarousel = () => {
  const carouselImages = [
    {
      src: "/lovable-uploads/42eae4e6-1176-4a6a-b811-98f89e509603.png",
      alt: "Collections de logos - Angleterre, Allemagne, Espagne, France, Italie, Brésil, USA, Pays-Bas, National"
    },
    {
      src: "/lovable-uploads/25a5462c-2f32-4a9a-8d6e-9c1f677fe604.png",
      alt: "Collections de logos - Argentine, Portugal, Turquie, Belgique, Danemark, Grèce, Norvège, Pologne, Roumanie"
    },
    {
      src: "/lovable-uploads/437d5bd3-a26d-4459-970c-1297f805eb0b.png",
      alt: "Collections de logos - Russie, Suède, Suisse, Tchéquie, Autriche, Bulgarie, Croatie, Hongrie, Serbie"
    },
    {
      src: "/lovable-uploads/00cc641d-2544-4371-a712-0537f57f8887.png",
      alt: "Collections de logos - Slovaquie, Biélorussie, Écosse, Irlande, Pays de Galles, Finlande, Ukraine, Australie, Arabie Saoudite"
    },
    {
      src: "/lovable-uploads/90dcc6ef-0dc7-4a03-8e58-609f031c23c4.png",
      alt: "Collections de logos - Bosnie, Islande, Israël, Luxembourg, Slovénie, Albanie, Irlande-Nord, Malte, Azerbaïdjan"
    },
    {
      src: "/lovable-uploads/6bcd6dd7-6a9c-46cc-b20b-2d1e84099b58.png",
      alt: "Collections de logos - Moldavie, Arménie, Chypre, Estonie, Géorgie, Kazakhstan, Kosovo, Lettonie, Lituanie"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    aspectRatio={4/3}
                    className="w-full h-full object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </div>
  );
};

export default BlogHeaderCarousel;
