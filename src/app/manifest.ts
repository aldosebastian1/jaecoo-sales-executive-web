import { MetadataRoute } from 'next';
import config from '@/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.site.name,
    short_name: 'Jaecoo Medan',
    description: config.site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0F7A83',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
