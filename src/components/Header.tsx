
import { BookOpen, Home, Menu, MessageCircle, ChevronRight, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from './ContactForm';
import CGVDialog from './footer/CGVDialog';
import MentionsLegalesDialog from './footer/MentionsLegalesDialog';
import DisclaimerDialog from './footer/DisclaimerDialog';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      className={`w-full fixed top-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-2 px-4 sm:px-6' 
          : 'py-4 px-4 sm:px-6'
      }`}
    >
      <nav 
        className={`mx-auto flex items-center justify-between gap-4 sm:gap-8 transition-all duration-500 ease-out ${
          scrolled 
            ? 'max-w-4xl bg-white/95 backdrop-blur-md shadow-lg border border-border/50 rounded-full px-4 sm:px-6 py-2' 
            : 'container bg-transparent px-0 py-0'
        }`}
      >
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
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-foreground hover:bg-muted' 
                  : 'text-foreground hover:bg-white/50'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {mobileMenuOpen && (
              <div className={`absolute top-full left-4 right-4 mt-2 bg-white shadow-xl z-50 border border-border rounded-2xl animate-in fade-in slide-in-from-top-2 overflow-hidden`}>
                <div className="py-3 flex flex-col">
                  <Link 
                    to="/" 
                    className={`flex items-center gap-3 transition-all px-4 py-3 ${
                      currentPath === '/' 
                        ? 'font-medium bg-lime/10 text-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Home className="w-4 h-4" strokeWidth={currentPath === '/' ? 2.5 : 2} />
                    <span>Accueil</span>
                  </Link>
                  <Link 
                    to="/blog" 
                    className={`flex items-center gap-3 transition-all px-4 py-3 ${
                      currentPath.startsWith('/blog') 
                        ? 'font-medium bg-lime/10 text-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" strokeWidth={currentPath.startsWith('/blog') ? 2.5 : 2} />
                    <span>Blog</span>
                  </Link>
                  
                  {/* Divider */}
                  <div className="border-t border-border my-2 mx-4"></div>
                  
                  {/* Footer links in mobile menu */}
                  <Dialog>
                    <DialogTrigger className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-all text-left">
                      <MessageCircle className="w-4 h-4" />
                      <span>Contactez-nous</span>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-full">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-foreground">Contacter le Service Client</DialogTitle>
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
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-1">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all ${
                currentPath === '/' 
                  ? 'font-medium text-foreground bg-muted' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Home className="w-4 h-4" strokeWidth={currentPath === '/' ? 2.5 : 2} />
              <span>Accueil</span>
            </Link>
            <Link 
              to="/blog" 
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all ${
                currentPath.startsWith('/blog') 
                  ? 'font-medium text-foreground bg-muted' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <BookOpen className="w-4 h-4" strokeWidth={currentPath.startsWith('/blog') ? 2.5 : 2} />
              <span>Blog</span>
            </Link>
            
            <Dialog>
              <DialogTrigger className="flex items-center gap-2 px-4 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                <MessageCircle className="w-4 h-4" />
                <span>Contact</span>
              </DialogTrigger>
              <DialogContent className="max-w-2xl w-full">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-foreground">Contacter le Service Client</DialogTitle>
                  <DialogDescription>
                    Pour toute question ou demande d'assistance.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* Bouton CTA à droite - Style AgentFrancais */}
        {!isMobile && (
          <Button
            onClick={() => navigate('/payment')}
            className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md ${
              scrolled 
                ? 'bg-navy hover:bg-navy/90 text-white' 
                : 'bg-navy hover:bg-navy/90 text-white'
            }`}
          >
            <span>Je veux ce fichier</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
