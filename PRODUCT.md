# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters and hiring managers** screening Fabio for senior engineering leadership roles.
- **Professional network and peers** learning about his work and track record.
- **Consulting or advisory leads** evaluating him for coaching or fractional CTO work.

All three are confirmed audiences; no single one dominates.

## Product Purpose

A personal curriculum vitae and portfolio site for Fabio Maffioletti, published at www.fabiomaffioletti.me and linked from professional profiles. A good visit may start a hiring conversation, leave the visitor convinced of his leadership track record, or serve as a factual reference CV during interviews and internal discussions.

## Positioning

A first-person, self-published record of two decades of engineering leadership at named companies, carrying quantified outcomes and direct contact details rather than third-party framing. It presents his own services offer alongside the curriculum.

## Operating Context

- Visitors typically arrive from professional profiles such as LinkedIn and GitHub.
- The curriculum is read during hiring and reference conversations, so factual accuracy of dates, titles, companies, and metrics matters.
- The site is published on a custom domain through GitHub Pages.
- The MissPlitty privacy policy is published on the same site because an external app-store listing references it.

## Capabilities and Constraints

- Static export: no server runtime, ISR, or built-in image optimization.
- Pages: Home service overview, Curriculum, Coaching, Fractional CTO, Contacts.
- The Curriculum page carries the profile summary, professional experience by company and role, education, skills, links, and additional information.
- Search and social metadata: description, Open Graph, Twitter card, Person JSON-LD, sitemap, robots.
- The MissPlitty privacy page is a standalone document kept at its existing path; future work must preserve it.
- Coaching and Fractional CTO are published with placeholder copy. Their full content, format, and availability are undecided.

## Brand Commitments

- Name: Fabio Maffioletti.
- Headline: "Head of Engineering | Senior Engineering Manager | Technology Leader".
- Tagline: "Technology leader – Executive Coach – Fractional CTO".
- First-person professional voice in English.
- Claims and metrics come from the existing curriculum and must not be replaced, inflated, or supplemented with fabricated evidence.

## Evidence on Hand

- Profile and contact details in `src/data/profile.ts`.
- Full curriculum, including companies, roles, dated achievements, education, skills, and links, in `src/data/curriculum.ts`.
- Generated Open Graph image at `public/og-image.png`.
- MissPlitty privacy policy at `public/projects/android/missplitty/privacy-policy/index.html`.
- Absent and not to be fabricated: testimonials, external case studies, client logos, service pricing, or specific service outcomes. The service-card descriptions are generic placeholders.

## Product Principles

1. **Credibility through specifics.** Named companies, dated roles, and quantified outcomes carry more weight than adjectives.
2. **One source of truth.** Profile and curriculum facts live in structured data so the rendered page, metadata, and structured data cannot drift apart.
3. **Serve several audiences without diluting.** Recruiters, peers, and prospective clients all need the same record; no audience's need should push out the others'.
4. **Keep obligations stable.** The privacy page stays reachable at its published path regardless of visual or structural changes elsewhere.
5. **Extend, don't replace.** New services pages add a commercial surface on top of the curriculum rather than displacing it.
