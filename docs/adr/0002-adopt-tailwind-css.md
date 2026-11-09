# Adopt Tailwind CSS instead of Bootstrap

The CV site used Bootstrap only as a CSS reset and grid (`row`, `col-*`), with no Bootstrap JavaScript, yet shipped the full Bootstrap stylesheet and then overrode its typography. We moved to Tailwind CSS v4 so responsive behaviour lives next to the components, the generated stylesheet contains only the utilities the page uses, and the Bootstrap dependency disappears.

We rejected keeping Bootstrap (unused component surface and a global theme to fight), CSS Modules (more files and naming overhead for a single page), and inline styles (no responsive variants). The cost is utility-heavy JSX and a PostCSS build step. Visual parity was kept, with targeted responsive improvements: role headers and contact details stack on mobile, long URLs wrap, and the summary stays justified at every viewport. The privacy page stays a separate, untouched document.
