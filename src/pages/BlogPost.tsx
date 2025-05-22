import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import BlogImage from '../components/blog/BlogImage';
import Footer from '../components/Footer';
import BlogHeader from '../components/blog/BlogHeader';
import { BlogArticleSchema } from '../components/schema/BlogArticleSchema';
import { defaultCover } from '../constants/defaults';
import PageTransition from "@/components/ui/page-transition";
import BlogCanonical from '../components/SEO/BlogCanonical';

interface BlogPostPageProps {
  post: {
    id: number;
    title: string;
    date: string;
    content: string;
    category: string;
    subCategory: string;
    keywords: string;
    galleryImageId?: number;
    coverImage?: string;
  };
}

export const BlogPostPage = ({ post }: BlogPostPageProps) => {
  const { id } = useParams<{ id: string }>();
  const postUrl = `/blog/${id}`;

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [id]);

  const headerImageUrl = post.galleryImageId
    ? `/images/logos/${post.galleryImageId}.png`
    : post.coverImage
      ? post.coverImage
      : defaultCover;

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen">
        <Helmet>
          <title>{post.title} - Logo Foot</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={post.keywords} />
          <link rel="canonical" href={`https://logo-foot.com${postUrl}`} />
          <script type="application/ld+json">
            {JSON.stringify(BlogArticleSchema({ post: post }))}
          </script>
        </Helmet>

        {/* Balises canoniques pour le SEO */}
        <BlogCanonical post={post} />

        {/* Header avec présentation du blog */}
        <BlogHeader />

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-4">{post.title}</h1>
          <BlogImage src={headerImageUrl} alt={post.title} priority isDefault />
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Find the blog post by ID
  const post = blogPosts.find((post) => post.id === Number(id));

  // If the post doesn't exist, display an error message
  if (!post) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-4">Article non trouvé</h1>
          <p className="text-center">Désolé, l'article que vous recherchez n'existe pas.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return <BlogPostPage post={post} />;
};

export default BlogPost;
