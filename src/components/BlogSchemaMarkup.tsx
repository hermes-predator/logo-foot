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
                post.title.toLowerCase().includes('paris sg') ||
                post.title.toLowerCase().includes('logo paris');
  
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

  // Pour l'OM spécifiquement, ajoutons des données riches
  const isOM = post.title.toLowerCase().includes('om') || 
               post.title.toLowerCase().includes('olympique de marseille') ||
               post.title.toLowerCase().includes('marseille');
  
  const omSpecificData = isOM ? {
    "description": "L'Olympique de Marseille est un club de football français fondé en 1899 à Marseille.",
    "location": {
      "@type": "Place",
      "name": "Marseille, France",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marseille",
        "addressCountry": "FR"
      }
    },
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "Ligue 1"
    },
    "foundingDate": "1899-08-31",
    "alternateName": ["OM", "Marseille", "Les Phocéens", "Les Olympiens"],
    "url": "https://www.om.fr/",
    "sameAs": [
      "https://fr.wikipedia.org/wiki/Olympique_de_Marseille",
      "https://www.facebook.com/OM.Officiel",
      "https://twitter.com/OM_Officiel",
      "https://www.instagram.com/olympiquedemarseille/"
    ],
    "award": ["UEFA Champions League (1993)"]
  } : {};
  
  // Pour la Juventus, ajoutons des données spécifiques
  const isJuventus = post.title.toLowerCase().includes('juventus') || 
                     post.title.toLowerCase().includes('juve');
  
  const juventusSpecificData = isJuventus ? {
    "description": "La Juventus Football Club est un club de football italien basé à Turin, fondé en 1897.",
    "location": {
      "@type": "Place",
      "name": "Turin, Italie",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Turin",
        "addressCountry": "IT"
      }
    },
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "Serie A"
    },
    "foundingDate": "1897-11-01",
    "alternateName": ["Juve", "La Vecchia Signora", "Les Bianconeri", "La Madama"],
    "url": "https://www.juventus.com/",
    "sameAs": [
      "https://fr.wikipedia.org/wiki/Juventus_Football_Club",
      "https://www.facebook.com/Juventus/",
      "https://twitter.com/juventusfc",
      "https://www.instagram.com/juventus/"
    ],
    "award": ["UEFA Champions League (1985, 1996)"]
  } : {};
  
  // Pour l'Inter Milan, ajoutons des données spécifiques
  const isInterMilan = post.title.toLowerCase().includes('inter milan') || 
                       post.title.toLowerCase().includes('inter fc') ||
                       post.title.toLowerCase().includes('fc inter');
  
  const interMilanSpecificData = isInterMilan ? {
    "description": "L'Inter Milan (FC Internazionale Milano) est un club de football italien basé à Milan, fondé en 1908.",
    "location": {
      "@type": "Place",
      "name": "Milan, Italie",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Milan",
        "addressCountry": "IT"
      }
    },
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "Serie A"
    },
    "foundingDate": "1908-03-09",
    "alternateName": ["Inter", "Nerazzurri", "FC Internazionale Milano", "Inter FC"],
    "url": "https://www.inter.it/",
    "sameAs": [
      "https://fr.wikipedia.org/wiki/Inter_Milan",
      "https://www.facebook.com/Inter/",
      "https://twitter.com/Inter",
      "https://www.instagram.com/inter/"
    ],
    "award": ["UEFA Champions League (1964, 1965, 2010)"]
  } : {};
  
  // Pour Aston Villa, ajoutons des données spécifiques
  const isAstonVilla = post.title.toLowerCase().includes('aston villa') || 
                       post.title.toLowerCase().includes('villa');
  
  const astonVillaSpecificData = isAstonVilla ? {
    "description": "L'Aston Villa Football Club est un club de football anglais basé à Birmingham, fondé en 1874.",
    "location": {
      "@type": "Place",
      "name": "Birmingham, Angleterre",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressCountry": "GB"
      }
    },
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "Premier League"
    },
    "foundingDate": "1874-11-21",
    "alternateName": ["Villa", "The Villans", "The Lions", "The Claret and Blue Army"],
    "url": "https://www.avfc.co.uk/",
    "sameAs": [
      "https://fr.wikipedia.org/wiki/Aston_Villa_Football_Club",
      "https://www.facebook.com/avfcofficial/",
      "https://twitter.com/AVFCOfficial",
      "https://www.instagram.com/avfcofficial/"
    ],
    "award": ["UEFA Champions League (1982)"]
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
    } : {}),
    ...(isOM && additionalEntity ? { 
      "mainEntity": {
        ...additionalEntity,
        ...omSpecificData
      }
    } : {}),
    ...(isJuventus && additionalEntity ? { 
      "mainEntity": {
        ...additionalEntity,
        ...juventusSpecificData
      }
    } : {}),
    ...(isInterMilan && additionalEntity ? { 
      "mainEntity": {
        ...additionalEntity,
        ...interMilanSpecificData
      }
    } : {}),
    ...(isAstonVilla && additionalEntity ? { 
      "mainEntity": {
        ...additionalEntity,
        ...astonVillaSpecificData
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
