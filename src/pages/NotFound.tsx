
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/ui/page-transition";
import FloatingParticles from "@/components/blog/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Search, BookOpen, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { title: "Collection de Logos Football", href: "/", icon: Home },
    { title: "Blog Football", href: "/blog", icon: BookOpen },
    { title: "Articles sur les Logos", href: "/blog?category=logos", icon: Search }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Page non trouvée - 404 | Logo Foot</title>
        <meta name="description" content="La page que vous cherchez n'existe pas. Découvrez notre collection de logos de football et nos articles de blog." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="w-full relative overflow-hidden rounded-b-3xl" style={{ backgroundColor: 'rgb(30, 29, 28)' }}>
        {/* Particules flottantes */}
        <FloatingParticles />
        
        {/* Contenu principal */}
        <div className="relative z-10 text-white">
          <div className="container mx-auto px-4 pt-16 pb-16">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              
              {/* Titre 404 stylisé */}
              <div className="space-y-4">
                <div className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text drop-shadow-lg">
                  404
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent max-w-md mx-auto"></div>
              </div>
              
              {/* Message principal */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Page introuvable
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Oops ! La page que vous cherchez n'existe pas ou a été déplacée.
                  <br className="hidden md:block" />
                  Explorez notre collection de logos de football ci-dessous.
                </p>
              </div>
              
              {/* URL actuelle avec badge */}
              <div className="flex justify-center">
                <Badge 
                  variant="outline" 
                  className="text-gray-400 border-gray-600 bg-black/20 backdrop-blur-sm px-4 py-2 text-sm"
                >
                  URL demandée : {location.pathname}
                </Badge>
              </div>
              
              {/* Boutons de navigation */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/">
                    <Button 
                      size="lg" 
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Home className="w-5 h-5 mr-2" />
                      Retour à l'accueil
                    </Button>
                  </Link>
                  <Link to="/blog">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Découvrir le blog
                    </Button>
                  </Link>
                </div>
                
                {/* Lien retour avec historique */}
                <button 
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour à la page précédente
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section séparateur */}
        <div className="relative z-20 px-4 mb-8">
          <div className="container mx-auto relative">
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative backdrop-blur-md rounded-lg px-4 py-2" style={{ backgroundColor: 'rgba(40, 39, 37, 0.8)' }}>
                <p className="text-white text-sm font-medium whitespace-nowrap relative z-10">
                  Pages populaires de Logo Foot
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation vers pages populaires */}
        <div className="relative z-20 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {popularPages.map((page, index) => {
                const IconComponent = page.icon;
                return (
                  <Link 
                    key={index}
                    to={page.href}
                    className="group relative backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: 'rgba(60, 56, 54, 0.4)' }}
                  >
                    <div className="p-6 flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-orange-300 transition-colors duration-300">
                        {page.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
