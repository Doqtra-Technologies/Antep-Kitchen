import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // GoDaddy cPanel Node.js hosting runs Passenger against a startup file and
  // never runs a build step. `standalone` emits `.next/standalone/server.js`
  // with node_modules already traced in, so the server needs no `npm install`
  // and no devDependencies on the host.
  output: "standalone",

  // The project sits inside a parent folder that has no lockfile. Pinning the
  // tracing root keeps `.next/standalone` flat instead of nesting the app under
  // reconstructed parent directories, which breaks Passenger's startup path.
  outputFileTracingRoot: projectRoot,

  // Emits `/about/` style URLs. Kept so links stay identical to the previously
  // deployed static export and old inbound links do not 404.
  trailingSlash: true,

  images: {
    // Shared hosting has no `sharp` build and limited CPU/RAM, so on-request
    // optimization is left off and images are served as authored.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
