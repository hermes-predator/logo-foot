
import { useEffect } from 'react';
import { blogPosts } from '../data/blog';
import { extractPostIdFromUrl } from '../utils/slugUtils';

export const useDebugBlog = () => {
  useEffect(() => {
    // Vérifier qu'on a bien chargé tous les articles
    console.log(`Total de ${blogPosts.length} articles chargés`);
    
    // Vérifier que chaque ID est unique
    const ids = blogPosts.map(post => post.id);
    const uniqueIds = [...new Set(ids)];
    
    if (ids.length !== uniqueIds.length) {
      console.error('ATTENTION: Il y a des IDs en double dans les articles!');
      
      // Trouver les IDs en double
      const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
      console.error('IDs en double:', [...new Set(duplicates)]);
      
      // Afficher les articles avec ces IDs
      duplicates.forEach(id => {
        const postsWithId = blogPosts.filter(post => post.id === id);
        console.error(`Articles avec l'ID ${id}:`, postsWithId.map(p => p.title));
      });
    } else {
      console.log('Tous les IDs des articles sont uniques ✓');
    }
    
    // Vérifier la fonction d'extraction d'ID
    const testUrls = [
      '123-article-test',
      '456',
      '789-test',
      'invalid'
    ];
    
    testUrls.forEach(url => {
      const extractedId = extractPostIdFromUrl(url);
      console.log(`URL test "${url}" => ID extrait: ${extractedId}`);
    });
  }, []);
};
