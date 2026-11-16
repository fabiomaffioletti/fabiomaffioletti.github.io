/* The site's two colour themes. Dark is the default; a visitor's explicit choice is kept in
   localStorage and applied to <html data-theme> before first paint. */

export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

export function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

/* Runs inline in <head>, before the body is parsed, so the page never paints in the wrong
   theme. Kept tiny and dependency free: it is a string, not bundled code. */
export const themeScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
