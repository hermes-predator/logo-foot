
export function generateSlug(title: string): string {
  if (!title) return 'article'; // Valeur par défaut si le titre est vide
  
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlève les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, '') // Enlève les tirets au début et à la fin
    .replace(/-{2,}/g, '-'); // Remplace les multiples tirets consécutifs par un seul
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
  // Essaie de capturer l'ID de l'article à partir de différents formats possibles
  // Format /blog/123-slug-de-l-article
  const idWithSlugMatch = url.match(/\/blog\/(\d+)(?:-|$)/);
  
  if (idWithSlugMatch && idWithSlugMatch[1]) {
    return parseInt(idWithSlugMatch[1], 10);
  }
  
  return null;
}

// Fonction pour vérifier si une URL d'article est dans le format canonique
export function isCanonicalPostUrl(url: string, title: string): boolean {
  if (!title) return true; // Si pas de titre, considérer comme canonique
  
  const id = extractPostIdFromUrl(url);
  if (!id) return false;
  
  const canonicalUrl = generatePostUrl(id, title);
  return url === canonicalUrl;
}
