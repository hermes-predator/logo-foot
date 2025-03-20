
import { BlogPost } from "../../types/blog";
import { BLOG_CATEGORIES } from "../../types/blog";
import { TeamSpecificSchema } from "./TeamSpecificSchema";

interface BlogPostSchemaProps {
  post: BlogPost;
}

export const BlogPostSchema = ({ post }: BlogPostSchemaProps) => {
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
    "logo": post.galleryImageId ? 
      `https://logo-foot.com/api/gallery/image/${post.galleryImageId}` : 
      "https://logo-foot.com/og-image.png"
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
    "image": post.galleryImageId ? 
      `https://logo-foot.com/api/gallery/image/${post.galleryImageId}` : 
      "https://logo-foot.com/og-image.png",
    "about": additionalEntity ? [additionalEntity] : undefined,
    ...teamSpecificData
  };
  
  return articleSchema;
};
