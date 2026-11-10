import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isDev
    ? {
        async rewrites() {
          return [
            {
              source: "/projects/android/missplitty/privacy-policy",
              destination:
                "/projects/android/missplitty/privacy-policy/index.html",
            },
            {
              source: "/projects/android/missplitty/privacy-policy/",
              destination:
                "/projects/android/missplitty/privacy-policy/index.html",
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
