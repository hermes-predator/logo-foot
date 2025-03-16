
import { BlogPost } from "@/types/blog";
import { technicalGuides } from "./technical-guides";
import { clubGuides } from "./club-guides";
import { historyArticles } from "./history-articles";
import { collectionArticles } from "./collection-articles";
import { productArticles } from "./product-articles";
import { trendsArticles } from "./trends-articles";

export const blogPosts: BlogPost[] = [
  ...productArticles,
  ...historyArticles,
  ...collectionArticles,
  ...technicalGuides,
  ...clubGuides,
  ...trendsArticles
].sort((a, b) => b.id - a.id);

export * from "./technical-guides";
export * from "./club-guides";
export * from "./history-articles";
export * from "./collection-articles";
export * from "./product-articles";
export * from "./trends-articles";
