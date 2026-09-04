# Create your first application

## install packages.

```bash
> yarn add nzxt zheleznaya
```

> On Deno, use `deno add npm:nzxt npm:zheleznaya`.

## configure typescript.

```bash
> touch tsconfig.json
```

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "jsx": "react",
    "jsxFactory": "h",
    "esModuleInterop": true
  }
}
```

> nzxt compiles your pages with this `tsconfig.json`, so it is required even
> when you run on Deno.

## create pages.

```bash
> mkdir pages
> touch pages/index.tsx
```

> You must create typescript code.

## implement pages.

```tsx
import { h, Component } from "nzxt/h";

interface Props {
  stars: number;
}

const Index: Component<Props> = ({ stars }) => {
  return (
    <h1>nzxt stars: {stars}</h1>
  );
}

Index.getInitialProps = async () => {
  const json = await fetch("https://api.github.com/repos/naoki-tomita/nzxt").then(res => res.json());
  return { stars: json.stargazers_count };
}
```

## run server.

```bash
> yarn nzxt
```

You can see on [`http://localhost:8080`](http://localhost:8080)

## run on Deno.

nzxt runs on Deno too. Add a `deno.json` that tells Deno how to compile the JSX
in `pages/` and lets Deno install the dependencies itself:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h"
  },
  "nodeModulesDir": "auto",
  "tasks": {
    "start": "deno run --allow-all node_modules/nzxt/bin/nzxt.js"
  }
}
```

```bash
> deno task start
```

`nodeModulesDir: "auto"` makes Deno install the dependencies into
`node_modules` on its own, so no npm or yarn is needed. Both runtimes read the
same `node_modules`, so you can switch between them without reinstalling.

This documentation site itself runs on both runtimes, see its
[`deno.json`](https://github.com/naoki-tomita/nzxt-docs/blob/master/app/deno.json).
