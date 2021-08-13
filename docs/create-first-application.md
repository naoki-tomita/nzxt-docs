# Create your first application

## install packages.

```bash
> yarn add nzxt zheleznaya
```

## create pages.

```bash
> mkdir pages
> touch pages/index.tsx
```

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
