
import { BlogPost } from "../../types/blog";
import { BLOG_CATEGORIES } from "../../types/blog";
import { extractFAQs } from "../../utils/faqExtractor";
import { detectArticleType, detectSpecificTeam } from "../../utils/articleTypeDetector";
import { ImageObjectSchema } from "./ImageObjectSchema";
import { TeamSpecificSchema } from "./TeamSpecificSchema";

interface EnhancedBlogPostSchemaProps {
  post: BlogPost;
  imageUrl?: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
  siteName?: string;
  baseUrl?: string;
}

export const EnhancedBlogPostSchema = ({ 
  post, 
  imageUrl,
  authorName = "FRONT-CLOUD",
  publisherName = "FRONT-CLOUD",
  publisherLogo = "https://logo-foot.com/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png",
  siteName = "Logo Foot",
  baseUrl = "https://logo-foot.com"
}: EnhancedBlogPostSchemaProps) => {
  // Extraire le titre principal du contenu
  const mainTitle = post.content.match(/# (.*?)(?:\n|$)/)?.[1] || post.title;
  
  // Extraire les titres h2 comme sections principales
  const sections = Array.from(post.content.matchAll(/## (.*?)(?:\n|$)/g)).map(match => match[1]);

  // Extraire tous les sous-titres pour une meilleure structuration
  const subSections = Array.from(post.content.matchAll(/### (.*?)(?:\n|$)/g)).map(match => match[1]);

  // Transformer les mots-clés en tableau
  const keywordsArray = post.keywords ? post.keywords.split(',').map(k => k.trim()) : [];
  
  // Déterminer le type d'article et la détection d'équipe spécifique
  const { isLogoArticle, isClubLogo, entityType } = detectArticleType(post);
  const teamDetection = detectSpecificTeam(post.title);
  
  // Construire l'URL complète de l'image
  const fullImageUrl = imageUrl || (post.galleryImageId ? 
    `${baseUrl}/blog-images/${post.id}.png` : 
    `${baseUrl}/og-image.png`);

  // Générer l'URL canonique de l'article
  const canonicalUrl = `${baseUrl}/blog/${post.id}`;
  
  // Déterminer l'entité additionnelle (SportsTeam ou SportsOrganization)
  const additionalEntity = isLogoArticle ? {
    "@type": entityType,
    "name": post.title.split(':')[0].trim(),
    "sport": "Soccer",
    "logo": fullImageUrl,
    "url": canonicalUrl,
    "sameAs": [canonicalUrl]
  } : null;

  // Obtenir les informations de sous-catégorie
  const subCategory = post.subCategory 
    ? BLOG_CATEGORIES[post.category].subCategories.find(sc => sc.id === post.subCategory)?.name 
    : '';

  // Obtenir les données de schéma spécifiques à l'équipe si applicable
  const teamSpecificData = TeamSpecificSchema({
    post,
    isPSG: teamDetection.isPSG,
    isOM: teamDetection.isOM,
    isJuventus: teamDetection.isJuventus,
    isInterMilan: teamDetection.isInterMilan,
    isAstonVilla: teamDetection.isAstonVilla,
    additionalEntity
  });

  // Générer le schéma d'objet d'image
  const imageObject = ImageObjectSchema({
    imageUrl: fullImageUrl,
    title: post.title,
    width: 1200,
    height: 630
  });

  // Extraire les sections FAQ du contenu si elles existent
  const faqSections = extractFAQs(post.content);
  
  // Obtenir l'année en cours pour les informations de copyright
  const currentYear = new Date().getFullYear();
  
  // Calculer le temps de lecture approximatif
  const wordsPerMinute = 200;
  const wordCount = post.content.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  // Construire le schéma complet
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
      "@id": canonicalUrl
    },
    "articleBody": post.content,
    "articleSection": sections,
    "articleCategory": BLOG_CATEGORIES[post.category].name,
    "url": canonicalUrl,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo,
        "width": 112,
        "height": 112
      },
      "url": baseUrl
    },
    "keywords": keywordsArray,
    "image": imageObject,
    "about": additionalEntity ? [additionalEntity] : undefined,
    "copyrightYear": currentYear,
    "copyrightHolder": {
      "@type": "Organization",
      "name": publisherName,
      "url": baseUrl
    },
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "timeRequired": `PT${readingTimeMinutes}M`,
    "wordCount": wordCount,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["article", "h1", "h2", ".speakable"]
    },
    ...teamSpecificData
  };
  
  // Si des FAQs existent, ajouter un schéma FAQPage intégré
  if (faqSections.length > 0) {
    const faqSchema = {
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
    
    return [articleSchema, faqSchema];
  }
  
  return articleSchema;
};
