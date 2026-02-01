
import { BookOpen, Home, Menu, MessageCircle, Download, ChevronRight } from "lucide-react";
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
import FAQDialog from './footer/FAQDialog';

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
      className={`w-full py-3 sm:py-4 px-4 sm:px-6 backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-sm border-border' 
          : 'bg-white border-border/50'
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
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-b border-border animate-in fade-in slide-in-from-top-5">
                <div className="container mx-auto py-4 flex flex-col space-y-1">
                  <Link 
                    to="/" 
                    className={`flex items-center gap-3 transition-all px-4 py-3 rounded-xl ${
                      currentPath === '/' 
                        ? 'font-medium bg-lime-50 text-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Home className="w-4 h-4" strokeWidth={currentPath === '/' ? 2.5 : 2} />
                    <span>Accueil</span>
                  </Link>
                  <Link 
                    to="/blog" 
                    className={`flex items-center gap-3 transition-all px-4 py-3 rounded-xl ${
                      currentPath.startsWith('/blog') 
                        ? 'font-medium bg-lime-50 text-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" strokeWidth={currentPath.startsWith('/blog') ? 2.5 : 2} />
                    <span>Blog</span>
                  </Link>
                  
                  {/* Divider */}
                  <div className="border-t border-border my-3"></div>
                  
                  {/* Footer links in mobile menu */}
                  <Dialog>
                    <DialogTrigger className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-all text-left">
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
                  <FAQDialog variant="header" />
                </div>
              </div>
            )}
          </>
        ) : (
        <div className="flex items-center gap-1">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all ${
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
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all ${
                currentPath.startsWith('/blog') 
                  ? 'font-medium text-foreground bg-muted' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <BookOpen className="w-4 h-4" strokeWidth={currentPath.startsWith('/blog') ? 2.5 : 2} />
              <span>Blog</span>
            </Link>
            
            <FAQDialog variant="header" />
            
            <Dialog>
              <DialogTrigger className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
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
            className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-navy font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
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
