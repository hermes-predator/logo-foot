import { BlogPost } from "../types/blog";
import { BlogListSchema } from "./schema/BlogListSchema";
import { EnhancedBlogPostSchema } from "./schema/EnhancedBlogPostSchema";
import { FAQPageSchema } from "./schema/FAQPageSchema";
import { extractFAQs } from "../utils/faqExtractor";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { generatePostUrl } from "../utils/slugUtils";

interface BlogSchemaMarkupProps {
  post?: BlogPost;
  isBlogList?: boolean;
  addBreadcrumbs?: boolean;
  siteName?: string;
  baseUrl?: string;
}

const BlogSchemaMarkup = ({ 
  post, 
  isBlogList, 
  addBreadcrumbs = true,
  siteName = "Logo Foot",
  baseUrl = "https://logo-foot.com"
}: BlogSchemaMarkupProps) => {
  const location = useLocation();

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

  // Générer l'URL complète de l'image pour le schéma
  const imageUrl = post.galleryImageId ? 
    `${baseUrl}/blog-images/${post.id}.png` : 
    `${baseUrl}/og-image.png`;

  // Passer l'URL de l'image au générateur de schéma
  const schemaData = EnhancedBlogPostSchema({ 
    post,
    imageUrl,
    siteName,
    baseUrl
  });

  // Extraire les sections FAQ du contenu si elles existent
  const faqSections = extractFAQs(post.content);
  const hasFAQs = faqSections.length > 0;

  // Créer un schéma FAQ si des FAQs sont présentes
  const faqPageSchema = hasFAQs ? FAQPageSchema({ 
    faqSections,
    mainEntity: `${baseUrl}${generatePostUrl(post.id, post.title)}`,
    about: post.title.split(':')[0].trim()
  }) : null;

  // Générer le schéma BreadcrumbList
  const breadcrumbSchema = addBreadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      // Ajouter la catégorie si disponible
      ...(post.category ? [{
        "@type": "ListItem",
        "position": 3,
        "name": post.category.charAt(0).toUpperCase() + post.category.slice(1),
        "item": `${baseUrl}/blog?category=${post.category}`
      }] : []),
      {
        "@type": "ListItem",
        "position": post.category ? 4 : 3,
        "name": post.title,
        "item": `${baseUrl}${generatePostUrl(post.id, post.title)}`
      }
    ]
  } : null;

  // Gérer à la fois les objets de schéma uniques et multiples
  return (
    <Helmet>
      <script type="application/ld+json">
        {Array.isArray(schemaData) 
          ? JSON.stringify(schemaData[0])
          : JSON.stringify(schemaData)
        }
      </script>
      
      {Array.isArray(schemaData) && schemaData.length > 1 && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData[1])}
        </script>
      )}
      
      {hasFAQs && !Array.isArray(schemaData) && (
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
