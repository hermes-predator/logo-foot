
import React, { useState, useEffect } from 'react';
import { Trophy, Search, ChevronRight, Users, Folder, Package, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OptimizedImage } from '../ui/optimized-image';
import BlogImage from './BlogImage';
import { categories, coursesData } from '@/constants/countryData';

// Fade in animation for elements
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

interface BlogHeaderProps {
  title?: string;
  category?: string;
  animateTitle?: boolean;
  imageId?: string | number;
}

const BlogHeader = ({ title, category, animateTitle = true, imageId }: BlogHeaderProps) => {
  // If we have a title from props use it, otherwise use default
  const headerTitle = title || "Logos de Football en PNG : Téléchargements Gratuits";
  
  // Determine if this is the main blog page
  const isMainBlogPage = !title || title === "Logos de Football en PNG : Téléchargements Gratuits";
  
  // State for the search input
  const [searchText, setSearchText] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Determine category info for styling
  const categoryInfo = category ? categories.find(cat => cat.id === category) : null;
  const categoryColor = categoryInfo?.color || 'blue';
  
  // Background gradient and text colors based on category
  const getBgGradient = () => {
    if (category === 'logos') return 'from-blue-900 via-blue-800 to-blue-900';
    if (category === 'analysis') return 'from-emerald-900 via-emerald-800 to-emerald-900';
    if (category === 'technical') return 'from-violet-900 via-violet-800 to-violet-900';
    if (category === 'history') return 'from-amber-900 via-amber-800 to-amber-900';
    if (category === 'pixel-art') return 'from-fuchsia-900 via-fuchsia-800 to-fuchsia-900';
    return 'from-gray-900 via-gray-800 to-gray-900';
  };
  
  // Text colors that complement the background
  const getTextColor = () => {
    if (category === 'logos') return 'text-blue-400';
    if (category === 'analysis') return 'text-emerald-400';
    if (category === 'technical') return 'text-violet-400';
    if (category === 'history') return 'text-amber-400';
    if (category === 'pixel-art') return 'text-fuchsia-400';
    return 'text-gray-400';
  };
  
  // For highlighting the category name
  const getCategoryHighlight = () => {
    if (category === 'logos') return 'text-blue-300';
    if (category === 'analysis') return 'text-emerald-300';
    if (category === 'technical') return 'text-violet-300';
    if (category === 'history') return 'text-amber-300';
    if (category === 'pixel-art') return 'text-fuchsia-300';
    return 'text-gray-300';
  };
  
  // Button background that complements the header
  const getButtonBg = () => {
    if (category === 'logos') return 'bg-blue-600 hover:bg-blue-700';
    if (category === 'analysis') return 'bg-emerald-600 hover:bg-emerald-700';
    if (category === 'technical') return 'bg-violet-600 hover:bg-violet-700';
    if (category === 'history') return 'bg-amber-600 hover:bg-amber-700';
    if (category === 'pixel-art') return 'bg-fuchsia-600 hover:bg-fuchsia-700';
    return 'bg-gray-600 hover:bg-gray-700';
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
      }
    })
  };
  
  // Handler for search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  
  // Handler for search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchText);
    setSearchText('');
  };

  // Reset search when navigating
  useEffect(() => {
    setSearchText('');
  }, [title]);

  return (
    <header className={`relative w-full overflow-hidden bg-gradient-to-b ${getBgGradient()} text-white`}>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Header content */}
      <div className="relative z-10 container mx-auto px-4 py-12 pt-16 md:py-16 md:pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs navigation */}
          <nav className="mb-5 flex items-center text-sm text-gray-300">
            <Link to="/" className="hover:text-white transition duration-200">Accueil</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link to="/blog" className="hover:text-white transition duration-200">Blog</Link>
            {category && (
              <>
                <ChevronRight className="h-4 w-4 mx-1" />
                <Link to={`/blog/category/${category}`} className={`${getCategoryHighlight()} hover:text-white transition duration-200`}>
                  {categoryInfo?.name || category}
                </Link>
              </>
            )}
            {title && !isMainBlogPage && (
              <>
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="text-gray-300/80 truncate max-w-[200px] md:max-w-xs">
                  {title.replace(/\*\*([^*]+)\*\*/g, '$1')}
                </span>
              </>
            )}
          </nav>
          
          {/* Title section */}
          {animateTitle ? (
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              dangerouslySetInnerHTML={{ 
                __html: headerTitle.replace(/\*\*([^*]+)\*\*/g, '<span class="text-yellow-400">$1</span>') 
              }}
            />
          ) : (
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left leading-tight"
              dangerouslySetInnerHTML={{ 
                __html: headerTitle.replace(/\*\*([^*]+)\*\*/g, '<span class="text-yellow-400">$1</span>') 
              }}
            />
          )}
          
          {/* Search form */}
          {isMainBlogPage && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <div className="mt-8 mb-10 max-w-xl mx-auto md:mx-0">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher un logo de club ou sélection..."
                    value={searchText}
                    onChange={handleSearchChange}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className={`w-full px-5 py-3 rounded-lg pl-12 bg-gray-900/80 border ${
                      searchFocused ? 'border-white/40 ring-2 ring-blue-500/30' : 'border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition duration-200 placeholder-gray-400`}
                  />
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <button
                    type="submit"
                    className={`${getButtonBg()} px-6 py-3 rounded-r-lg absolute right-0 top-0 h-full text-white font-medium transition duration-200`}
                  >
                    Rechercher
                  </button>
                </form>
              </div>
              
              {/* Main blog featured content */}
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Explorer les Logos de Football</h2>
                    <p className="text-gray-300 mb-4">
                      Notre blog propose un large éventail de logos PNG de clubs et sélections nationales, classés par pays et compétitions. Téléchargez gratuitement vos logos préférés en haute qualité.
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-400 mr-2" />
                        <span className="text-gray-300">8600+ Logos</span>
                      </div>
                      <div className="flex items-center">
                        <Folder className="h-5 w-5 text-amber-400 mr-2" />
                        <span className="text-gray-300">66 Pays</span>
                      </div>
                    </div>
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                      <h3 className="flex items-center text-yellow-300 font-medium mb-2">
                        <Package className="h-5 w-5 mr-2" />
                        <span>Collection Complète</span>
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Téléchargez notre collection complète de 8600+ logos en PNG avec une qualité optimale, organisée par pays et compétitions.
                      </p>
                      <div className="mt-3">
                        <a href="#collection" className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger la Collection
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Preview images showing folders from different countries */}
                  <div className="mt-6 p-3 bg-gray-800/95 rounded-lg border border-gray-700 shadow-inner mx-auto max-w-4xl">
                    <h4 className="text-center text-white/90 text-sm mb-3 flex items-center justify-center gap-2">
                      <Trophy className="h-4 w-4 text-amber-400" />
                      <span>Aperçu de la collection par pays</span>
                    </h4>
                    
                    {/* Grid for the two images side by side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First image */}
                      <div className="border border-gray-700/50 rounded-md overflow-hidden">
                        <OptimizedImage 
                          src="/lovable-uploads/a3bf3c12-7202-4344-b061-7fe12f1ca116.png" 
                          alt="Aperçu des dossiers de logos de football - Set 1" 
                          width={600}
                          height={600}
                          className="w-full h-auto"
                          priority={true}
                        />
                      </div>
                      
                      {/* Second image */}
                      <div className="border border-gray-700/50 rounded-md overflow-hidden">
                        <OptimizedImage 
                          src="/lovable-uploads/e4fdc9fa-6ed2-476a-bf78-ff7c416da34d.png" 
                          alt="Aperçu des dossiers de logos de football - Set 2" 
                          width={600}
                          height={600}
                          className="w-full h-auto"
                          priority={true}
                        />
                      </div>
                    </div>
                    
                    <p className="text-center text-gray-300 text-xs mt-3">66 pays disponibles avec plus de 8600 logos au total en haute qualité</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Category specific content for non-main blog pages */}
          {!isMainBlogPage && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <p className={`text-lg ${getTextColor()} mb-8 max-w-3xl`}>
                {categoryInfo?.description || ''}
              </p>
              
              {/* Display the blog post image if available */}
              {imageId && (
                <div className="mt-4 mb-10">
                  <BlogImage 
                    src={`/api/images/${imageId}`}
                    alt={title || 'Image de l\'article de blog'}
                    priority={true}
                    isDefault={true}
                  />
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </header>
  );
};
export default BlogHeader;
