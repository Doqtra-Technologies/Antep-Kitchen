# Deploying to GoDaddy cPanel Node.js hosting

## Why the site was invisible

GoDaddy's Node.js Selector runs Phusion Passenger against one startup file. It
does **not** run a build step, and its `npm install` runs with
`NODE_ENV=production`, which skips `devDependencies`. Pushing the repository as
it stood meant:

- `.next/` is git-ignored, so no production build ever reached the host. The
  custom `server.js` called `next({ dev: false })`, which throws
  `Could not find a production build in the '.next' directory` — Passenger then
  returns a 503 and the domain shows nothing.
- `typescript` and `tailwindcss` are `devDependencies`, so even a manual
  `npm run build` on the host would fail.
- `public/.htaccess` (left over from the old static export) declared
  `DirectoryIndex index.html`. Dropped in the app's document root it overrides
  Passenger's own routing, so Apache looks for a static `index.html` that a Node
  app never produces.

The fix builds locally and ships an already-built, dependency-free tree.

## Deploy

```bash
npm ci
npm run build     # emits .next/standalone (output: "standalone")
npm run bundle    # assembles ./deploy
```

`deploy/` (~52 MB) contains `server.js`, a traced `node_modules`, `.next/`,
`public/`, and a minimal `package.json`. Upload its **contents** to the
application root you choose in cPanel — over SFTP, or zip it and use the File
Manager's extract.

## cPanel settings

| Field                   | Value                                       |
| ----------------------- | ------------------------------------------- |
| Node.js version         | 20.9 or newer (Next 16 requires it)         |
| Application mode        | Production                                  |
| Application root        | wherever you uploaded, e.g. `antep-kitchen` |
| Application URL         | your domain                                 |
| Application startup file| `server.js`                                 |
| Environment variable    | `NODE_ENV=production`                       |

Then click **Restart**. Do not click *Run NPM Install* — dependencies are
already traced into the bundle and a reinstall can strip them.

Leave the app's document root free of any hand-written `.htaccess`; Passenger
writes its own. `apache-static-export.htaccess.example` at the repo root is kept
only for reference if you ever move back to static hosting — it must not be
deployed alongside the Node app.

## Verify

```bash
cd deploy && NODE_ENV=production PORT=3999 node server.js
```

`/`, `/about/`, `/menu/`, `/whats-on/`, `/contact/`, `/gallery/` and
`/semi-dining/` should all return 200, and an unknown path 404.

## Redeploying

Re-run the three commands, re-upload `deploy/`, and hit **Restart** in cPanel.
Node caches the old process until it is restarted.
