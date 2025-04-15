
import { FolderClosed } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header 
      className={`w-full py-4 px-6 backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 shadow-sm' 
          : 'bg-white/50 border-purple-100/20'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-8">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
        >
          <FolderClosed 
            className="w-6 h-6 text-purple-600 fill-purple-100" 
            strokeWidth={1.5}
          />
          <span className="font-medium">logo-foot.com</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`flex items-center gap-2 transition-all relative px-3 py-2 rounded-md ${
              isActive('/') 
                ? 'font-medium bg-gray-100/80' 
                : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            <Home className={`w-4 h-4 ${isActive('/') ? 'text-gray-800' : ''}`} />
            <span>Accueil</span>
          </Link>
          <Link 
            to="/blog" 
            className={`relative flex items-center gap-2 transition-all px-3 py-2 rounded-md ${
              isActive('/blog') 
                ? 'font-medium bg-gray-100/80' 
                : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${isActive('/blog') ? 'text-gray-800' : ''}`} />
            <span>Blog</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

