import type { MetadataRoute } from "next";

import { portfolioProjects, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/privacy", "/consent"];
  const portfolioRoutes = portfolioProjects.map((project) => `/portfolio/${project.slug}`);

  return [...staticRoutes, ...portfolioRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
