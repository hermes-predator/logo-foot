
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

  const articleSchema = BlogPostSchema({ post });

  return (
    <script type="application/ld+json">
      {JSON.stringify(articleSchema)}
    </script>
  );
};

export default BlogSchemaMarkup;
