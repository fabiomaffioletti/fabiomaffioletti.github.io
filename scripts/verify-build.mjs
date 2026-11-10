import path from "node:path";
import { access, readdir, readFile, stat } from "node:fs/promises";

import { profile } from "../src/data/profile.ts";
import { publishedRoutes, siteRoutes } from "../src/data/routes.ts";

const out = path.resolve(process.cwd(), "out");
const failures = [];

function check(name, condition, detail) {
  if (condition) {
    console.log(`PASS ${name}`);
  } else {
    failures.push(detail ? `${name}: ${detail}` : name);
    console.error(`FAIL ${name}${detail ? `: ${detail}` : ""}`);
  }
}

async function readOutput(relative) {
  return readFile(path.join(out, relative), "utf8");
}

async function exists(relative) {
  try {
    await access(path.join(out, relative));
    return true;
  } catch {
    return false;
  }
}

async function nonEmpty(relative) {
  try {
    const info = await stat(path.join(out, relative));
    return info.isFile() && info.size > 0;
  } catch {
    return false;
  }
}

function outputPathFor(routePath) {
  return routePath === "/" ? "index.html" : `${routePath.slice(1)}index.html`;
}

function absoluteUrl(routePath) {
  return `${profile.siteUrl}${routePath}`;
}

const home = await readOutput("index.html").catch(() => "");
check("home page is exported", home.length > 0, "out/index.html is missing");

if (home) {
  const content = [
    "Fabio Maffioletti",
    "Head of Engineering",
    "Summary",
    "Professional experience",
    "Tidio",
    "Casavo Management Spa",
    "eBay Inc",
    "Skebby Mobile Solutions srl",
    "Lumata / Buongiorno Spa",
    "Vidiemme Consulting srl",
    "Education and courses",
    "Politecnico di Milano",
    "Escuela Europea de Coaching",
    "Remote-how",
    "Certified Secure",
    "Management and technical skills",
    "System design, Java, Spring",
    "Personal projects and links",
    "JSONDoc",
    "MissPlitty",
    "Resources for EMs",
    "Additional information",
    "Languages: Italian (native), English (fluent)",
    "Avid reader.",
    "Skip to content",
    "aria-label=\"Primary\"",
    "id=\"main\"",
  ];

  for (const text of content) {
    check(`home page contains "${text}"`, home.includes(text));
  }

  const metadata = [
    [
      "title",
      /<title>[^<]*Fabio Maffioletti[^<]*<\/title>/,
      "missing <title> with the person's name",
    ],
    [
      "meta description",
      /<meta name="description" content="[^"]+"/,
      "missing meta description",
    ],
    [
      "Open Graph title",
      /<meta property="og:title" content="[^"]+"/,
      "missing og:title",
    ],
    [
      "Open Graph image",
      /<meta property="og:image" content="[^"]+"/,
      "missing og:image",
    ],
    [
      "Twitter card",
      /<meta name="twitter:card" content="[^"]+"/,
      "missing twitter:card",
    ],
    [
      "canonical URL",
      /<link rel="canonical" href="[^"]+"/,
      "missing canonical link",
    ],
    ["JSON-LD", /<script type="application\/ld\+json">/, "missing JSON-LD"],
    ["Person structured data", /"@type":"Person"/, "JSON-LD is not a Person"],
  ];

  for (const [name, pattern, detail] of metadata) {
    check(`home page has ${name}`, pattern.test(home), detail);
  }

  check(
    "home page has one h1",
    (home.match(/<h1[\s>]/g) ?? []).length === 1,
  );
  check(
    "home page marks the current navigation item",
    home.includes('aria-current="page"'),
  );
}

for (const route of publishedRoutes()) {
  const file = outputPathFor(route.path);
  const html = await readOutput(file).catch(() => "");
  const url = absoluteUrl(route.path);

  check(`route ${route.path} is exported`, html.length > 0, `${file} is missing`);

  if (!html) {
    continue;
  }

  check(`route ${route.path} has its title`, html.includes(route.title));
  check(
    `route ${route.path} has a meta description`,
    /<meta name="description" content="[^"]+"/.test(html),
  );
  check(
    `route ${route.path} has the correct canonical`,
    html.includes(`<link rel="canonical" href="${url}"`),
    `expected ${url}`,
  );
  check(
    `route ${route.path} has the correct og:url`,
    html.includes(`<meta property="og:url" content="${url}"`),
    `expected ${url}`,
  );
  check(
    `route ${route.path} has an og:image`,
    /<meta property="og:image" content="[^"]+"/.test(html),
  );
  check(
    `route ${route.path} has one h1`,
    (html.match(/<h1[\s>]/g) ?? []).length === 1,
  );
  check(
    `route ${route.path} is linked from the navigation`,
    html.includes(`href="${route.path}"`),
  );
}

for (const route of siteRoutes.filter((item) => !item.published)) {
  const html = await readOutput(outputPathFor(route.path)).catch(() => "");

  check(
    `unpublished route ${route.path} is exported`,
    html.length > 0,
    `${outputPathFor(route.path)} is missing`,
  );
  check(
    `unpublished route ${route.path} is noindex`,
    html.includes("noindex"),
  );
}

try {
  const staticDir = path.join(out, "_next/static");
  const files = (await readdir(staticDir, { recursive: true }))
    .filter((file) => file.endsWith(".css"))
    .map((file) => path.join(staticDir, file));
  const css = (
    await Promise.all(files.map((file) => readFile(file, "utf8")))
  ).join("\n");
  check("Tailwind CSS is generated", css.includes("--tw-"));
  check("Bootstrap CSS is absent", !css.includes("--bs-"));
} catch (error) {
  check(
    "Tailwind CSS is generated",
    false,
    error instanceof Error ? error.message : String(error),
  );
}

const sitemap = await readOutput("sitemap.xml").catch(() => "");
check("sitemap is exported", sitemap.length > 0);

if (sitemap) {
  for (const route of publishedRoutes()) {
    check(
      `sitemap lists ${route.path}`,
      sitemap.includes(absoluteUrl(route.path)),
    );
  }

  for (const route of siteRoutes.filter((item) => !item.published)) {
    check(
      `sitemap excludes unpublished route ${route.path}`,
      !sitemap.includes(absoluteUrl(route.path)),
    );
  }

  check(
    "sitemap lists the privacy page",
    sitemap.includes(
      `${profile.siteUrl}/projects/android/missplitty/privacy-policy/`,
    ),
  );
}

const robots = await readOutput("robots.txt").catch(() => "");
check("robots file is exported", robots.length > 0);
if (robots) {
  check("robots file points to the sitemap", robots.includes("Sitemap:"));
}

check("custom domain file is exported", await exists("CNAME"));
if (await exists("CNAME")) {
  const cname = (await readOutput("CNAME")).trim();
  check(
    "custom domain is correct",
    cname === "www.fabiomaffioletti.me",
    `got "${cname}"`,
  );
}

check(".nojekyll marker is exported", await exists(".nojekyll"));
check("favicon is exported", await nonEmpty("favicon.ico"));
check("Open Graph image is exported", await nonEmpty("og-image.png"));

const privacyPath = "projects/android/missplitty/privacy-policy/index.html";
check("privacy page is exported", await exists(privacyPath));
if (await exists(privacyPath)) {
  const privacy = await readOutput(privacyPath);
  check(
    "privacy page contains its title",
    privacy.includes("MissPlitty Privacy Policy"),
  );
}

if (failures.length > 0) {
  console.error(`\n${failures.length} build verification check(s) failed.`);
  process.exit(1);
}

console.log("\nAll build verification checks passed.");
