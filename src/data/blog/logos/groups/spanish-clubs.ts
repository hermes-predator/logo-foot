
import { BlogPost } from '../../../../types/blog';

// Import des articles sur les logos des clubs espagnols
import { barcelonaLogoPost } from '../barcelona-logo';
import { realMadridLogoPost } from '../real-madrid-logo';
import { atleticoMadridLogoPost } from '../atletico-madrid-logo';
import { sevillaFcLogoPost } from '../sevilla-fc-logo';
import { valenciaCfLogoPost } from '../valencia-cf-logo';
import { villarrealCfLogoPost } from '../villarreal-cf-logo';
import { realSociedadLogoPost } from '../real-sociedad-logo';
import { athleticBilbaoLogoPost } from '../athletic-bilbao-logo';
import { rayoVallecanoLogoPost } from '../rayo-vallecano-logo';
import { realBetisLogoPost } from '../real-betis-logo';
import { getafeLogoPost } from '../getafe-logo';
import { celtaVigoLogoPost } from '../celta-vigo-logo';
import { cadizLogoPost } from '../cadiz-logo';
import { espanyolLogoPost } from '../espanyol-logo';
import { huescaLogoPost } from '../huesca-logo';
import { elcheCfLogoPost } from '../elche-cf-logo';
import { gironaLogoPost } from '../girona-logo';
import { leganesLogoPost } from '../leganes-logo';
import { levanteCfLogoPost } from '../levante-ud-logo';
import { almeriaLogoPost } from '../almeria-logo';
import { realOviedoLogoPost } from '../real-oviedo-logo';
import { mirandesLogoPost } from '../mirandes-logo';
import { realValladolidLogoPost } from '../real-valladolid-logo';
import { eibarLogoPost } from '../eibar-logo';
import { mallorcaLogoPost } from '../majorque-logo';
import { laspalmasLogoPost } from '../las-palmas-logo';
import { malagaLogoPost } from '../malaga-logo';

export const spanishClubPosts: BlogPost[] = [
  barcelonaLogoPost,
  realMadridLogoPost,
  atleticoMadridLogoPost,
  sevillaFcLogoPost,
  valenciaCfLogoPost,
  villarrealCfLogoPost,
  realSociedadLogoPost,
  athleticBilbaoLogoPost,
  rayoVallecanoLogoPost,
  realBetisLogoPost,
  getafeLogoPost,
  celtaVigoLogoPost,
  cadizLogoPost, // Assurons-nous que cadizLogoPost n'est importé qu'une seule fois
  espanyolLogoPost,
  huescaLogoPost,
  elcheCfLogoPost,
  gironaLogoPost,
  leganesLogoPost,
  levanteCfLogoPost,
  almeriaLogoPost,
  realOviedoLogoPost,
  mirandesLogoPost,
  realValladolidLogoPost,
  eibarLogoPost,
  mallorcaLogoPost,
  laspalmasLogoPost,
  malagaLogoPost
];
