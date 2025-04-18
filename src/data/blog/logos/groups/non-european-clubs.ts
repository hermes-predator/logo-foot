import { BlogPost } from '../../../../types/blog';

// Import non-European club logo posts
import { interMiamiLogoPost } from '../inter-miami-logo';
import { losAngelesGalaxyLogoPost } from '../los-angeles-galaxy-logo';
import { africanClubsPost } from '../african-clubs';
import { asianClubsPost } from '../asian-clubs';
import { brazilianClubsPost } from '../brazilian-clubs';
import { southAmericanClubsPost } from '../south-american-clubs';
import { mlsLogoPost } from '../mls-logos';
import { alNassrLogoPost } from '../al-nassr-logo';
import { alHilalLogoPost } from '../al-hilal-logo';
import { alAhliLogoPost } from '../al-ahli-logo';
import { alIttihadLogoPost } from '../al-ittihad-logo';
// Remove direct import of alEttifaqLogoPost since it's included via asianClubsPost
// import { alEttifaqLogoPost } from '../al-ettifaq-logo';
import { tigresUanlLogoPost } from '../tigres-uanl-logo';
import { chicagoFireLogoPost } from '../chicago-fire-logo';
import { atlantaUnitedLogoPost } from '../atlanta-united-logo';
import { newYorkCityFcLogoPost } from '../new-york-city-fc-logo';
import { seattleSoundersLogoPost } from '../seattle-sounders-logo';
import { coloradoRapidsLogoPost } from '../colorado-rapids-logo';
import { realSaltLakeLogoPost } from '../real-salt-lake-logo';
import { portlandTimbersLogoPost } from '../portland-timbers-logo';
import { minnesotaUnitedLogoPost } from '../minnesota-united-logo';
import { phoenixRisingLogoPost } from '../phoenix-rising-logo';
import { newYorkRedBullsLogoPost } from '../new-york-red-bulls-logo';
import { orlandoCityLogoPost } from '../orlando-city-logo';
import { sanJoseEarthquakesLogoPost } from '../san-jose-earthquakes-logo';
import { columbusCrewLogoPost } from '../columbus-crew-logo';
// Import sacramentoRepublicLogoPost but make sure it's not duplicated elsewhere
import { sacramentoRepublicLogoPost } from '../sacramento-republic-logo';
import { louisvilleCityLogoPost } from '../louisville-city-logo';
// Remove direct imports of the two teams that are already included via brazilianClubsPost and southAmericanClubsPost
// import { saoPauloLogoPost } from '../sao-paulo-logo';
// import { corinthiansLogoPost } from '../corinthians-logo';
import { newEnglandRevolutionLogoPost } from '../new-england-revolution-logo';

// Group non-European club logo posts
export const nonEuropeanClubPosts: BlogPost[] = [
  alHilalLogoPost,
  alNassrLogoPost,
  alAhliLogoPost,
  alIttihadLogoPost,
  // Remove alEttifaqLogoPost from here as it's already included in asianClubsPost
  tigresUanlLogoPost,
  chicagoFireLogoPost,
  atlantaUnitedLogoPost,
  newYorkCityFcLogoPost,
  seattleSoundersLogoPost,
  coloradoRapidsLogoPost,
  realSaltLakeLogoPost,
  brazilianClubsPost,
  southAmericanClubsPost,
  interMiamiLogoPost,
  losAngelesGalaxyLogoPost,
  africanClubsPost,
  asianClubsPost,
  mlsLogoPost,
  portlandTimbersLogoPost,
  minnesotaUnitedLogoPost,
  newYorkRedBullsLogoPost,
  phoenixRisingLogoPost,
  orlandoCityLogoPost,
  sanJoseEarthquakesLogoPost,
  columbusCrewLogoPost,
  sacramentoRepublicLogoPost,
  louisvilleCityLogoPost,
  newEnglandRevolutionLogoPost
  // Remove individual entries as they're included via group imports
  // saoPauloLogoPost,
  // corinthiansLogoPost,
];
