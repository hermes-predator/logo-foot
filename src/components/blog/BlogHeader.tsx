
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import CategoriesMenu from './CategoriesMenu';
import { ArrowRight } from 'lucide-react';

interface BlogHeaderProps {
  title?: string;
  showYellowBox?: boolean;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({ title = 'Blog', showYellowBox = true }) => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
          <div className="mt-4 md:mt-0">
            <CategoriesMenu />
          </div>
        </div>

        {showYellowBox && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-md p-4 my-6">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold">Aperçu de quelques collections de ⦗FRONT-CLOUD⦘~ Football.zip</h3>
              <p>Chaque collection contient tous les logos des clubs classés par pays, dans un dossier ZIP</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <img src="/lovable-uploads/e47a6810-ce15-4923-aaa6-7f01ad10481d.png" alt="Premier League Logo" className="w-full max-h-28 object-contain" />
                <img src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" alt="La Liga Logo" className="w-full max-h-28 object-contain" />
                <img src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png" alt="Serie A Logo" className="w-full max-h-28 object-contain" />
                <img src="/lovable-uploads/99e16506-d368-4b20-9efa-77f3c4870bf7.png" alt="Bundesliga Logo" className="w-full max-h-28 object-contain" />
                <img src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png" alt="Ligue 1 Logo" className="w-full max-h-28 object-contain" />
              </div>
              <Link to="/#pricing" className="mt-3">
                <Button variant="outline" className="flex items-center gap-2">
                  Voir les packs
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogHeader;
