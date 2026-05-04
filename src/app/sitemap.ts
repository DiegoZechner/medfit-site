import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.med-fit.com';

  const routes = [
    '',
    '/haarentfernung-dornbirn',
    '/gesichtsbehandlung-dornbirn',
    '/koerperformung-dornbirn',
    '/preise',
    '/faq',
    '/termin',
    '/ueber-uns'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
