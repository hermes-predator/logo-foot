
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords?: string;
  category: 'logos' | 'history' | 'technical' | 'analysis';
}
