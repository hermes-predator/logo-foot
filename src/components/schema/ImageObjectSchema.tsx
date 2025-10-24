
interface ImageObjectSchemaProps {
  imageUrl: string;
  title: string;
  width?: number;
  height?: number;
  altText?: string;
  authorName?: string;
  datePublished?: string;
}

export const ImageObjectSchema = ({ 
  imageUrl, 
  title,
  width = 800,
  height = 800,
  altText,
  authorName = "FRONT-CLOUD",
  datePublished
}: ImageObjectSchemaProps) => {
  // Nettoyer l'URL de l'image - s'assurer qu'elle est absolue
  const fullImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `https://www.logo-foot.com${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  
  // Extraire le nom du fichier pour l'identifiant
  const fileName = fullImageUrl.split('/').pop() || 'image';
  
  // Générer une date de publication si non fournie
  const pubDate = datePublished || new Date().toISOString();
  
  // Créer une description alternative si non fournie
  const description = altText || title;

  // Enhanced image object with more metadata for better Google Search appearance
  return {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "@id": `https://www.logo-foot.com/image/${fileName}`,
    "url": fullImageUrl,
    "width": width,
    "height": height,
    "caption": title,
    "name": title.split(':')[0].trim(),
    "alternateName": altText,
    "representativeOfPage": true,
    "description": description,
    "contentUrl": fullImageUrl,
    "encodingFormat": fullImageUrl.toLowerCase().endsWith('.png') ? "image/png" : "image/jpeg",
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "acquireLicensePage": "https://www.logo-foot.com/license",
    "creditText": authorName,
    "creator": {
      "@type": "Organization",
      "name": authorName
    },
    "copyrightNotice": `© ${new Date().getFullYear()} FRONT-CLOUD`,
    "datePublished": pubDate,
    "keywords": title.split(' ').filter(word => word.length > 3).join(', ')
  };
};
