export type SiteRouteKey = "home" | "coaching" | "fractional-cto";

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
      "The professional curriculum and services of Fabio Maffioletti, Head of Engineering and technology leader.",
    published: true,
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    key: "coaching",
    path: "/coaching/",
    label: "Coaching",
    title: "Coaching",
    description: "Coaching services for engineering leaders.",
    published: false,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    key: "fractional-cto",
    path: "/fractional-cto/",
    label: "Fractional CTO",
    title: "Fractional CTO",
    description: "Fractional CTO services for growing engineering teams.",
    published: false,
    changeFrequency: "monthly",
    priority: 0.8,
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
