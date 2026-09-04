# nzxt-docs

Documentation for [nzxt](https://github.com/naoki-tomita/nzxt)

## Running locally

The site runs on both Node.js and Deno. Both runtimes read the same
`package.json` and the same `node_modules`, so either installer serves either
runtime.

```sh
cd app

# Node.js
yarn install
yarn dev

# Deno (no npm/yarn needed, Deno installs the dependencies itself)
deno task dev
```

`build`, `serve` and `start` are available the same way: as yarn scripts and as
Deno tasks (`deno task build`, `deno task serve`, `deno task start`).

The site is then served on [`http://localhost:8080`](http://localhost:8080).

## Deploying to Deno Deploy

The site runs on [Deno Deploy](https://console.deno.com) as a dynamic app — it is
server side rendered per request, so no static export is involved.

Everything except one setting comes from [`app/deno.json`](app/deno.json). In the
Deno Deploy dashboard, set:

* **App directory**: `app` — the app lives in a subdirectory, and Deno Deploy
  reads its build configuration from that directory.

The rest is the `deploy` key in `app/deno.json`:

```json
{
  "deploy": {
    "install": "deno install",
    "build": "deno task build",
    "runtime": {
      "type": "dynamic",
      "entrypoint": "node_modules/nzxt/bin/nzxt.js",
      "args": ["serve"]
    }
  }
}
```

`nzxt build` runs during the build step, so the generated client entries in
`.tmp/` are part of the build artifact and the runtime only runs `nzxt serve` —
no writes to disk at startup.

Notes:

* nzxt bundles the client code with esbuild when `serve` starts, which spawns
  esbuild's native binary. Deno Deploy allows subprocesses, but the binary that
  `deno install` fetches matches the *builder's* architecture — if a build ever
  fails to start with an esbuild error, that is the first thing to check.
* nzxt listens on `$PORT`, falling back to 8080. Set `PORT` as an environment
  variable in the dashboard if the platform expects a specific port.
