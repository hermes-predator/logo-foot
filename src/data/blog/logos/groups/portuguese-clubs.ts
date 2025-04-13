
import { BlogPost } from '../../../../types/blog';
import { benficaLogoPost } from '../benfica-logo';
import { portoLogoPost } from '../porto-logo';
import { sportingLogoPost } from '../sporting-logo';
import { sportingBragaLogoPost } from '../sporting-braga-logo';
import { vitoriaGuimaraesLogoPost } from '../vitoria-guimaraes-logo';
import { rioAveLogoPost } from '../rio-ave-logo';
import { famalicaoLogoPost } from '../famalicao-logo';
import { boavistaLogoPost } from '../boavista-logo';
import { estorilPraiaLogoPost } from '../estoril-praia-logo';
// Suppression de l'import de tacaDePortugalLogoPost pour éviter la duplication

// Group all Portuguese club logo posts
export const portugueseClubPosts: BlogPost[] = [
  benficaLogoPost,
  portoLogoPost,
  sportingLogoPost,
  sportingBragaLogoPost,
  vitoriaGuimaraesLogoPost,
  rioAveLogoPost,
  famalicaoLogoPost,
  boavistaLogoPost,
  estorilPraiaLogoPost,
  // Suppression de tacaDePortugalLogoPost pour éviter la duplication
];
