---
name: Fabio Maffioletti
description: A quiet, typographic online curriculum and services site.
colors:
  primary: "oklch(50% 0.134 242.749)"
  primary-hover: "oklch(36% 0.09 242.749)"
  focus: "oklch(58.8% 0.158 241.966)"
  accent-contrast: "oklch(100% 0 0)"
  neutral-ink: "oklch(18% 0.01 250)"
  neutral-muted: "oklch(45% 0.02 250)"
  neutral-paper: "oklch(100% 0 0)"
  neutral-rule: "oklch(86.9% 0.022 252.894)"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.05
  page-title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
  section-label:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.08em"
  company:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.4
  role:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.65
  lede:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  meta:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  8: "32px"
  12: "48px"
  16: "64px"
components:
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  link-hover:
    textColor: "{colors.primary-hover}"
    typography: "{typography.body}"
  section-label:
    textColor: "{colors.neutral-ink}"
    typography: "{typography.section-label}"
  company-heading:
    textColor: "{colors.neutral-ink}"
    typography: "{typography.company}"
  hairline-rule:
    backgroundColor: "{colors.neutral-rule}"
    height: "1px"
    width: "100%"
  cta-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.accent-contrast}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    minHeight: "44px"
  cta-button-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.accent-contrast}"
---

# Design System: Fabio Maffioletti

## Overview

**Creative North Star: "The Quiet Ledger"**

A self-published professional record, set like a well-made document but built as a small site. The page earns trust by getting out of the way: one serif family, near-black on white, a few hairline rules, and enough vertical air that the facts can be read without effort.

The system is deliberately conservative. The type family and its three weights are fixed; hierarchy comes from scale, weight, case, and space rather than new fonts or decoration. There is no card vocabulary, no shadow, and no ornamental frame. The single accent blue marks interaction: links and one primary call to action per page.

The result should feel authored and current: a credible professional record for CTOs, founders, and engineering leaders, not a template and not an AI-generated landing page.

**Key Characteristics:**
- One serif family (Spectral) at 400, 600, and 700, fixed.
- Near-black on white; one blue reserved for interaction.
- Flat: no shadows, cards, or decorative fills.
- Structure from 1px hairline rules and 64px section rhythm.
- Wide centered column that fills most of the viewport, up to 1320px.
- One filled CTA per page; every other action is a link.

## Colors

A near-monochrome document palette with one restrained interaction blue.

### Primary
- **Reference Blue** (oklch(50% 0.134 242.749)): Inline links and the single primary CTA. It is the only chromatic element on the page.
- **Deep Reference** (oklch(36% 0.09 242.749)): Link hover text and the CTA hover fill.
- **Focus Blue** (oklch(58.8% 0.158 241.966)): The 2px `:focus-visible` outline, offset 2px.
- **Paper White** (oklch(100% 0 0)): CTA text, so the filled button stays at AA contrast.

### Neutral
- **Ink** (oklch(18% 0.01 250)): Headings, role titles, and body copy.
- **Muted Ink** (oklch(45% 0.02 250)): Dates, labels, ledes, footer text, and inactive navigation.
- **Paper** (oklch(100% 0 0)): The page surface. No other background appears except the CTA.
- **Hairline** (oklch(86.9% 0.022 252.894)): 1px rules under section labels, the header border, the CTA border, and the footer border.

### Named Rules
**The One Voice Rule.** Reference Blue marks interaction only: links, focus, and the single primary CTA. It never decorates headings or icons, and the only filled surface it may color is the primary CTA.

**The Paper Rule.** Backgrounds stay white. The only exception is the one filled accent CTA on a page.

## Typography

**Display / Body Font:** Spectral (with Georgia, serif), weights 400, 600, 700, normal style only.

**Character:** A single humanist serif carries the whole document. Reading text sits at 17px with a relaxed 1.65 line height; headings gain authority from weight and scale, while small uppercase labels organize sections without competing with the content.

### Hierarchy
- **Display** (700, clamp 2.5–3rem, line-height 1.05): The name on the home page only.
- **Page title** (700, 2.25rem, line-height 1.15): The single `h1` on inner pages.
- **Section label** (600, 0.875rem, line-height 1.6, uppercase, 0.08em tracking): Section headings. Treated as labels, always followed by a hairline rule.
- **Company** (600, 1.375rem, line-height 1.4, sentence case): Company names in the experience section.
- **Role** (600, 1.0625rem, line-height 1.65): Role titles. Dates sit beside them in 0.875rem muted, tabular numerals.
- **Lede / Summary** (400, 1.1875rem, line-height 1.55): The home summary and page introductions.
- **Body** (400, 1.0625rem, line-height 1.65): Bullet lists, entries, and running copy. Uses the full page column, left-aligned.
- **Meta** (400, 0.875rem, line-height 1.6): Header contact line, dates, footer, and small labels.

### Named Rules
**The Fixed Type Rule.** The family, its three weights, and the absence of italic are fixed. Do not introduce another family, a display face, or decorative type treatment.

**The Full-Width Column Rule.** Content uses the full page column. Do not cap paragraphs to a narrow reading measure, and never justify text; left alignment is the default at every width.

## Layout

A single centered column using the same Bootstrap-style width ladder as the previous site: 540px, 720px, 960px, 1140px, and 1320px at 576px, 768px, 992px, 1200px, and 1400px. Side padding is 20px on mobile and 24px from 640px, so the column fills most of the viewport at laptop and desktop widths. There are no sidebars, grids, or multi-column regions.

Vertical rhythm is generous and uniform: 64px above each top-level section, 32px between the header and the first section, and 32px of internal spacing inside bordered blocks. Section labels sit 12px above their hairline rule, and content begins 20px below it. Companies are separated by 32px and roles by 20px. List items are separated by 8px with a 20px indent.

The site header is a full-width band with a bottom hairline; its inner content uses the same page column. The brand sits left and the navigation right, wrapping at narrow widths. The home hero is centered; inner pages use a left-aligned page header. The CTA and footer close every page on the same column.

Responsive behavior is mobile-first from 360px. Role title and dates stack below 640px, then share a baseline row with space between them. Navigation wraps rather than hiding behind a menu; no client-side disclosure is needed for three links.

## Elevation & Depth

Flat. There are no shadows, no tonal layering, and no elevated surfaces. Depth comes from whitespace, from the 1px Hairline rules, and from the single accent-filled CTA, which is the only visually solid element on a page.

## Shapes

Square. There is no border radius anywhere; corners are 0. The only geometry is the 1px horizontal rule, the disc bullet marker, and the rectangular CTA. No pills, no rounded cards, no icon medallions.

## Components

### Links
- **Shape:** Inline text with a 1px underline, 3px offset; no padding or background.
- **Default:** Reference Blue text and underline.
- **Hover:** Deep Reference text.
- **Focus:** 2px Focus Blue outline, 2px offset, on every interactive element.

### Primary CTA
- **Shape:** Square rectangle, minimum height 44px, 12px × 20px padding.
- **Color:** Reference Blue fill with Paper White text; Deep Reference fill on hover.
- **Constraint:** One per page. It is the only filled element; do not add a second button or a button-like link.

### Navigation
- **Style:** Muted Ink, 0.875rem, no underline at rest.
- **Hover:** Reference Blue with an underline.
- **Current:** Ink text, 600 weight, 2px underline; `aria-current="page"` is set server-side or client-side for the active route.
- **Mobile:** Wraps to a second line; no hamburger, no hidden menu.

### Section Labels
- **Style:** Uppercase 0.875rem/600 with 0.08em tracking, followed by a 1px Hairline rule 12px below, then 20px of space before content.
- **Behavior:** The rule is the divider. No background band, card, or extra ornament.

### Role Entries
- **Style:** Role title and dates on one baseline row from 640px, stacked below it. Dates use 0.875rem Muted Ink with tabular numerals.
- **Body:** Disc bulleted list 12px below, items separated by 8px, line height 1.65.

### Lists
- **Style:** Disc markers with 20px indent and 8px between items. Education and links use plain lists with a bold term inside running text; no definition-list markup without terms.

### Footer
- **Style:** 1px Hairline top border, 32px vertical padding, 0.875rem Muted Ink. Contact links and the privacy link sit above the data-treatment note at 0.75rem.

## Do's and Don'ts

### Do:
- **Do** keep Spectral at 400, 600, and 700 only; do not add italic or another family.
- **Do** use the full page column for running text, left-aligned, with a 1.65 line height.
- **Do** use 64px between top-level sections and a 1px Hairline rule under each section label.
- **Do** reserve Reference Blue for links, focus, and the single CTA.
- **Do** keep one `h1` per page, a `<main id="main">`, a skip link, and a labeled primary navigation.
- **Do** provide a visible focus state and a text cue for links that open a new tab.

### Don't:
- **Don't** justify body text or cap the page to a narrow reading measure.
- **Don't** add shadows, rounded corners, cards, tinted panels, gradients, or decorative icons.
- **Don't** add a second filled CTA or turn ordinary links into buttons.
- **Don't** use color to signal hierarchy; hierarchy comes from scale, weight, case, and space.
- **Don't** hide navigation behind a hamburger or a client-only disclosure for this few links.
- **Don't** apply the navy-and-amber palette of `og-image.png` to the page; it is a separate social-card asset.
