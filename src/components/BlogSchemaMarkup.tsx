
import { blogPosts } from "@/data/blogPosts";

interface BlogSchemaMarkupProps {
  post?: typeof blogPosts[0];
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
      "blogPost": post ? [{
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.date,
        "articleBody": post.content,
        "url": `https://logo-foot.com/blog/${post.id}`
      }] : []
    };

    return (
      <script type="application/ld+json">
        {JSON.stringify(blogListSchema)}
      </script>
    );
  }

  if (!post) return null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "articleBody": post.content,
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
        "url": "https://logo-foot.com/favicon.png"
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(articleSchema)}
    </script>
  );
};

export default BlogSchemaMarkup;
