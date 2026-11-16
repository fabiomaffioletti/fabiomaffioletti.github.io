/* The site's two colour themes. A visitor's explicit choice is kept in localStorage; without
   one, the site follows the operating system's light or dark setting. Dark is the fallback
   when neither is known. The theme is applied to <html data-theme> before first paint. */

export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

export const LIGHT_QUERY = "(prefers-color-scheme: light)";

export function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export function systemTheme(): Theme {
  return window.matchMedia?.(LIGHT_QUERY).matches ? "light" : "dark";
}

/* Runs inline in <head>, before the body is parsed, so the page never paints in the wrong
   theme. Kept tiny and dependency free: it is a string, not bundled code. */
export const themeScript = `(function(){var d=document.documentElement,t;try{t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})}catch(e){}if(t!=="light"&&t!=="dark")t=window.matchMedia&&window.matchMedia(${JSON.stringify(LIGHT_QUERY)}).matches?"light":"dark";d.setAttribute("data-theme",t)})()`;
