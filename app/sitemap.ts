import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.getrecaply.com/privacy' },
    { url: 'https://www.getrecaply.com/terms' },
    { url: 'https://www.getrecaply.com/faq' },
    { url: 'https://www.getrecaply.com/how-it-works' },
    { url: 'https://www.getrecaply.com/why-we-save-articles-and-never-read-them' },
    {
      url: 'https://www.getrecaply.com',
    },
  ];
}
