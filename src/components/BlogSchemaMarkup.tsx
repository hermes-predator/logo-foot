
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
  const articleSchema = BlogPostSchema({ 
    post,
    imageUrl
  });

  return (
    <script type="application/ld+json">
      {JSON.stringify(articleSchema)}
    </script>
  );
};

export default BlogSchemaMarkup;
