import { MetadataRoute } from 'next';
import config from '@/config';
import { articlesData } from '@/data/artikel';

export default function sitemap(): MetadataRoute.Sitemap {
  let baseUrl = config.site.url || 'https://jaecoomedan.biz.id';
  if (!baseUrl.startsWith('http')) {
    baseUrl = `https://${baseUrl}`;
  }
  // Remove trailing slash if any
  baseUrl = baseUrl.replace(/\/$/, '');

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ];

  // Dynamic routes for articles
  const dynamicArticleRoutes = articlesData.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.createdAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicArticleRoutes];
}
