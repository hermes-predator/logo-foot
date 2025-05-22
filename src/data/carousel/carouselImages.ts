
/**
 * Liste des images utilisées dans le carrousel d'en-tête
 * Dernière vérification: 2025-05-22
 */
export const carouselImages = [
  "/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png", // Image 1
  "/lovable-uploads/99e16506-d368-4b20-9efa-77f3c4870bf7.png", // Image 2
  "/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png", // Image 3
  "/lovable-uploads/bac193c3-2fcc-4ee0-964c-7e2c1ad83890.png", // Image 4
  "/lovable-uploads/5aec79d7-9943-4bb4-90bd-c5f2679ddecf.png"  // Image 5
];

// Metadata pour le carrousel
export const carouselMetadata = {
  totalImages: carouselImages.length,
  lastUpdated: "2025-05-22",
  description: "Images du carrousel pour la page d'accueil",
  format: "PNG"
};

// Données d'image alternative en cas d'erreur
export const fallbackImage = "/placeholder.svg";
