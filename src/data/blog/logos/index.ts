
import { BlogPost } from '../../../types/blog';
import { africanaClubPosts } from './groups/african-clubs';
import { asianClubPosts } from './groups/asian-clubs';
import { brazilianClubPosts } from './groups/brazilian-clubs';
import { competitionPosts } from './groups/competitions';
import { englishClubPosts } from './groups/english-clubs';
import { frenchClubPosts } from './groups/french-clubs';
import { generalContentPosts } from './groups/general-content';
import { germanClubPosts } from './groups/german-clubs';
import { italianClubPosts } from './groups/italian-clubs';
import { nationalTeamPosts } from './groups/national-teams';
import { nonEuropeanClubPosts } from './groups/non-european-clubs';
import { otherEuropeanClubPosts } from './groups/other-european-clubs';
import { portugueseClubPosts } from './groups/portuguese-clubs';
import { southAmericanClubPosts } from './groups/south-american-clubs';
import { spanishClubPosts } from './groups/spanish-clubs';
import { etoileRougeBelgradeLogoPost } from './etoile-rouge-belgrade-logo';
import { psgUltrasPost } from './psg-ultras';
import { omUltrasPost } from './om-ultras';
import { ancienLogoOmPost } from './ancien-logo-om';
import { omLogoPost } from './om-logo';
import { westHamLogoPost } from './west-ham-logo';
import { westBromwichLogoPost } from './west-bromwich-logo';
import { wolfsburgLogoPost } from './wolfsburg-logo';
import { villarrealCfLogoPost } from './villarreal-cf-logo';
import { valenciennesLogoPost } from './valenciennes-logo';
import { watfordLogoPost } from './watford-logo';
import { wolverhamptonLogoPost } from './wolverhampton-logo';
import { realMadridLogoPost } from './real-madrid-logo';
import { cesenaLogoPost } from './cesena-logo';
import { cosenzaLogoPost } from './cosenza-logo';
import { cittadellaLogoPost } from './cittadella-logo';
import { reggianaLogoPost } from './reggiana-logo';
import { saudiFootballClubLogosPost } from './saudi-football-club-logos';
import { ligaMxLogoPost } from './liga-mx-logo';
import { hajdukSplitLogoPost } from './hajduk-split-logo';
import { tacaDePortugalLogoPost } from './taca-de-portugal-logo';

// Combine all logo-related posts into a single array
export const logoPosts: BlogPost[] = [
  ...africanaClubPosts,
  ...asianClubPosts,
  ...brazilianClubPosts,
  ...competitionPosts,
  ...englishClubPosts,
  ...frenchClubPosts,
  ...generalContentPosts,
  ...germanClubPosts,
  ...italianClubPosts,
  ...nationalTeamPosts,
  ...nonEuropeanClubPosts,
  ...otherEuropeanClubPosts,
  ...portugueseClubPosts,
  ...southAmericanClubPosts,
  ...spanishClubPosts,
  etoileRougeBelgradeLogoPost,
  psgUltrasPost,
  omUltrasPost,
  ancienLogoOmPost,
  omLogoPost,
  westHamLogoPost,
  westBromwichLogoPost,
  wolfsburgLogoPost,
  villarrealCfLogoPost,
  valenciennesLogoPost,
  watfordLogoPost,
  wolverhamptonLogoPost,
  realMadridLogoPost,
  cesenaLogoPost,
  cosenzaLogoPost,
  cittadellaLogoPost,
  reggianaLogoPost,
  saudiFootballClubLogosPost,
  ligaMxLogoPost,
  hajdukSplitLogoPost,
  tacaDePortugalLogoPost
];
