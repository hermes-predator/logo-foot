
import { Home, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white/50 backdrop-blur-md border-b border-purple-100/20 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-center gap-8">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Accueil</span>
        </Link>
        <Link 
          to="/blog" 
          className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Blog</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
