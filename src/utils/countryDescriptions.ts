import { CountryAdjective } from '@/types/countries';
import { countryChampionships } from '@/constants/countryData';

const countryAdjectives: CountryAdjective = {
  'France': 'français',
  'Allemagne': 'allemands',
  'Espagne': 'espagnols',
  'Italie': 'italiens',
  'Angleterre': 'anglais',
  'Portugal': 'portugais',
  'Brésil': 'brésiliens',
  'Pays-Bas': 'néerlandais',
  'Belgique': 'belges',
  'Turquie': 'turcs',
  'Suisse': 'suisses',
  'Écosse': 'écossais',
  'Autriche': 'autrichiens',
  'Grèce': 'grecs',
  'Ukraine': 'ukrainiens',
  'Russie': 'russes',
  'Danemark': 'danois',
  'Norvège': 'norvégiens',
  'Suède': 'suédois',
  'Pologne': 'polonais',
  'Roumanie': 'roumains',
  'Hongrie': 'hongrois',
  'Bulgarie': 'bulgares',
  'États-Unis': 'américains',
  'Argentine': 'argentins',
  'Australie': 'australiens',
  'Arabie Saoudite': 'saoudiens',
  'Slovaquie': 'slovaques',
  'Biélorussie': 'biélorusses',
  'Bosnie-Herzégovine': 'bosniens',
  'Islande': 'islandais',
  'Israël': 'israéliens',
  'Luxembourg': 'luxembourgeois',
  'Slovénie': 'slovènes',
  'Albanie': 'albanais',
  'Malte': 'maltais',
  'Azerbaïdjan': 'azerbaïdjanais',
  'Moldavie': 'moldaves',
  'Arménie': 'arméniens',
  'Chypre': 'chypriotes',
  'Estonie': 'estoniens',
  'Géorgie': 'géorgiens',
  'Kazakhstan': 'kazakhs',
  'Kosovo': 'kosovars',
  'Lettonie': 'lettons',
  'Lituanie': 'lituaniens',
  'Macédoine du Nord': 'macédoniens',
  'Monténégro': 'monténégrins',
  'Iles Féroés': 'féroïens',
  'Qatar': 'qataris',
  'Gibraltar': 'gibraltariens'
};

export const getCountryDescription = (country: string): string => {
  if (country === 'Sélections Nationales') {
    return 'Collection complète des logos des sélections nationales de football - Format HD transparent - Tous les pays';
  }

  if (country === 'Compétitions de football' || country === 'Compétitions internationales' || country === 'Coupes nationales') {
    return `Collection complète des logos ${country.toLowerCase()} - Format HD transparent - ${country}`;
  }

  const adjective = countryAdjectives[country] || `de ${country}`;
  const championship = countryChampionships[country];
  
  if (championship) {
    return `Collection complète des logos de club de foot ${adjective} - Format HD transparent - Toutes les équipes de foot de la ${championship} - ${country}`;
  }

  return `Collection complète des logos de club de foot ${adjective} - Format HD transparent - ${country}`;
};
