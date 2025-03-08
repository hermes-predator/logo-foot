
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto py-20 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-purple-600 hover:text-purple-700">
            Retourner à la liste des articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 px-4 max-w-3xl">
      <article className="prose prose-purple lg:prose-lg mx-auto">
        <Link 
          to="/blog"
          className="text-purple-600 hover:text-purple-700 no-underline mb-8 inline-flex items-center gap-1"
        >
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
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Retour aux articles
        </Link>
        <time className="text-sm text-gray-500 block mt-4">{post.date}</time>
        <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-8">{post.title}</h1>
        <div className="whitespace-pre-wrap text-gray-600">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
