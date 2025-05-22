
export function generateSlug(title: string): string {
  if (!title) return 'article'; // Valeur par défaut si le titre est vide
  
  // Liste étendue de mots à filtrer, incluant plus de variations
  const stopWords = [
    'de', 'du', 'des', 'le', 'la', 'les', 'un', 'une', 'et', 'ou', 'a', 
    'dans', 'pour', 'par', 'sur', 'avec', 'sans', 'sous'
  ];

  // Normalisation et préparation du slug
  const slug = title
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
    })
    .slice(0, 3) // Limité à 3 mots
    .join('-');

  // Garantir une longueur minimale et maximale
  return slug.length < 3 ? 'article' : 
         slug.length > 50 ? slug.substring(0, 50) : slug;
}

export function generatePostUrl(id: number, title: string): string {
  // Vérification de sécurité pour id et title
  if (!id) {
    console.error('ID manquant pour la génération d\'URL d\'article');
    return '/blog';
  }
  
  // Utiliser un titre par défaut si vide ou non défini
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
  // Nettoyer l'URL (enlever le domaine si présent)
  const path = url.includes('/blog/') ? url.split('/blog/')[1] : url;
  
  // Améliorer l'extraction pour gérer divers formats d'URL
  // Format attendu: "123-slug-title" ou simplement "123"
  const match = path.match(/^(\d+)(?:-|$)/);
  
  if (match && match[1]) {
    const id = parseInt(match[1], 10);
    console.log(`Extraction d'ID depuis URL: ${url} → ID=${id}`);
    return id;
  }
  
  console.error(`Échec de l'extraction d'ID depuis URL: ${url}`);
  return null;
}

// Fonction pour vérifier si une URL d'article est dans le format canonique
export function isCanonicalPostUrl(url: string, title: string): boolean {
  if (!title) return true; // Si pas de titre, considérer comme canonique
  
  const id = extractPostIdFromUrl(url);
  if (!id) return false;
  
  const canonicalUrl = generatePostUrl(id, title);
  
  // Normaliser les URLs avant comparaison (enlever trailing slashes, etc.)
  const normalizedUrl = url.replace(/\/$/, '');
  const normalizedCanonicalUrl = canonicalUrl.replace(/\/$/, '');
  
  return normalizedUrl === normalizedCanonicalUrl;
}
