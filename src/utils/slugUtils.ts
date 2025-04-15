
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlève les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, ''); // Enlève les tirets au début et à la fin
}

export function generatePostUrl(id: number, title: string): string {
  const slug = generateSlug(title);
  return `/blog/${id}-${slug}`;
}
