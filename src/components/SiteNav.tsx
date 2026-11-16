"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <header className="nav">
      <nav aria-label="Main">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <a className="cta" href="#contact">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
