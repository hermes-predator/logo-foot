
interface LocalBusinessSchemaProps {
  businessName?: string;
  description?: string;
  imageUrl?: string;
  telephone?: string;
}

export const LocalBusinessSchema = ({
  businessName = "FRONT-CLOUD",
  description = "Spécialiste des logos de football, proposant plus de 8600 logos de clubs et équipes en haute qualité.",
  imageUrl = "https://www.logo-foot.com/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png",
  telephone = "+33123456789"
}: LocalBusinessSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "image": imageUrl,
    "description": description,
    "telephone": telephone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.227638",
      "longitude": "2.213749"
    },
    "url": "https://www.logo-foot.com",
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.logo-foot.com"
    ]
  };
};
