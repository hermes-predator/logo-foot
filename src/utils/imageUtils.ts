
export const getOptimizedImageUrl = (imageUrl: string): string => {
  // Vérifie si le navigateur supporte WebP
  const supportsWebP = () => {
    const elem = document.createElement('canvas');
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  if (supportsWebP() && imageUrl.endsWith('.png')) {
    // Convertit l'URL de l'image PNG en WebP
    return imageUrl.replace('.png', '.webp');
  }

  return imageUrl;
};
