"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { publishedRoutes } from "@/data/routes";

function normalizePath(path: string): string {
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

export default function SiteNav() {
  const pathname = usePathname();
  const current = normalizePath(pathname);

  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
        {publishedRoutes().map((route) => {
          const isCurrent = normalizePath(route.path) === current;

          return (
            <li key={route.path}>
              <Link
                href={route.path}
                aria-current={isCurrent ? "page" : undefined}
                className={`hover:text-accent hover:underline hover:underline-offset-4 ${
                  isCurrent
                    ? "font-semibold text-fg underline decoration-2 underline-offset-4"
                    : "text-muted no-underline"
                }`}
              >
                {route.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
