// ============ ARTICLE INTERFACE ============
export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'PROMO' | 'REVIEW' | 'EV_TECH';

  image: string;
  imageHero?: string;
  imageAlt?: string;

  excerpt: string;
  content: string;

  author: {
    name: string;
    avatar?: string;
    bio?: string;
    role?: string;
    socialLinks?: {
      twitter?: string;
      linkedin?: string;
    };
  };

  tags: string[];
  readingTime: number;
  featured: boolean;

  seo?: {
    title?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };

  date: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;

  relatedArticles?: string[];
}
