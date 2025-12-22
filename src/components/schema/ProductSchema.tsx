import { Helmet } from 'react-helmet-async';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: string;
  currency?: string;
  sku?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  brand?: string;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export const ProductSchema = ({
  name,
  description,
  image,
  price,
  currency = "EUR",
  sku = "LOGOPCK1",
  availability = "InStock",
  brand = "FRONT-CLOUD",
  aggregateRating = {
    ratingValue: "4.8",
    reviewCount: "127"
  }
}: ProductSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "sku": sku,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.logo-foot.com",
      "priceCurrency": currency,
      "price": price,
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "availability": `https://schema.org/${availability}`,
      "seller": {
        "@type": "Organization",
        "name": brand
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
