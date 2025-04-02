
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileArchive } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg py-3 px-4 md:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <Link to="/" className="group flex items-center">
              <span className="hidden md:inline-block bg-white/20 p-2 rounded-full mr-3 animate-pulse group-hover:bg-white/30 transition-colors">
                <Download className="h-5 w-5 text-white animate-bounce" />
              </span>
              <p className="text-white font-medium text-sm md:text-base hover:text-white/90 transition-colors">
                <span className="font-bold">⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎𝐔𝐃⦘~</span> 𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩 : +8 600 logos de foot à télécharger
              </p>
            </Link>
          </div>
          
          <div className="flex items-center">
            <Button 
              asChild
              variant="secondary" 
              className="bg-white hover:bg-gray-100 px-4 py-2 text-sm md:text-base group relative"
              size="sm"
            >
              <Link to="/" className="flex items-center gap-2">
                <span className="absolute -top-3 -left-2 bg-blue-600 text-white px-2 py-0.5 rounded-tr-lg rounded-bl-lg text-xs flex items-center gap-1 shadow-sm animate-fast-blink">
                  <FileArchive className="h-3 w-3 text-white" />
                  ZIP
                </span>
                <span className="text-blue-600">Télécharger maintenant</span>
                <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
