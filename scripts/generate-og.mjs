import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";
import React from "react";
import { ImageResponse } from "next/og.js";

import { profile } from "../src/data/profile.ts";

const site = profile.siteUrl.replace(/^https?:\/\//, "");

const image = React.createElement(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 100%)",
      color: "#f8f9fa",
      padding: "80px",
      fontFamily: "sans-serif",
    },
  },
  React.createElement("div", {
    style: {
      width: 160,
      height: 8,
      marginBottom: 40,
      background: "#f4a261",
      borderRadius: 4,
    },
  }),
  React.createElement(
    "div",
    { style: { fontSize: 72, fontWeight: 700, lineHeight: 1.1 } },
    profile.name,
  ),
  React.createElement(
    "div",
    { style: { fontSize: 34, marginTop: 24, color: "#a9bcd0" } },
    profile.headline,
  ),
  React.createElement(
    "div",
    { style: { fontSize: 28, marginTop: 20, color: "#f4a261" } },
    site,
  ),
);

const response = new ImageResponse(image, { width: 1200, height: 630 });
const buffer = Buffer.from(await response.arrayBuffer());

const here = path.dirname(fileURLToPath(import.meta.url));
const target = path.resolve(here, "../public/og-image.png");

await writeFile(target, buffer);
console.log(`Wrote ${target} (${buffer.length} bytes)`);
