
import { BookOpen, Home, Menu, MessageCircle, FileText, Scroll, AlertTriangle, HelpCircle, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
      className={`w-full py-1.5 sm:py-2 px-4 sm:px-6 backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#191919] shadow-lg border-gray-800' 
          : 'bg-[#191919] border-gray-800'
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
              className="p-1 rounded-md text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-[#191919] shadow-md z-50 border-b border-gray-800 animate-in fade-in slide-in-from-top-5">
                <div className="container mx-auto py-3 flex flex-col space-y-2">
                  <Link 
                    to="/" 
                    className={`flex items-center gap-2 transition-all px-4 py-3 rounded-md ${
                      currentPath === '/' 
                        ? 'font-medium bg-white/10 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>Accueil</span>
                  </Link>
                  <Link 
                    to="/blog" 
                    className={`flex items-center gap-2 transition-all px-4 py-3 rounded-md ${
                      currentPath.startsWith('/blog') 
                        ? 'font-medium bg-white/10 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Blog</span>
                  </Link>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-700 my-2"></div>
                  
                  {/* Footer links in mobile menu */}
                  <Dialog>
                    <DialogTrigger className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all text-left">
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
                  <FAQDialog variant="header" />
                </div>
              </div>
            )}
          </>
        ) : (
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center h-full">
            <Link 
              to="/" 
              className={`flex items-center gap-1.5 px-4 h-full text-xs transition-colors border-b-2 ${
                currentPath === '/' 
                  ? 'font-medium text-white border-white' 
                  : 'text-gray-300 hover:text-white border-transparent'
              }`}
            >
              <Home className="w-3 h-3" />
              <span>Accueil</span>
            </Link>
            <Link 
              to="/blog" 
              className={`flex items-center gap-1.5 px-4 h-full text-xs transition-colors border-b-2 ${
                currentPath.startsWith('/blog') 
                  ? 'font-medium text-white border-white' 
                  : 'text-gray-300 hover:text-white border-transparent'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>Blog</span>
            </Link>
            
            <Dialog>
              <DialogTrigger className={`flex items-center gap-1.5 px-4 h-full text-xs transition-colors border-b-2 border-transparent text-gray-300 hover:text-white`}>
                <MessageCircle className="w-3 h-3" />
                <span>Contact</span>
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
            
            <FAQDialog variant="header" />
          </div>
        )}

        {/* Bouton Acheter à droite */}
        {!isMobile && (
          <Button
            onClick={() => window.dispatchEvent(new CustomEvent("open-payment-modal"))}
            variant="outline"
            className="flex items-center gap-1 border-white/30 bg-transparent text-white hover:bg-white hover:text-[#191919] font-medium px-2.5 py-1 text-[11px] rounded-md transition-all h-auto"
          >
            <Download className="w-3 h-3" />
            <span>Acheter</span>
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
