
export function generateSlug(title: string): string {
  if (!title) return 'article'; // Valeur par défaut si le titre est vide
  
  // Liste étendue de mots à filtrer, incluant plus de variations
  const stopWords = [
    'de', 'du', 'des', 'le', 'la', 'les', 'un', 'une', 'et', 'ou', 'a', 
    'dans', 'pour', 'par', 'sur', 'avec', 'sans', 'sous'
  ];

  // Normalisation et préparation du slug
  const words = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlève les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, '') // Enlève les tirets au début et à la fin
    .replace(/-{2,}/g, '-') // Remplace les multiples tirets consécutifs
    .split('-')
    .filter(word => {
      // Filtrer les mots courts, vides et les stop words
      return word.length > 2 && !stopWords.includes(word);
    });
  
  // Prendre exactement les 3 premiers mots significatifs
  const selectedWords = words.slice(0, 3);
  
  // Former le slug final avec exactement 3 mots (ou moins si pas assez de mots significatifs)
  const slug = selectedWords.join('-');

  // Garantir une longueur minimale et maximale
  return slug.length < 3 ? 'article' : 
         slug.length > 50 ? slug.substring(0, 50) : slug;
}

export function generatePostUrl(id: number, title: string, manualSlug?: string): string {
  // Vérification de sécurité pour id
  if (!id) {
    console.error('ID manquant pour la génération d\'URL d\'article');
    return '/blog';
  }
  
  // Si un slug manuel est fourni, l'utiliser directement (PRIORITÉ)
  if (manualSlug && manualSlug.trim() !== '') {
    return `/blog/${id}-${manualSlug.trim()}`;
  }
  
  // Sinon, générer depuis le titre (fallback)
  const sanitizedTitle = title ? title : 'article-de-blog';
  const slug = generateSlug(sanitizedTitle);
  
  // Vérification supplémentaire pour s'assurer que le slug n'est pas vide
  if (!slug || slug === '') {
    return `/blog/${id}-article`;
  }
  
  return `/blog/${id}-${slug}`;
}

// Fonction pour extraire l'ID à partir d'une URL d'article
export function extractPostIdFromUrl(url: string): number | null {
  try {
    // Nettoyer l'URL (enlever le domaine si présent)
    const path = url.includes('/blog/') ? url.split('/blog/')[1] : url;
    
    // Différents formats possibles: 
    // 1. "123-slug-title"
    // 2. "123"
    // Extraire uniquement la partie numérique au début
    const match = path.match(/^(\d+)(?:-|$)/);
    
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    
    return null;
  } catch (error) {
    console.error("Erreur lors de l'extraction de l'ID de l'article:", error);
    return null;
  }
}

// Fonction pour vérifier si une URL d'article est dans le format canonique
export function isCanonicalPostUrl(url: string, title: string, manualSlug?: string): boolean {
  if (!title) return true; // Si pas de titre, considérer comme canonique
  
  const id = extractPostIdFromUrl(url);
  if (!id) return false;
  
  const canonicalUrl = generatePostUrl(id, title, manualSlug);
  
  // Normaliser les URLs avant comparaison (enlever trailing slashes, etc.)
  const normalizedUrl = url.replace(/\/$/, '');
  const normalizedCanonicalUrl = canonicalUrl.replace(/\/$/, '');
  
  return normalizedUrl === normalizedCanonicalUrl;
}
