import path from "node:path";
import { access, readFile, stat } from "node:fs/promises";

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

let home = "";
try {
  home = await readOutput("index.html");
  check("home page is exported", true);
} catch {
  check("home page is exported", false, "out/index.html is missing");
}

if (home) {
  const content = [
    "Fabio Maffioletti",
    "Summary",
    "Professional experience",
    "Head of Engineering",
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
}

check("sitemap is exported", await exists("sitemap.xml"));
if (await exists("sitemap.xml")) {
  const sitemap = await readOutput("sitemap.xml");
  check(
    "sitemap lists the home page",
    sitemap.includes("https://www.fabiomaffioletti.me/"),
  );
  check(
    "sitemap lists the privacy page",
    sitemap.includes(
      "https://www.fabiomaffioletti.me/projects/android/missplitty/privacy-policy/",
    ),
  );
}

check("robots file is exported", await exists("robots.txt"));
if (await exists("robots.txt")) {
  const robots = await readOutput("robots.txt");
  check("robots file points to the sitemap", robots.includes("Sitemap:"));
}

check("custom domain file is exported", await exists("CNAME"));
if (await exists("CNAME")) {
  const cname = await readOutput("CNAME");
  check(
    "custom domain is correct",
    cname.trim() === "www.fabiomaffioletti.me",
    `got "${cname.trim()}"`,
  );
}

check(".nojekyll marker is exported", await exists(".nojekyll"));
check("favicon is exported", await nonEmpty("favicon.ico"));
check("Open Graph image is exported", await nonEmpty("og-image.png"));

const privacyPath =
  "projects/android/missplitty/privacy-policy/index.html";
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
