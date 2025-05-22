
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/ui/page-transition";
import { blogPosts } from "@/data/blog";
import { extractPostIdFromUrl } from "@/utils/slugUtils";

const NotFound = () => {
  const location = useLocation();
  const path = location.pathname;
  
  useEffect(() => {
    // Vérifier si c'est un article de blog
    if (path.includes('/blog/')) {
      const idFromUrl = extractPostIdFromUrl(path);
      
      console.error(
        "404 Error: Blog article not found:",
        {
          path,
          extractedId: idFromUrl,
          availableIds: blogPosts.slice(0, 5).map(p => p.id),
          totalArticles: blogPosts.length,
          urlFormat: path.split('/blog/')[1]
        }
      );
    } else {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname, path]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
