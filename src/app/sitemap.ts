import type { MetadataRoute } from "next";

import { profile } from "@/data/profile";
import { publishedRoutes } from "@/data/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = publishedRoutes().map((route) => ({
    url: `${profile.siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [
    ...pages,
    {
      url: `${profile.siteUrl}/projects/android/missplitty/privacy-policy/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
