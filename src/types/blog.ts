export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords: string;
  category: string;
  subCategory: string;
  galleryImageId: number;
  slug?: string;
}
