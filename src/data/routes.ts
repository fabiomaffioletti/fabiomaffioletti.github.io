export type SiteRouteKey =
  | "home"
  | "curriculum"
  | "coaching"
  | "fractional-cto"
  | "contacts";

export interface SiteRoute {
  key: SiteRouteKey;
  path: string;
  label: string;
  title: string;
  description: string;
  published: boolean;
  changeFrequency: "monthly" | "yearly";
  priority: number;
}

export const siteRoutes: SiteRoute[] = [
  {
    key: "home",
    path: "/",
    label: "Home",
    title:
      "Fabio Maffioletti – Head of Engineering | Senior Engineering Manager | Technology Leader",
    description:
      "Technology leadership, coaching, and fractional CTO services from Fabio Maffioletti.",
    published: true,
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    key: "curriculum",
    path: "/curriculum/",
    label: "Curriculum",
    title: "Curriculum",
    description:
      "Professional experience, education, skills, and links for Fabio Maffioletti.",
    published: true,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    key: "coaching",
    path: "/coaching/",
    label: "Coaching",
    title: "Coaching",
    description: "Coaching services for engineering leaders.",
    published: true,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    key: "fractional-cto",
    path: "/fractional-cto/",
    label: "Fractional CTO",
    title: "Fractional CTO",
    description: "Fractional CTO services for growing engineering teams.",
    published: true,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    key: "contacts",
    path: "/contacts/",
    label: "Contacts",
    title: "Contacts",
    description: "Contact Fabio Maffioletti by email or LinkedIn.",
    published: true,
    changeFrequency: "yearly",
    priority: 0.6,
  },
];

export function publishedRoutes(): SiteRoute[] {
  return siteRoutes.filter((route) => route.published);
}

export function routeByKey(key: SiteRouteKey): SiteRoute {
  const route = siteRoutes.find((item) => item.key === key);

  if (!route) {
    throw new Error(`Unknown route: ${key}`);
  }

  return route;
}
