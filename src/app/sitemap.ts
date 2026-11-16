import type { MetadataRoute } from "next";

import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${profile.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["engineering-leadership", "executive-coaching", "fractional-cto"].map(
      (page) => ({
        url: `${profile.siteUrl}/${page}/`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }),
    ),
    {
      url: `${profile.siteUrl}/projects/android/missplitty/privacy-policy/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
