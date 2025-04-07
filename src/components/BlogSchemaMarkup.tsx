
import { BlogPost } from "../types/blog";
import { BlogListSchema } from "./schema/BlogListSchema";
import { BlogPostSchema } from "./schema/BlogPostSchema";
import { FAQPageSchema } from "./schema/FAQPageSchema";
import { extractFAQs } from "../utils/faqExtractor";
import { Helmet } from "react-helmet-async";

interface BlogSchemaMarkupProps {
  post?: BlogPost;
  isBlogList?: boolean;
  addBreadcrumbs?: boolean;
}

const BlogSchemaMarkup = ({ post, isBlogList, addBreadcrumbs = true }: BlogSchemaMarkupProps) => {
  if (isBlogList) {
    const blogListSchema = BlogListSchema({ post });
    
    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Helmet>
    );
  }

  if (!post) return null;

  // Generate complete image URL for the schema
  const imageUrl = post.galleryImageId ? 
    `https://logo-foot.com/blog-images/${post.id}.png` : 
    "https://logo-foot.com/og-image.png";

  // Pass the imageUrl to the schema generator
  const schemaData = BlogPostSchema({ 
    post,
    imageUrl
  });

  // Extract FAQ sections from content if they exist
  const faqSections = extractFAQs(post.content);
  const hasFAQs = faqSections.length > 0;

  // Create FAQ schema if FAQs are present
  const faqPageSchema = hasFAQs ? FAQPageSchema({ 
    faqSections,
    mainEntity: `https://logo-foot.com/blog/${post.id}`,
    about: post.title.split(':')[0].trim()
  }) : null;

  // Generate BreadcrumbList schema
  const breadcrumbSchema = addBreadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://logo-foot.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://logo-foot.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://logo-foot.com/blog/${post.id}`
      }
    ]
  } : null;

  // Handle both single and multiple schema objects
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      {hasFAQs && (
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
      )}
      
      {addBreadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default BlogSchemaMarkup;
