
import { Home, BookOpen, FileArchive } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isBlogSection = location.pathname.includes('/blog');

  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-purple-100/80 via-purple-50/50 to-white/80 backdrop-blur-md border-b border-purple-100/20 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between gap-8">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition-colors"
        >
          <FileArchive className="w-6 h-6 text-purple-600" />
          <span className="font-semibold">logo-foot.com</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`flex items-center gap-2 transition-colors ${
              !isBlogSection 
                ? 'text-purple-700 font-medium'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Accueil</span>
          </Link>
          <Link 
            to="/blog" 
            className={`flex items-center gap-2 transition-colors ${
              isBlogSection 
                ? 'text-purple-700 font-medium'
                : 'text-gray-600 hover:text-purple-600'
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
