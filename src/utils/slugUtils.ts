
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
