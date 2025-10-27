
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
  aggregateRating
}: ProductSchemaProps) => {
  const schema: any = {
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
    }
  };

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount
    };
  }

  return schema;
};
