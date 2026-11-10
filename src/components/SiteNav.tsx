"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { publishedRoutes } from "@/data/routes";

const anchors = [
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

function normalizePath(path: string): string {
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

export default function SiteNav() {
  const pathname = usePathname();
  const current = normalizePath(pathname);
  const items = [
    ...publishedRoutes().map((route) => ({
      href: route.path,
      label: route.label,
    })),
    ...anchors,
  ];

  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
        {items.map((item) => {
          const isCurrent =
            item.href.startsWith("/#") === false &&
            normalizePath(item.href) === current;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`hover:text-accent hover:underline hover:underline-offset-4 ${
                  isCurrent
                    ? "font-semibold text-fg underline decoration-2 underline-offset-4"
                    : "text-muted no-underline"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
