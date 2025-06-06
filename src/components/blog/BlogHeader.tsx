import React from 'react';

const BlogHeader = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog Football
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Découvrez l'univers passionnant du football à travers nos analyses, 
            guides et actualités sur les logos, équipes et compétitions.
          </p>
        </div>
        
        {/* CTA Section */}
        <div className="bg-white pt-8 pb-0 shadow-sm overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8">
            <input
              type="email"
              placeholder="Votre e-mail"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              S'abonner à la newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
