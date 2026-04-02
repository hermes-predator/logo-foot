import { Menu, ChevronsRight, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const isBlog = currentPath.startsWith('/blog');

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (currentPath === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
            : isBlog
              ? 'container bg-white/95 backdrop-blur-md shadow-sm border border-border/50 rounded-full px-6 py-2.5'
              : 'container bg-transparent px-0 py-0'
        }`}
      >
        {/* Logo + Separator + Nav Links */}
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="hover:opacity-80 transition-opacity"
            onClick={handleHomeClick}
          >
            <Logo />
          </Link>
          
          {/* Separator line */}
          <div className="hidden md:block h-6 w-px bg-border"></div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className={navLinkClass(currentPath === '/')} onClick={handleHomeClick}>
                Accueil
              </Link>
              <Link to="/blog" className={navLinkClass(currentPath.startsWith('/blog'))}>
                Blog
              </Link>
              {!isBlog && (
                <>
                  <button onClick={() => scrollToSection('faq-section')} className={navLinkClass(false)}>
                    FAQ
                  </button>
                  <button onClick={() => scrollToSection('faq-section')} className={navLinkClass(false)}>
                    Contact
                  </button>
                </>
              )}
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
                onClick={handleHomeClick}
              >
                Accueil
              </Link>
              <Link 
                to="/blog" 
                className={`px-4 py-3 text-sm ${currentPath.startsWith('/blog') ? 'font-medium bg-lime/10 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
              >
                Blog
              </Link>
              {!isBlog && (
                <>
                  <button 
                    onClick={() => scrollToSection('faq-section')}
                    className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted text-left"
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq-section')}
                    className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted text-left"
                  >
                    Contact
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        {!isMobile && (
          <Button
            onClick={() => navigate('/payment')}
            className="flex items-center gap-3 font-medium px-6 py-2.5 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Je veux ce fichier</span>
            <ChevronsRight className="w-5 h-5" />
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
