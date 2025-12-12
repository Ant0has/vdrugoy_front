import { MetadataRoute } from 'next'
import { hubService } from '@/shared/services/hub.service'
import { destinationService } from '@/shared/services/destination.service'

const BASE_URL = 'https://vdrugoygorod.ru'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/kontakty`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/oferta`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Получаем все хабы
  const hubs = await hubService.getAll()
  const hubPages: MetadataRoute.Sitemap = hubs.map((hub) => ({
    url: `${BASE_URL}/${hub.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Получаем все направления
  const destinations = await destinationService.getAll()
  const destinationPages: MetadataRoute.Sitemap = destinations.map((destination) => ({
    url: `${BASE_URL}/${destination.hub?.slug}/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...hubPages, ...destinationPages]
}
