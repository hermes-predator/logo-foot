
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "L'importance de la sécurité dans le cloud computing",
    excerpt: "Dans un monde de plus en plus connecté, la sécurité des données dans le cloud devient primordiale. Découvrez les meilleures pratiques et les enjeux essentiels.",
    date: "2024-02-15",
  },
  {
    id: 2,
    title: "Les tendances DevOps en 2024",
    excerpt: "Le DevOps continue d'évoluer rapidement. Explorons ensemble les nouvelles tendances et technologies qui façonnent l'avenir du développement logiciel.",
    date: "2024-02-10",
  },
  {
    id: 3,
    title: "Comment optimiser ses déploiements cloud",
    excerpt: "Un guide pratique pour améliorer vos processus de déploiement et maximiser l'efficacité de vos applications dans le cloud.",
    date: "2024-02-05",
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Articles</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-purple-100/20"
          >
            <time className="text-sm text-gray-500">{post.date}</time>
            <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            <Link 
              to={`/blog/${post.id}`} 
              className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1"
            >
              Lire la suite
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
