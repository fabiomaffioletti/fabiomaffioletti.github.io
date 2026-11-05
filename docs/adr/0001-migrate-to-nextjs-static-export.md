# Migrate the CV site to Next.js static export on GitHub Pages

The CV site was a Vite single-page app whose HTML shell was empty until JavaScript ran, so social crawlers and some search crawlers could not see its content, and it shipped no description, Open Graph data, structured data, sitemap, or robots file. We moved it to Next.js App Router with TypeScript and static export, deployed to the existing GitHub Pages custom domain, so the full curriculum is prerendered at build time while hosting stays serverless.

We rejected adding a prerender plugin to Vite (a less complete metadata story), Astro (a larger rewrite of the existing React components), and a server-rendered host (unnecessary operational cost for a static CV). The cost of this choice is no server runtime, ISR, or built-in image optimization, and the published output must carry the custom-domain file and a `.nojekyll` marker for GitHub Pages.
