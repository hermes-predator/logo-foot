
import React from 'react';
import { BlogPost } from '../../types/blog';
import { motion } from 'framer-motion';

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent = ({ post }: BlogContentProps) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <time className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString('fr-FR')}
        </time>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </motion.article>
  );
};

export default BlogContent;
