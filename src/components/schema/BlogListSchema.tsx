
import { BlogPost } from "../../types/blog";

interface BlogListSchemaProps {
  post?: BlogPost;
}

export const BlogListSchema = ({ post }: BlogListSchemaProps) => {
  // Current year for copyright info
  const currentYear = new Date().getFullYear();
  
  // Get the most recent posts (when there's a post provided)
  const recentPost = post ? {
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "dateModified": post.date,
    "articleBody": post.content.substring(0, 200) + "...",
    "url": `https://www.logo-foot.com/blog/${post.id}`,
    "author": {
      "@type": "Organization",
      "name": "FRONT-CLOUD"
    },
    "keywords": post.keywords,
    "image": post.galleryImageId ? 
      `https://www.logo-foot.com/blog-images/${post.id}.png` : 
      "https://www.logo-foot.com/og-image.png"
  } : null;

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Logo Foot & Football",
    "description": "Articles sur les logos et l'histoire des clubs de football",
    "url": "https://www.logo-foot.com/blog",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.logo-foot.com/blog"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FRONT-CLOUD",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.logo-foot.com/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
      }
    },
    "inLanguage": "fr-FR",
    "copyrightYear": currentYear,
    "copyrightHolder": {
      "@type": "Organization",
      "name": "FRONT-CLOUD"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.logo-foot.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "blogPost": recentPost ? [recentPost] : []
  };
  
  return blogListSchema;
};
