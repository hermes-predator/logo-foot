
import { BlogPost } from "../types/blog";

interface BlogSchemaMarkupProps {
  post?: BlogPost;
  isBlogList?: boolean;
}

const BlogSchemaMarkup = ({ post, isBlogList }: BlogSchemaMarkupProps) => {
  if (isBlogList) {
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

    return (
      <script type="application/ld+json">
        {JSON.stringify(blogListSchema)}
      </script>
    );
  }

  if (!post) return null;

  // Extraire le premier h1 comme titre principal
  const mainTitle = post.content.match(/# (.*?)(?:\n|$)/)?.[1] || post.title;
  
  // Extraire les headings h2 comme sections principales
  const sections = Array.from(post.content.matchAll(/## (.*?)(?:\n|$)/g)).map(match => match[1]);

  // Récupérer les mots-clés sous forme de tableau
  const keywordsArray = post.keywords ? post.keywords.split(',').map(k => k.trim()) : [];

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
      "https://logo-foot.com/og-image.png"
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(articleSchema)}
    </script>
  );
};

export default BlogSchemaMarkup;
