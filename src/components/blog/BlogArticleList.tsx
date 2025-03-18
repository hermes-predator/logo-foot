
import React from 'react';
import { BlogPost } from '../../types/blog';
import BlogArticleCard from './BlogArticleCard';

interface BlogArticleListProps {
  articles: BlogPost[];
}

const BlogArticleList = ({ articles }: BlogArticleListProps) => {
  // Ajout de logs pour le débogage
  console.log(`BlogArticleList rendering with ${articles.length} articles`);
  if (articles.length > 0) {
    console.log('First article:', {
      id: articles[0].id,
      title: articles[0].title,
      date: articles[0].date
    });
  }

  if (!articles || articles.length === 0) {
    return (
      <section className="text-center py-12">
        <p className="text-lg text-gray-600">Aucun article disponible pour le moment.</p>
      </section>
    );
  }

  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 px-4" aria-label="Liste des articles">
      {articles.map((post) => (
        <BlogArticleCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default BlogArticleList;
