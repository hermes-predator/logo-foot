
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqSections: FAQItem[];
  mainEntity?: string;
  about?: string;
}

export const FAQPageSchema = ({ faqSections, mainEntity, about }: FAQPageSchemaProps) => {
  if (!faqSections.length) return null;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSections.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  // Ajouter des propriétés supplémentaires si fournies
  if (mainEntity) {
    schema["mainEntityOfPage"] = {
      "@type": "WebPage",
      "@id": mainEntity
    };
  }
  
  if (about) {
    schema["about"] = {
      "@type": "Thing",
      "name": about
    };
  }
  
  return schema;
};
