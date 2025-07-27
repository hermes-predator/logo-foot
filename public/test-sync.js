import { blogPosts } from '../../src/data/blog';

// Test de synchronisation des articles avec Supabase
console.log('🔄 Test de synchronisation...');

const testSync = async () => {
  try {
    const response = await fetch('/api/sync-blog-posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ blogPosts }),
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Synchronisation réussie:', result);
      console.log(`📊 ${result.count} articles synchronisés`);
    } else {
      console.error('❌ Erreur:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('❌ Erreur de connexion:', error);
  }
};

// Auto-exécution au chargement
testSync();