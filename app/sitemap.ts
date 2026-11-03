import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://getrecaply.com/privacy' },
    { url: 'https://getrecaply.com/terms' },
    {
      url: 'https://getrecaply.com/',
    },
  ];
}
