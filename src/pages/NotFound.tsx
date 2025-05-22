
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTransition from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, AlertCircle } from "lucide-react";
import { extractPostIdFromUrl, generatePostUrl } from "@/utils/slugUtils";
import { blogPosts } from "@/data/blog";
import { toast } from "@/components/ui/use-toast";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(true);

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
      console.log(`Tentative d'accès à l'article ID: ${postId}`);
      
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
          
          // Recherche d'un ID proche
          const closestPosts = blogPosts.filter(p => 
            Math.abs(p.id - postId) < 5
          ).sort((a, b) => Math.abs(a.id - postId) - Math.abs(b.id - postId));
          
          if (closestPosts.length > 0) {
            const closestPost = closestPosts[0];
            console.log(`ID proche trouvé: ${closestPost.id} (${closestPost.title})`);
            
            toast({
              title: "Article similaire trouvé",
              description: `Nous vous redirigeons vers un article proche: ${closestPost.title}`,
              duration: 5000
            });
            
            setTimeout(() => {
              setIsAnalyzing(false);
              navigate(generatePostUrl(closestPost.id, closestPost.title));
            }, 3000);
            return;
          }
          
          // Redirection vers la page blog principale après une courte pause
          setTimeout(() => {
            setIsAnalyzing(false);
            navigate('/blog');
          }, 3000);
        } else {
          console.log(`Article avec ID ${postId} existe mais l'URL peut être incorrecte:`, post.title);
          
          // Tentative de redirection vers l'URL correcte
          const correctPath = generatePostUrl(post.id, post.title);
          if (location.pathname !== correctPath) {
            console.log("Tentative de redirection vers:", correctPath);
            toast({
              title: "Redirection",
              description: "Nous vous redirigeons vers l'URL correcte de cet article.",
              duration: 4000
            });
            setTimeout(() => {
              setIsAnalyzing(false);
              navigate(correctPath);
            }, 2000);
          }
        }
      }
    }
    
    // Désactiver l'analyse après un délai
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
    
    return () => clearTimeout(timer);
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
          
          {isAnalyzing && (
            <div className="my-4">
              <div className="animate-pulse flex space-x-2 justify-center">
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Analyse en cours...</p>
            </div>
          )}
          
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
