# Interactive demo

## Counter app

<iframe src="/demos/counter" width="500" height="180"></iframe>

```tsx
import { Component, h, useStore } from "nzxt/h";

const Counter: Component<{ count: number }> = ({ count }) => {
  const state = useStore({ count });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={() => state.count++}>count up</button>
    </div>
  );
}

Counter.getInitialPrpos = async () => {
  return { count: 100 };
}

export default Counter
```

`useStore` is exported from `nzxt/h`. It creates a store bound to the page that
nzxt renders on the client, and the page re-renders whenever the store changes.
During server side rendering it just returns the initial value.

> zheleznaya 0.3 removed the global `useStore` / `render` in favor of
> `createRoot`, so pages must import `useStore` from `nzxt/h`, not from
> `zheleznaya`.

## Server side data fetching

<iframe src="/demos/stargazers" width="500" height="180"></iframe>

```tsx
import { Component, h } from "nzxt/h";
import fetch from "node-fetch";

const Counter: Component<{ stargazersCount: number }> = ({ stargazersCount }) => {
  return (
    <div>
      <h1>nzxt stargazers count</h1>
      <p>{stargazersCount}</p>
    </div>
  );
}

Counter.getInitialPrpos = async () => {
  const repo = await fetch("https://api.github.com/repos/naoki-tomita/nzxt")
    .then(it => it.json())
  return { stargazersCount: repo.stargazers_count };
}

export default Counter
```