
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg shadow-sm">
      <div className="flex items-start space-x-4">
        <AlertTriangle className="h-7 w-7 text-amber-600 flex-shrink-0" />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            🚧 Blog en Construction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Notre section blog est actuellement en cours de développement. Nous travaillons dur pour vous proposer du contenu de qualité sur l'univers des logos de football. Revenez bientôt pour découvrir nos analyses, histoires et guides exclusifs !
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
