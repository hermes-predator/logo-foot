
import { BookOpen, Home, Menu, MessageCircle, FileText, Scroll, AlertTriangle, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
                    className={`flex items-center gap-2 transition-all px-4 py-3 rounded-md ${
                      currentPath === '/' 
                        ? 'font-medium bg-gray-100/80 text-black' 
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <Home className={`w-4 h-4 ${currentPath === '/' ? 'text-black' : ''}`} />
                    <span>Accueil</span>
                  </Link>
                  <Link 
                    to="/blog" 
                    className={`flex items-center gap-2 transition-all px-4 py-3 rounded-md ${
                      currentPath.startsWith('/blog') 
                        ? 'font-medium bg-gray-100/80 text-black' 
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <BookOpen className={`w-4 h-4 ${currentPath.startsWith('/blog') ? 'text-black' : ''}`} />
                    <span>Blog</span>
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
              className={`flex items-center gap-2 transition-all relative px-3 py-2 rounded-md ${
                currentPath === '/' 
                  ? 'font-medium bg-gray-100/80 text-black' 
                  : 'text-gray-700 hover:text-black hover:bg-gray-50'
              }`}
            >
              <Home className={`w-4 h-4 ${currentPath === '/' ? 'text-black' : ''}`} />
              <span>Accueil</span>
            </Link>
            <Link 
              to="/blog" 
              className={`relative flex items-center gap-2 transition-all px-3 py-2 rounded-md ${
                currentPath.startsWith('/blog') 
                  ? 'font-medium bg-gray-100/80 text-black' 
                  : 'text-gray-700 hover:text-black hover:bg-gray-50'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${currentPath.startsWith('/blog') ? 'text-black' : ''}`} />
              <span>Blog</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
