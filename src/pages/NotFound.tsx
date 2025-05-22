
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
        <div className="text-center max-w-md px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Page non trouvée</h1>
          <p className="text-xl text-gray-600 mb-6">
            Désolé, nous n'avons pas trouvé la page que vous recherchez.
          </p>
          <div className="space-y-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au blog
              </Link>
            </Button>
            <div>
              <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
                Ou retourner à la page d'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
