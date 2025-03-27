
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqSections: FAQItem[];
}

export const FAQPageSchema = ({ faqSections }: FAQPageSchemaProps) => {
  if (!faqSections.length) return null;
  
  return {
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
};
