import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    // Redirect to the Supabase edge function sitemap
    window.location.href = 'https://awhmodyqxysnqkuczgss.supabase.co/functions/v1/sitemap';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Redirection vers le sitemap...</p>
    </div>
  );
};

export default Sitemap;
