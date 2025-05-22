
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/ui/page-transition";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Afficher des informations de diagnostic dans la console
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Vérifier si c'est un article de blog avec un format d'URL incorrect
    if (location.pathname.includes("/blog/")) {
      const pathSegments = location.pathname.split('/');
      const slugPart = pathSegments[pathSegments.length - 1];
      
      console.log("Tentative d'accès à un article avec slug:", slugPart);
      
      // Notifier l'utilisateur avec un toast
      toast({
        title: "Article non trouvé",
        description: "Nous n'avons pas pu trouver l'article demandé. Vous allez être redirigé vers la liste des articles.",
        variant: "destructive",
      });
    }
  }, [location.pathname, toast]);

  const handleBackToBlog = () => {
    navigate("/blog");
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
          <p className="text-xl text-gray-700 mb-6">Article non trouvé</p>
          <p className="text-gray-600 mb-8">
            L'article que vous cherchez n'existe pas ou a été déplacé.
          </p>
          
          <Button
            onClick={handleBackToBlog}
            className="flex items-center justify-center gap-2 mx-auto"
            variant="outline"
            size="lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Retourner à la liste des articles
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
