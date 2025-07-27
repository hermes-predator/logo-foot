import { useEffect, useState } from 'react';
import { blogPosts } from '../data/blog';

export const useSyncBlogPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSync, setLastSync] = useState<Date | null>(null);

  const syncPosts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/sync-blog-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogPosts }),
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Synchronisation réussie:', result);
      setLastSync(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      console.error('Erreur de synchronisation:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Synchroniser automatiquement au démarrage
  useEffect(() => {
    syncPosts();
  }, []);

  return {
    syncPosts,
    isLoading,
    error,
    lastSync,
    totalPosts: blogPosts.length
  };
};