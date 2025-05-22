
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTransition from "@/components/ui/page-transition";
import { extractPostIdFromUrl } from "@/utils/slugUtils";
import { blogPosts } from "@/data/blog";
import { useToast } from "@/components/ui/use-toast";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [attemptedPostId, setAttemptedPostId] = useState<number | null>(null);
  const [diagnostic, setDiagnostic] = useState<string>("");

  useEffect(() => {
    const path = location.pathname;
    console.error(
      "404 Error: User attempted to access non-existent route:",
      path
    );
    
    // Essayer de diagnostiquer le problème pour les routes de blog
    if (path.includes("/blog/")) {
      const postPath = path.split("/blog/")[1];
      const extractedId = extractPostIdFromUrl(postPath);
      setAttemptedPostId(extractedId);
      
      if (extractedId) {
        const post = blogPosts.find(p => p.id === extractedId);
        if (post) {
          setDiagnostic(`Article trouvé en mémoire (ID: ${extractedId}) mais problème de routage.`);
          console.log(`Article détecté en mémoire:`, post);
          
          // Redirection auto après notification
          toast({
            title: "Redirection...",
            description: `Redirection vers l'article ${post.title}`,
          });
          
          // Naviguer vers l'URL corrigée après un court délai
          setTimeout(() => {
            navigate(`/blog/${extractedId}`);
          }, 1500);
        } else {
          setDiagnostic(`Aucun article avec l'ID ${extractedId} n'a été trouvé dans la base de données.`);
          console.error(`Article avec ID ${extractedId} introuvable dans la base de données.`);
        }
      } else {
        setDiagnostic(`Format d'URL invalide ou ID non extrait.`);
        console.error(`Format d'URL invalide ou ID non extrait: ${postPath}`);
      }
    }
  }, [location.pathname, navigate, toast]);

  const goToHome = () => {
    navigate("/");
  };

  const goToBlog = () => {
    navigate("/blog");
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-sm max-w-md w-full">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-6">Article non trouvé</p>
          <p className="text-gray-500 mb-6">
            L'article que vous cherchez n'existe pas ou a été déplacé.
          </p>
          
          {diagnostic && (
            <div className="bg-gray-50 p-3 rounded-md text-xs text-left text-gray-500 mb-6">
              <p className="font-medium mb-1">Diagnostic:</p>
              <p>{diagnostic}</p>
              {attemptedPostId && (
                <p className="mt-1">ID recherché: {attemptedPostId}</p>
              )}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={goToHome}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Page d'accueil
            </button>
            <button
              onClick={goToBlog}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Liste des articles
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
