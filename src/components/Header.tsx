import { Menu, ChevronRight, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from './ContactForm';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinkClass = (isActive: boolean) => 
    `text-sm font-medium transition-colors ${
      isActive 
        ? 'text-foreground' 
        : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-2 px-4 sm:px-6' 
          : 'py-5 px-4 sm:px-6'
      }`}
    >
      <nav 
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled 
            ? 'max-w-4xl bg-white/95 backdrop-blur-md shadow-lg border border-border/50 rounded-full px-6 py-2.5' 
            : 'container bg-transparent px-0 py-0'
        }`}
      >
        {/* Logo + Separator + Nav Links */}
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="hover:opacity-80 transition-opacity"
          >
            <Logo />
          </Link>
          
          {/* Separator line */}
          <div className="hidden md:block h-6 w-px bg-border"></div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className={navLinkClass(currentPath === '/')}>
                Accueil
              </Link>
              <Link to="/blog" className={navLinkClass(currentPath.startsWith('/blog'))}>
                Blog
              </Link>
              <Dialog>
                <DialogTrigger className={navLinkClass(false)}>
                  Contact
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
              <button onClick={scrollToFAQ} className={navLinkClass(false)}>
                FAQ
              </button>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            aria-label="Menu" 
            className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}

        {/* Mobile Menu Dropdown */}
        {isMobile && mobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-white shadow-xl z-50 border border-border rounded-2xl animate-in fade-in slide-in-from-top-2 overflow-hidden">
            <div className="py-3 flex flex-col">
              <Link 
                to="/" 
                className={`px-4 py-3 text-sm ${currentPath === '/' ? 'font-medium bg-lime/10 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
              >
                Accueil
              </Link>
              <Link 
                to="/blog" 
                className={`px-4 py-3 text-sm ${currentPath.startsWith('/blog') ? 'font-medium bg-lime/10 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
              >
                Blog
              </Link>
              <Dialog>
                <DialogTrigger className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted text-left">
                  Contact
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
              <button 
                onClick={scrollToFAQ}
                className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted text-left"
              >
                FAQ
              </button>
            </div>
          </div>
        )}

        {/* CTA Button */}
        {!isMobile && (
          <Button
            onClick={() => navigate('/payment')}
            className="flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full bg-navy hover:bg-navy/90 text-white shadow-sm hover:shadow-md transition-all"
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
