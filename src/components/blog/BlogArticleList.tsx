
import React from 'react';
import { BlogPost } from '../../types/blog';
import BlogArticleCard from './BlogArticleCard';

interface BlogArticleListProps {
  articles: BlogPost[];
}

const BlogArticleList = ({ articles }: BlogArticleListProps) => {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12" aria-label="Liste des articles">
      {articles.map((post) => (
        <BlogArticleCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default BlogArticleList;
