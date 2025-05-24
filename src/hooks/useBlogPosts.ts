
import { useState, useMemo } from 'react';
import { blogPosts } from '../data/blog';
import { BlogPost, BlogCategory } from '../types/blog';

export const useBlogPosts = (category?: string | null) => {
  const [isLoading, setIsLoading] = useState(false);

  const filteredPosts = useMemo(() => {
    if (!category) return blogPosts;
    return blogPosts.filter(post => post.category === category);
  }, [category]);

  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredPosts]);

  return {
    posts: sortedPosts,
    isLoading,
    totalPosts: sortedPosts.length
  };
};
