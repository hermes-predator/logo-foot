
import { BlogPost } from "../../types/blog";

interface TeamSpecificProps {
  post: BlogPost;
  isPSG: boolean;
  isOM: boolean;
  isJuventus: boolean;
  isInterMilan: boolean;
  isAstonVilla: boolean;
  additionalEntity: any;
}

export const TeamSpecificSchema = ({
  post,
  isPSG,
  isOM,
  isJuventus,
  isInterMilan,
  isAstonVilla,
  additionalEntity
}: TeamSpecificProps) => {
  // PSG specific data
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

  // OM specific data
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

  // Juventus specific data
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

  // Inter Milan specific data
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

  // Aston Villa specific data
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

  // Return an object with the appropriate team-specific data
  if (isPSG && additionalEntity) {
    return {
      "mainEntity": {
        ...additionalEntity,
        ...psgSpecificData
      }
    };
  }
  
  if (isOM && additionalEntity) {
    return {
      "mainEntity": {
        ...additionalEntity,
        ...omSpecificData
      }
    };
  }
  
  if (isJuventus && additionalEntity) {
    return {
      "mainEntity": {
        ...additionalEntity,
        ...juventusSpecificData
      }
    };
  }
  
  if (isInterMilan && additionalEntity) {
    return {
      "mainEntity": {
        ...additionalEntity,
        ...interMilanSpecificData
      }
    };
  }
  
  if (isAstonVilla && additionalEntity) {
    return {
      "mainEntity": {
        ...additionalEntity,
        ...astonVillaSpecificData
      }
    };
  }
  
  return {};
};
