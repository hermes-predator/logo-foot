
import { BookOpen, Home, Menu, MessageCircle, FileText, Scroll, AlertTriangle, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from './ContactForm';
import CGVDialog from './footer/CGVDialog';
import MentionsLegalesDialog from './footer/MentionsLegalesDialog';
import DisclaimerDialog from './footer/DisclaimerDialog';
import FAQDialog from './footer/FAQDialog';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Fonction pour déterminer si le lien est actif
  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand on change de page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header 
      className={`w-full py-4 px-4 sm:px-6 backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 shadow-sm' 
          : 'bg-white/50 border-gray-100/20'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 sm:gap-8">
        <Link 
          to="/" 
          className="hover:opacity-80 transition-opacity"
        >
          <Logo />
        </Link>
        
        {isMobile ? (
          <>
            <button 
              aria-label="Menu" 
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 border-b border-gray-100 animate-in fade-in slide-in-from-top-5">
                <div className="container mx-auto py-3 flex flex-col space-y-2">
                  <Link 
                    to="/" 
                    className={`group flex items-center gap-3 transition-all px-4 py-3 rounded-lg relative overflow-hidden ${
                      currentPath === '/' 
                        ? 'font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80'
                    }`}
                  >
                    <div className={`p-1.5 rounded-md transition-all ${
                      currentPath === '/' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500'
                    }`}>
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="relative">
                      Accueil
                      {currentPath === '/' && (
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                      )}
                    </span>
                  </Link>
                  <Link 
                    to="/blog" 
                    className={`group flex items-center gap-3 transition-all px-4 py-3 rounded-lg relative overflow-hidden ${
                      currentPath.startsWith('/blog') 
                        ? 'font-medium bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 shadow-sm' 
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50/80'
                    }`}
                  >
                    <div className={`p-1.5 rounded-md transition-all ${
                      currentPath.startsWith('/blog') 
                        ? 'bg-emerald-100 text-emerald-600' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-emerald-50 group-hover:text-emerald-500'
                    }`}>
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="relative">
                      Blog
                      {currentPath.startsWith('/blog') && (
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                      )}
                    </span>
                  </Link>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  {/* Footer links in mobile menu */}
                  <Dialog>
                    <DialogTrigger className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-all text-left">
                      <MessageCircle className="w-4 h-4" />
                      <span>Contactez-nous</span>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-full">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-gray-800">Contacter le Service Client</DialogTitle>
                        <DialogDescription>
                          Pour toute question ou demande d'assistance.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <ContactForm />
                      </div>
                    </DialogContent>
                  </Dialog>

                  <CGVDialog />
                  <MentionsLegalesDialog />
                  <DisclaimerDialog />
                  <FAQDialog />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6 sm:gap-8">
            <Link 
              to="/" 
              className={`group flex items-center gap-2.5 transition-all relative px-4 py-2.5 rounded-lg overflow-hidden ${
                currentPath === '/' 
                  ? 'font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm ring-1 ring-blue-100' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80 hover:shadow-sm'
              }`}
            >
              <div className={`p-1 rounded-md transition-all ${
                currentPath === '/' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500'
              }`}>
                <Home className="w-4 h-4" />
              </div>
              <span className="relative">
                Accueil
                {currentPath === '/' && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                )}
              </span>
              {/* Effet de brillance subtile au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%] duration-700"></div>
            </Link>
            <Link 
              to="/blog" 
              className={`group flex items-center gap-2.5 transition-all relative px-4 py-2.5 rounded-lg overflow-hidden ${
                currentPath.startsWith('/blog') 
                  ? 'font-medium bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 shadow-sm ring-1 ring-emerald-100' 
                  : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50/80 hover:shadow-sm'
              }`}
            >
              <div className={`p-1 rounded-md transition-all ${
                currentPath.startsWith('/blog') 
                  ? 'bg-emerald-100 text-emerald-600' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-emerald-50 group-hover:text-emerald-500'
              }`}>
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="relative">
                Blog
                {currentPath.startsWith('/blog') && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                )}
              </span>
              {/* Effet de brillance subtile au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%] duration-700"></div>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
