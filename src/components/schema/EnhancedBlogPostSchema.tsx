import { BlogPost } from "../../types/blog";
import { BLOG_CATEGORIES } from "../../types/blog";
import { TeamSpecificSchema } from "./TeamSpecificSchema";
import { ImageObjectSchema } from "./ImageObjectSchema";
import { FAQPageSchema } from "./FAQPageSchema";
import { extractFAQs } from "../../utils/faqExtractor";
import { detectArticleType, detectSpecificTeam } from "../../utils/articleTypeDetector";

interface EnhancedBlogPostSchemaProps {
  post: BlogPost;
  imageUrl?: string;
  publisherLogo?: string;
  publisherName?: string;
  authorName?: string;
  canonicalUrl?: string;
  siteName?: string;
  baseUrl?: string;
}

export const EnhancedBlogPostSchema = ({ 
  post, 
  imageUrl,
  publisherLogo = "https://www.logo-foot.com/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png",
  publisherName = "FRONT-CLOUD",
  authorName = "FRONT-CLOUD",
  canonicalUrl,
  siteName = "Logo Foot",
  baseUrl = "https://www.logo-foot.com"
}: EnhancedBlogPostSchemaProps) => {
  // Extract the main title from the content
  const mainTitle = post.content.match(/# (.*?)(?:\n|$)/)?.[1] || post.title;
  
  // Extract the headings h2 as main sections
  const sections = Array.from(post.content.matchAll(/## (.*?)(?:\n|$)/g)).map(match => match[1]);

  // Get keywords as array
  const keywordsArray = post.keywords ? post.keywords.split(',').map(k => k.trim()) : [];
  
  // Determine article type and specific team detection
  const { isLogoArticle, isClubLogo, entityType } = detectArticleType(post);
  const { isPSG, isOM, isJuventus, isInterMilan, isAstonVilla } = detectSpecificTeam(post.title);
  
  // Determine the additional entity type (SportsTeam or SportsOrganization)
  const additionalEntity = isLogoArticle ? {
    "@type": entityType,
    "name": post.title.split(':')[0].trim(),
    "sport": "Soccer",
    "logo": imageUrl || "https://www.logo-foot.com/og-image.png"
  } : null;

  // We no longer use subCategory information since the structure was simplified
  const subCategoryInfo = '';

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

  // Generate image object schema
  const imageObject = ImageObjectSchema({
    imageUrl: imageUrl || "https://www.logo-foot.com/og-image.png",
    title: post.title
  });

  // Extract FAQ sections from content if they exist
  const faqSections = extractFAQs(post.content);
  const hasFAQs = faqSections.length > 0;

  // Current year for copyright info
  const currentYear = new Date().getFullYear();

  // Generate the canonical URL
  const postUrl = canonicalUrl || `https://www.logo-foot.com/blog/${post.id}`;

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
      "@id": postUrl
    },
    "articleBody": post.content,
    "articleSection": sections,
    "url": postUrl,
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "keywords": keywordsArray,
    "image": imageObject,
    "about": additionalEntity ? [additionalEntity] : undefined,
    "copyrightYear": currentYear,
    "copyrightHolder": {
      "@type": "Organization",
      "name": publisherName
    },
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    ...teamSpecificData
  };
  
  // If FAQs exist, add FAQPage schema
  if (hasFAQs) {
    const faqPageSchema = FAQPageSchema({ faqSections });
    return [articleSchema, faqPageSchema];
  }
  
  return articleSchema;
};
