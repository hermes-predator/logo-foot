
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, AlertCircle } from "lucide-react";
import { extractPostIdFromUrl } from "@/utils/slugUtils";
import { blogPosts } from "@/data/blog";
import { toast } from "@/components/ui/use-toast";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Notification à l'utilisateur
    toast({
      title: "Page non trouvée",
      description: "La page que vous recherchez n'existe pas ou a été déplacée.",
      variant: "destructive"
    });
    
    // Tentative de diagnostic si c'est une page d'article de blog
    if (location.pathname.startsWith('/blog/')) {
      const postId = extractPostIdFromUrl(location.pathname);
      console.error(`Tentative d'accès à l'article ID: ${postId}`);
      
      if (postId) {
        // Vérifier si cet ID existe dans blogPosts
        const post = blogPosts.find(p => p.id === postId);
        if (!post) {
          console.error(`L'article avec l'ID ${postId} n'existe pas dans blogPosts (total: ${blogPosts.length} articles)`);
          
          // Liste des ID des 10 premiers et 10 derniers articles pour référence
          const firstTenIds = blogPosts.slice(0, 10).map(p => p.id);
          const lastTenIds = blogPosts.slice(-10).map(p => p.id);
          console.log("Premiers 10 IDs:", firstTenIds);
          console.log("Derniers 10 IDs:", lastTenIds);
          
          // Redirection vers la page blog principale après une courte pause
          setTimeout(() => {
            navigate('/blog');
          }, 3000);
        } else {
          console.log(`Article avec ID ${postId} existe mais n'est pas accessible:`, post.title);
          
          // Tentative de redirection vers l'URL correcte
          const correctPath = `/blog/${post.id}-${post.title.toLowerCase().replace(/ /g, '-')}`;
          if (location.pathname !== correctPath) {
            console.log("Tentative de redirection vers:", correctPath);
            setTimeout(() => {
              navigate(correctPath);
            }, 2000);
          }
        }
      }
    }
  }, [location.pathname, navigate]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
        <div className="text-center max-w-md px-4">
          <div className="mb-6 flex justify-center">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Page non trouvée</h1>
          <p className="text-xl text-gray-600 mb-6">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div className="space-y-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/blog" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Parcourir tous les articles
              </Link>
            </Button>
            <div className="flex justify-center gap-4 mt-4">
              <Link to="/blog" className="text-blue-500 hover:underline inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Retour au blog
              </Link>
              <Link to="/" className="text-blue-500 hover:underline">
                Page d'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
