"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/engineering-leadership/", label: "Engineering Leadership" },
  { href: "/executive-coaching/", label: "Executive Coaching" },
  { href: "/fractional-cto/", label: "Fractional CTO" },
];

function normalise(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export default function SiteNav() {
  const current = normalise(usePathname() ?? "/");

  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-end gap-x-8 gap-y-3 border-b border-line bg-canvas/80 px-gutter py-4 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="flex flex-wrap items-center gap-x-7 gap-y-1.5 text-[.95rem]"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current === link.href ? "page" : undefined}
            className="text-muted no-underline hover:text-fg aria-[current=page]:text-fg"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="#contact"
          className="rounded-[10px] bg-accent px-4 py-1.5 text-on-accent no-underline hover:text-on-accent hover:brightness-110"
        >
          Get in touch
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
