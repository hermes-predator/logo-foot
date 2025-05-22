
import { CountryName, CountryChampionship } from '@/types/countries';

export const countries: CountryName[] = [
  'Angleterre', 'Allemagne', 'Espagne', 'France', 'Italie',
  'Brésil', 'États-Unis', 'Pays-Bas', 'Sélections Nationales', 'Argentine',
  'Portugal', 'Turquie', 'Belgique', 'Danemark', 'Grèce',
  'Norvège', 'Pologne', 'Roumanie', 'Russie', 'Suède',
  'Suisse', 'République Tchèque', 'Autriche', 'Bulgarie', 'Croatie',
  'Hongrie', 'Serbie', 'Slovaquie', 'Biélorussie', 'Écosse',
  'Irlande', 'Pays de Galles', 'Finlande', 'Ukraine', 'Australie',
  'Arabie Saoudite', 'Bosnie-Herzégovine', 'Islande', 'Israël', 'Luxembourg',
  'Slovénie', 'Albanie', 'Irlande du Nord', 'Malte', 'Azerbaïdjan',
  'Moldavie', 'Arménie', 'Chypre', 'Estonie', 'Géorgie',
  'Kazakhstan', 'Kosovo', 'Lettonie', 'Lituanie', 'Macédoine du Nord',
  'Monténégro', 'Default', 'Iles Féroés', 'Qatar', 'Gibraltar',
  'Compétitions de football', 'Compétitions internationales', 'Coupes nationales', 'Championnats'
];

export const countryChampionships: CountryChampionship = {
  'France': 'Ligue 1',
  'Allemagne': 'Bundesliga',
  'Espagne': 'La Liga',
  'Italie': 'Serie A',
  'Angleterre': 'Premier League',
  'Portugal': 'Liga Portugal',
  'Brésil': 'Brasileirão',
  'Pays-Bas': 'Eredivisie',
  'Belgique': 'Pro League',
  'Turquie': 'Süper Lig',
  'Suisse': 'Super League',
  'Écosse': 'Scottish Premiership',
  'Autriche': 'Bundesliga',
  'Grèce': 'Super League',
  'Ukraine': 'Premier League',
  'Russie': 'Premier Liga',
  'Danemark': 'Superliga',
  'Norvège': 'Eliteserien',
  'Suède': 'Allsvenskan',
  'Pologne': 'Ekstraklasa',
  'République Tchèque': 'First League',
  'Croatie': 'HNL',
  'Serbie': 'Super Liga',
  'Roumanie': 'Liga I',
  'Hongrie': 'NB I',
  'Bulgarie': 'First League',
  'États-Unis': 'MLS',
  'Argentine': 'Primera División',
  'Australie': 'A-League',
  'Arabie Saoudite': 'Saudi Pro League',
  'Slovaquie': 'Super Liga',
  'Biélorussie': 'Premier League',
  'Bosnie-Herzégovine': 'Premier League',
  'Islande': 'Úrvalsdeild',
  'Israël': 'Premier League',
  'Luxembourg': 'National Division',
  'Slovénie': 'PrvaLiga',
  'Albanie': 'Superliga',
  'Malte': 'Premier League',
  'Azerbaïdjan': 'Premier League',
  'Moldavie': 'Super Liga',
  'Arménie': 'Premier League',
  'Chypre': 'First Division',
  'Estonie': 'Meistriliiga',
  'Géorgie': 'Erovnuli Liga',
  'Kazakhstan': 'Premier League',
  'Kosovo': 'Superliga',
  'Lettonie': 'Virsliga',
  'Lituanie': 'A Lyga',
  'Macédoine du Nord': 'First League',
  'Monténégro': 'First League',
  'Iles Féroés': 'Premier League',
  'Qatar': 'Stars League',
  'Gibraltar': 'National League'
};

// Add the missing exports that are used in BlogHeader.tsx
export const categories = [
  { id: 'logos', name: 'Logos', color: 'blue', description: 'Découvrez notre collection de logos de football en haute qualité, prêts à télécharger en format PNG.' },
  { id: 'analysis', name: 'Analyses', color: 'emerald', description: 'Analyses tactiques, statistiques et performances des équipes et joueurs.' },
  { id: 'technical', name: 'Technique', color: 'violet', description: 'Guides techniques sur la création et modification de logos et designs footballistiques.' },
  { id: 'history', name: 'Histoire', color: 'amber', description: 'L\'histoire des clubs, des compétitions et des moments marquants du football.' },
  { id: 'pixel-art', name: 'Pixel Art', color: 'fuchsia', description: 'Logos et designs de football en style pixel art, parfaits pour les projets rétro.' }
];

export const coursesData = [
  { id: 1, title: 'Design de Logos Football', description: 'Apprenez à créer des logos professionnels pour clubs de football', level: 'Intermédiaire' },
  { id: 2, title: 'Analyse Tactique', description: 'Techniques d\'analyse des systèmes de jeu et formations', level: 'Avancé' },
  { id: 3, title: 'Histoire du Football', description: 'L\'évolution du football à travers les époques', level: 'Débutant' }
];
