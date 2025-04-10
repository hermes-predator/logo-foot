
interface ImageObjectSchemaProps {
  imageUrl: string;
  title: string;
  width?: number;
  height?: number;
}

export const ImageObjectSchema = ({ 
  imageUrl, 
  title,
  width = 800,
  height = 800
}: ImageObjectSchemaProps) => {
  // Enhanced image object with more metadata
  return {
    "@type": "ImageObject",
    "url": imageUrl,
    "width": width,
    "height": height,
    "caption": title,
    "name": title.split(':')[0].trim(),
    "representativeOfPage": true,
    "description": title,
    "contentUrl": imageUrl,
    "license": "https://creativecommons.org/licenses/by/4.0/"
  };
};
