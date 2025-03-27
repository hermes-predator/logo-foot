
interface ImageObjectSchemaProps {
  imageUrl: string;
  title: string;
}

export const ImageObjectSchema = ({ imageUrl, title }: ImageObjectSchemaProps) => {
  // Enhanced image object with more metadata
  return {
    "@type": "ImageObject",
    "url": imageUrl,
    "width": 800,
    "height": 800,
    "caption": title,
    "name": title.split(':')[0].trim(),
    "representativeOfPage": true,
    "description": title,
    "contentUrl": imageUrl,
    "license": "https://creativecommons.org/licenses/by/4.0/"
  };
};
