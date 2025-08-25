
import { GalleryItem } from '@/types/gallery';
import { countries } from '@/constants/countryData';
import { getCountryDescription } from './countryDescriptions';

export const generateGalleryItems = () => {
  const clubItems: GalleryItem[] = Array.from({ length: 60 }, (_, index) => {
    const country = countries[index] || 'International';
    return {
      id: index + 1,
      imageUrl: `/images/logo${index + 1}.png`,
      videoUrl: `/videos/video${index + 1}.mov`,
      country: country,
      title: `Collection - Logos ${country}`,
      altText: getCountryDescription(country),
    };
  });

  const competitionItems: GalleryItem[] = Array.from({ length: 4 }, (_, index) => {
    const arrayIndex = index + 60;
    const country = countries[arrayIndex] || 'International';
    
    // Specific titles for collection items
    let title = "";
    if (arrayIndex + 1 === 61) {
      title = "Hugo Ekitike : Le talent français qui s'impose à l'Eintracht Francfort";
    } else if (arrayIndex + 1 === 62) {
      title = "Collection complète des clubs de football populaire - PNG transparent - Wallet.Type";
    } else if (arrayIndex + 1 === 63) {
      title = "Collection complète des sélections nationales - PNG transparent - Wallet.Type";
    } else if (arrayIndex + 1 === 64) {
      title = "Collection complète des drapeaux mondiaux - PNG transparent";
    }
    
    return {
      id: arrayIndex + 1,
      imageUrl: `/images/logo${arrayIndex + 1}.png`,
      videoUrl: `/videos/video${arrayIndex + 1}.mov`,
      country: country,
      title: title,
      altText: getCountryDescription(country),
    };
  });

  return { clubItems, competitionItems };
};
