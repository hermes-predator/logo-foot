
import { BlogPost } from "../../types/blog";

interface BlogArticleSchemaProps {
  post: BlogPost;
}

export const BlogArticleSchema = ({ post }: BlogArticleSchemaProps) => {
  const currentYear = new Date().getFullYear();
  const baseUrl = "https://logo-foot.com";
  const postUrl = `${baseUrl}/blog/${post.id}`;
  
  const imageUrl = post.galleryImageId ? 
    `${baseUrl}/blog-images/${post.id}.png` : 
    `${baseUrl}/og-image.png`;
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || "",
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": "Logo Foot"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FRONT-CLOUD",
      "logo": {
        "@type": "ImageObject",
        "url": "https://logo-foot.com/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "keywords": post.keywords,
    "articleSection": post.category,
    "copyrightYear": currentYear,
    "copyrightHolder": {
      "@type": "Organization",
      "name": "FRONT-CLOUD"
    }
  };
};
