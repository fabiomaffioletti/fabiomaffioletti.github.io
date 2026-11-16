"use client";

import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";

import {
  LIGHT_QUERY,
  readStoredTheme,
  systemTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

/* The theme lives on <html data-theme>, set before first paint by the script in the root
   layout. This button reads it from there and flips it, saving the visitor's choice. */

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[1.15rem]">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M5.3 18.7l1.55-1.55M17.15 6.85l1.55-1.55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[1.1rem]">
      <path
        d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  /* The static HTML is rendered dark (the fallback); after hydration this follows <html data-theme>. */
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "dark" as Theme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  /* In development React resets <html> attributes on its Strict Mode remount, clearing the
     one the inline script set. Re-apply it; a no-op in production. */
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = readStoredTheme() ?? systemTheme();
  }, []);

  /* Until the visitor picks a theme, follow the operating system when its setting changes. */
  useEffect(() => {
    const media = window.matchMedia?.(LIGHT_QUERY);
    if (!media) return;
    const follow = () => {
      if (!readStoredTheme()) document.documentElement.dataset.theme = systemTheme();
    };
    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, []);

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* Storage may be blocked; the switch still works for this page view. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="grid size-9 cursor-pointer place-items-center rounded-[10px] border border-line-strong bg-transparent text-muted hover:border-fg hover:text-fg motion-safe:transition-colors"
    >
      {/* Show the theme you would switch to: a sun in dark mode, a moon in light mode. CSS picks
          the icon from <html data-theme>, so it is right before hydration too. */}
      <span className="contents in-data-[theme=light]:hidden">
        <SunIcon />
      </span>
      <span className="hidden in-data-[theme=light]:contents">
        <MoonIcon />
      </span>
    </button>
  );
}
