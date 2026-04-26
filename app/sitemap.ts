import type { MetadataRoute } from 'next'

const baseUrl = 'https://ciscoplumbing.com'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: '2026-04-26',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
