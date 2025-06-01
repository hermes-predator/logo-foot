
/**
 * Génère le chemin d'une image de blog à partir de son ID
 */
export const getBlogImagePath = (imageId: number): string => {
  return `/blog/logo${imageId}.png`;
};

/**
 * Génère le chemin d'une image de galerie à partir de son ID
 */
export const getGalleryImagePath = (imageId: number): string => {
  return `/images/logo${imageId}.png`;
};

/**
 * Détermine le bon chemin d'image en fonction du contexte
 */
export const getImagePath = (imageId: number, context: 'blog' | 'gallery' = 'blog'): string => {
  return context === 'blog' ? getBlogImagePath(imageId) : getGalleryImagePath(imageId);
};
