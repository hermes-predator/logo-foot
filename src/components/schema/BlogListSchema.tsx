
import { BlogPost } from "../../types/blog";

interface BlogListSchemaProps {
  post?: BlogPost;
}

export const BlogListSchema = ({ post }: BlogListSchemaProps) => {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Logo Foot & Football",
    "description": "Articles sur les logos et l'histoire des clubs de football",
    "url": "https://logo-foot.com/blog",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://logo-foot.com/blog"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FRONT-CLOUD",
      "logo": {
        "@type": "ImageObject",
        "url": "https://logo-foot.com/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
      }
    },
    "blogPost": post ? [{
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "dateModified": post.date,
      "articleBody": post.content.substring(0, 200) + "...",
      "url": `https://logo-foot.com/blog/${post.id}`,
      "author": {
        "@type": "Organization",
        "name": "FRONT-CLOUD"
      },
      "keywords": post.keywords
    }] : []
  };
  
  return blogListSchema;
};
