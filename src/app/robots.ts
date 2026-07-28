import { MetadataRoute } from 'next';
import config from '@/config';

export default function robots(): MetadataRoute.Robots {
  let baseUrl = config.site.url || 'https://jaecoomedan.biz.id';
  if (!baseUrl.startsWith('http')) {
    baseUrl = `https://${baseUrl}`;
  }
  baseUrl = baseUrl.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Disallow crawling internal API endpoints
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
