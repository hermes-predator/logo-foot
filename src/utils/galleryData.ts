
import { GalleryItem } from '@/types/gallery';
import { countries } from '@/constants/countryData';
import { getCountryDescription } from './countryDescriptions';

export const generateGalleryItems = () => {
  const clubItems: GalleryItem[] = Array.from({ length: 60 }, (_, index) => {
    const country = countries[index] || 'International';
    return {
      id: index + 1,
      imageUrl: `/public/images/logo${index + 1}.png`,
      videoUrl: `/public/videos/video${index + 1}.mov`,
      country: country,
      title: `Logo ${country} - Collection officielle logos clubs de foot`,
      altText: getCountryDescription(country),
    };
  });

  const competitionItems: GalleryItem[] = Array.from({ length: 4 }, (_, index) => {
    const arrayIndex = index + 60;
    const country = countries[arrayIndex] || 'International';
    return {
      id: arrayIndex + 1,
      imageUrl: `/public/images/logo${arrayIndex + 1}.png`,
      videoUrl: `/public/videos/video${arrayIndex + 1}.mov`,
      country: country,
      title: `Logo ${country} - Collection officielle logos clubs de foot`,
      altText: getCountryDescription(country),
    };
  });

  return { clubItems, competitionItems };
};
