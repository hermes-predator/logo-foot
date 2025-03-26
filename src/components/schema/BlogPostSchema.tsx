
import { BlogPost } from "../../types/blog";
import { BLOG_CATEGORIES } from "../../types/blog";
import { TeamSpecificSchema } from "./TeamSpecificSchema";

interface BlogPostSchemaProps {
  post: BlogPost;
  imageUrl?: string;
}

export const BlogPostSchema = ({ post, imageUrl }: BlogPostSchemaProps) => {
  // Extract the main title from the content
  const mainTitle = post.content.match(/# (.*?)(?:\n|$)/)?.[1] || post.title;
  
  // Extract the headings h2 as main sections
  const sections = Array.from(post.content.matchAll(/## (.*?)(?:\n|$)/g)).map(match => match[1]);

  // Get keywords as array
  const keywordsArray = post.keywords ? post.keywords.split(',').map(k => k.trim()) : [];
  
  // Determine if the article is about a logo (club or national team)
  const isLogoArticle = post.category === 'logos';
  const isClubLogo = post.subCategory === 'club-logos';
  const isNationalTeamLogo = post.title.toLowerCase().includes('équipe nationale') || 
                             post.title.toLowerCase().includes('national') ||
                             post.subCategory === 'national-logos';
  
  // Determine the additional entity type (SportsTeam or SportsOrganization)
  const additionalEntity = isLogoArticle ? {
    "@type": isClubLogo ? "SportsTeam" : "SportsOrganization",
    "name": post.title.split(':')[0].trim(),
    "sport": "Soccer",
    "logo": imageUrl || "https://logo-foot.com/og-image.png"
  } : null;

  // Determine if the post is about specific teams
  const isPSG = post.title.toLowerCase().includes('psg') || 
                post.title.toLowerCase().includes('paris saint-germain') ||
                post.title.toLowerCase().includes('paris saint germain') ||
                post.title.toLowerCase().includes('paris sg') ||
                post.title.toLowerCase().includes('logo paris');
  
  const isOM = post.title.toLowerCase().includes('om') || 
               post.title.toLowerCase().includes('olympique de marseille') ||
               post.title.toLowerCase().includes('marseille');
  
  const isJuventus = post.title.toLowerCase().includes('juventus') || 
                     post.title.toLowerCase().includes('juve');
  
  const isInterMilan = post.title.toLowerCase().includes('inter milan') || 
                       post.title.toLowerCase().includes('inter fc') ||
                       post.title.toLowerCase().includes('fc inter');
  
  const isAstonVilla = post.title.toLowerCase().includes('aston villa') || 
                      post.title.toLowerCase().includes('villa');

  // Get subCategory information
  const subCategory = post.subCategory ? BLOG_CATEGORIES[post.category].subCategories.find(sc => sc.id === post.subCategory)?.name : '';

  // Get team-specific schema data if applicable
  const teamSpecificData = TeamSpecificSchema({
    post,
    isPSG,
    isOM,
    isJuventus,
    isInterMilan,
    isAstonVilla,
    additionalEntity
  });

  // Enhanced image object with more metadata
  const imageObject = {
    "@type": "ImageObject",
    "url": imageUrl || "https://logo-foot.com/og-image.png",
    "width": 800,
    "height": 800,
    "caption": post.title,
    "name": post.title.split(':')[0].trim(),
    "representativeOfPage": true,
    "description": post.excerpt,
    "contentUrl": imageUrl || "https://logo-foot.com/og-image.png",
    "license": "https://creativecommons.org/licenses/by/4.0/"
  };

  // Extract FAQ sections from content if they exist
  const faqSections = extractFAQs(post.content);
  const hasFAQs = faqSections.length > 0;

  // Current year for copyright info
  const currentYear = new Date().getFullYear();

  // Construct the full schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "name": mainTitle,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://logo-foot.com/blog/${post.id}`
    },
    "articleBody": post.content,
    "articleSection": sections,
    "url": `https://logo-foot.com/blog/${post.id}`,
    "author": {
      "@type": "Organization",
      "name": "FRONT-CLOUD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FRONT-CLOUD",
      "logo": {
        "@type": "ImageObject",
        "url": "https://logo-foot.com/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
      }
    },
    "keywords": keywordsArray,
    "image": imageObject,
    "about": additionalEntity ? [additionalEntity] : undefined,
    "copyrightYear": currentYear,
    "copyrightHolder": {
      "@type": "Organization",
      "name": "FRONT-CLOUD"
    },
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    ...teamSpecificData
  };
  
  // If FAQs exist, add FAQPage schema
  if (hasFAQs) {
    return [
      articleSchema,
      {
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
      }
    ];
  }
  
  return articleSchema;
};

// Helper function to extract FAQ sections from article content
const extractFAQs = (content: string) => {
  const faqs = [];
  
  // Match patterns like "**Question:** Answer" or "### Question\nAnswer"
  const boldPattern = /\*\*(.*?)\*\*\s*:\s*(.*?)(?=\n\n|\*\*|$)/gs;
  const headingPattern = /###\s+(.*?)\n(.*?)(?=\n###|\n\n##|\n\n#|$)/gs;
  
  // Extract bold-style FAQs
  let boldMatch;
  while ((boldMatch = boldPattern.exec(content)) !== null) {
    if (boldMatch[1] && boldMatch[2] && 
        (boldMatch[1].toLowerCase().includes('question') || 
         boldMatch[1].toLowerCase().includes('?') ||
         boldMatch[1].toLowerCase().includes('comment') ||
         boldMatch[1].toLowerCase().includes('pourquoi') ||
         boldMatch[1].toLowerCase().includes('quelle') ||
         boldMatch[1].toLowerCase().includes('quand') ||
         boldMatch[1].toLowerCase().includes('qui') ||
         boldMatch[1].toLowerCase().includes('où'))) {
      faqs.push({
        question: boldMatch[1].replace(/question\s*:/i, '').trim(),
        answer: boldMatch[2].trim()
      });
    }
  }
  
  // Extract heading-style FAQs
  let headingMatch;
  while ((headingMatch = headingPattern.exec(content)) !== null) {
    if (headingMatch[1] && headingMatch[2] && 
        (headingMatch[1].toLowerCase().includes('?') ||
         headingMatch[1].toLowerCase().includes('comment') ||
         headingMatch[1].toLowerCase().includes('pourquoi') ||
         headingMatch[1].toLowerCase().includes('quelle') ||
         headingMatch[1].toLowerCase().includes('quand') ||
         headingMatch[1].toLowerCase().includes('qui') ||
         headingMatch[1].toLowerCase().includes('où'))) {
      faqs.push({
        question: headingMatch[1].trim(),
        answer: headingMatch[2].trim()
      });
    }
  }
  
  return faqs;
};
