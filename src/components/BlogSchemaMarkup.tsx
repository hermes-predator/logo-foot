
import { BlogPost } from "../types/blog";
import { BlogListSchema } from "./schema/BlogListSchema";
import { BlogPostSchema } from "./schema/BlogPostSchema";

interface BlogSchemaMarkupProps {
  post?: BlogPost;
  isBlogList?: boolean;
}

const BlogSchemaMarkup = ({ post, isBlogList }: BlogSchemaMarkupProps) => {
  if (isBlogList) {
    const blogListSchema = BlogListSchema({ post });
    
    return (
      <script type="application/ld+json">
        {JSON.stringify(blogListSchema)}
      </script>
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

  // Handle both single and multiple schema objects
  if (Array.isArray(schemaData)) {
    return (
      <>
        {schemaData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </>
    );
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
};

export default BlogSchemaMarkup;
