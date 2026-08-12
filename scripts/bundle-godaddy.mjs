#!/usr/bin/env node
// Builds a self-contained folder to upload to GoDaddy cPanel Node.js hosting.
//
// GoDaddy's Node.js Selector only does two things: `npm install` and start the
// configured startup file with Passenger. It never runs `next build`, and it
// installs with NODE_ENV=production, which drops the devDependencies that a
// build needs (typescript, tailwindcss). So the build happens here, locally,
// and the host receives an already-built tree that starts with zero install.
//
// Usage: npm run build && npm run bundle
// Then upload the contents of `deploy/` to the app root chosen in cPanel.

import { cp, mkdir, rm, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const standalone = path.join(root, ".next", "standalone");
const outDir = path.join(root, "deploy");

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(path.join(standalone, "server.js")))) {
  console.error(
    "Missing .next/standalone/server.js — run `npm run build` first " +
      '(and confirm next.config.ts still sets output: "standalone").',
  );
  process.exit(1);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

// 1. The traced server + its node_modules.
await cp(standalone, outDir, { recursive: true });

// 2. Standalone deliberately omits these two, expecting a CDN. There is no CDN
//    here, so the Node process serves them itself.
await cp(path.join(root, ".next", "static"), path.join(outDir, ".next", "static"), {
  recursive: true,
});
if (await exists(path.join(root, "public"))) {
  await cp(path.join(root, "public"), path.join(outDir, "public"), { recursive: true });
}

// 3. cPanel reads this to populate the app's Node version and startup file.
//    Dependencies are empty on purpose: everything is already traced in.
await writeFile(
  path.join(outDir, "package.json"),
  JSON.stringify(
    {
      name: "antep-kitchen",
      version: "0.1.0",
      private: true,
      engines: { node: ">=20.9.0" },
      scripts: { start: "node server.js" },
      dependencies: {},
    },
    null,
    2,
  ) + "\n",
);

console.log(`Bundle ready: ${path.relative(process.cwd(), outDir)}`);
console.log("Upload its contents to the cPanel application root, then set:");
console.log("  Application startup file : server.js");
console.log("  Environment variable     : NODE_ENV=production");
