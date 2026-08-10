import type { MetadataRoute } from "next";

import { siteExamples } from "@/config/examples";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/privacy", "/consent"];
  const exampleRoutes = siteExamples.map((example) => `/examples/${example.slug}`);

  return [...staticRoutes, ...exampleRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
