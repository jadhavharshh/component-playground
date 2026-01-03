import { MetadataRoute } from "next"

const baseUrl = "https://componentry.fun"

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/preview`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  const componentPages = [
    "flight-status-card",
    "border-beam",
    "spotlight-card",
    "circuit-board",
    "command-menu",
    "dither-gradient",
    "liquid-blob",
    "noise-texture",
  ]

  const componentSitemap: MetadataRoute.Sitemap = componentPages.map((component) => ({
    url: `${baseUrl}/docs/components/${component}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...componentSitemap]
}
