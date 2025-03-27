
import { BlogPost } from "../types/blog";

export interface ArticleTypeInfo {
  isLogoArticle: boolean;
  isClubLogo: boolean;
  isNationalTeamLogo: boolean;
  entityType: string;
}

export const detectArticleType = (post: BlogPost): ArticleTypeInfo => {
  // Determine if the article is about a logo (club or national team)
  const isLogoArticle = post.category === 'logos';
  const isClubLogo = post.subCategory === 'club-logos';
  const isNationalTeamLogo = post.title.toLowerCase().includes('équipe nationale') || 
                             post.title.toLowerCase().includes('national') ||
                             post.subCategory === 'national-logos';
  
  // Determine the additional entity type (SportsTeam or SportsOrganization)
  const entityType = isLogoArticle ? 
    (isClubLogo ? "SportsTeam" : "SportsOrganization") : "";

  return {
    isLogoArticle,
    isClubLogo,
    isNationalTeamLogo,
    entityType
  };
};

// Detect specific teams
export const detectSpecificTeam = (title: string) => {
  const titleLower = title.toLowerCase();
  
  return {
    isPSG: titleLower.includes('psg') || 
           titleLower.includes('paris saint-germain') ||
           titleLower.includes('paris saint germain') ||
           titleLower.includes('paris sg') ||
           titleLower.includes('logo paris'),
  
    isOM: titleLower.includes('om') || 
          titleLower.includes('olympique de marseille') ||
          titleLower.includes('marseille'),
  
    isJuventus: titleLower.includes('juventus') || 
                titleLower.includes('juve'),
  
    isInterMilan: titleLower.includes('inter milan') || 
                  titleLower.includes('inter fc') ||
                  titleLower.includes('fc inter'),
  
    isAstonVilla: titleLower.includes('aston villa') || 
                  titleLower.includes('villa')
  };
};
