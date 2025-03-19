
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
  
  // Déterminer si l'article concerne un logo de club ou d'équipe nationale
  const isLogoArticle = post.category === 'logos';
  const isClubLogo = post.subCategory === 'club-logos';
  const isNationalTeamLogo = post.title.toLowerCase().includes('équipe nationale') || 
                            post.title.toLowerCase().includes('national') ||
                            post.subCategory === 'national-logos';
  
  // Déterminer le type d'entité supplémentaire à ajouter (SportsTeam ou SportsOrganization)
  const additionalEntity = isLogoArticle ? {
    "@type": isClubLogo ? "SportsTeam" : "SportsOrganization",
    "name": post.title.split(':')[0].trim(),
    "sport": "Soccer",
    "logo": post.galleryImageId ? 
      `https://logo-foot.com/api/gallery/image/${post.galleryImageId}` : 
      "https://logo-foot.com/og-image.png"
  } : null;

  // Pour le PSG spécifiquement, ajoutons des données plus riches
  const isPSG = post.title.toLowerCase().includes('psg') || 
                post.title.toLowerCase().includes('paris saint-germain') ||
                post.title.toLowerCase().includes('paris saint germain') ||
                post.title.toLowerCase().includes('paris sg');
  
  const psgSpecificData = isPSG ? {
    "description": "Le Paris Saint-Germain Football Club est un club de football français basé à Paris, fondé en 1970.",
    "location": {
      "@type": "Place",
      "name": "Paris, France",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "FR"
      }
    },
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "Ligue 1"
    },
    "foundingDate": "1970-08-12",
    "alternateName": ["PSG", "Paris SG", "Paris Saint-Germain FC"],
    "url": "https://www.psg.fr/",
    "sameAs": [
      "https://fr.wikipedia.org/wiki/Paris_Saint-Germain_Football_Club",
      "https://www.facebook.com/PSG/",
      "https://twitter.com/PSG_inside",
      "https://www.instagram.com/psg/"
    ]
  } : {};

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
      "https://logo-foot.com/og-image.png",
    "about": additionalEntity ? [additionalEntity] : undefined,
    ...(isPSG && additionalEntity ? { 
      "mainEntity": {
        ...additionalEntity,
        ...psgSpecificData
      }
    } : {})
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(articleSchema)}
    </script>
  );
};

export default BlogSchemaMarkup;
