import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits `about/index.html` instead of `about.html` so Apache resolves
  // /about without rewrite rules.
  trailingSlash: true,
  images: {
    // Required for `output: "export"` — no server available to optimize on request.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
