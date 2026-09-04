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
