import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot'],
      allow: '/',
    },
    sitemap: 'https://www.med-fit.com/sitemap.xml',
  };
}
