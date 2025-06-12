
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Globe, Star } from 'lucide-react';

const BlogHeaderCarousel = () => {
  const items = [
    {
      icon: Trophy,
      title: "8 774 logos",
      subtitle: "Collection complète",
      bgColor: "bg-orange-500"
    },
    {
      icon: Users,
      title: "+1000 clients",
      subtitle: "Satisfaits",
      bgColor: "bg-blue-500"
    },
    {
      icon: Globe,
      title: "66 pays",
      subtitle: "Représentés",
      bgColor: "bg-green-500"
    },
    {
      icon: Star,
      title: "4.9/5",
      subtitle: "Note moyenne",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Badge 
                  className={`${item.bgColor} text-white hover:${item.bgColor}/90 w-full h-20 flex flex-col items-center justify-center gap-1 text-center`}
                >
                  <item.icon className="h-5 w-5" />
                  <div className="text-sm font-bold">{item.title}</div>
                  <div className="text-xs">{item.subtitle}</div>
                </Badge>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BlogHeaderCarousel;
