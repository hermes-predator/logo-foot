
import { Home, BookOpen, FileArchive } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Fonction pour déterminer si le lien est actif
  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  return (
    <header className="w-full py-4 px-6 bg-white/50 backdrop-blur-md border-b border-purple-100/20 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between gap-8">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
        >
          <FileArchive className="w-6 h-6 text-purple-600" />
          <span className="font-medium">logo-foot.com</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`flex items-center gap-2 transition-colors ${
              isActive('/') 
                ? 'text-purple-600 font-medium' 
                : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Accueil</span>
          </Link>
          <Link 
            to="/blog" 
            className={`relative flex items-center gap-2 transition-colors ${
              isActive('/blog') 
                ? 'text-purple-600 font-medium' 
                : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Blog</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
