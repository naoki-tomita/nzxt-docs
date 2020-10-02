# Introduction

T.B.D

## what is nzxt?

A server side rendering framework for [zheleznaya](https://naoki-tomita.github.io/zheleznaya/dist/).

This is like Next.js or Nuxt.js.

```tsx
import { h, Component } from "nzxt/h"

const Page: Component<{ name: string }> = ({ name }) => {
  return <div>Hello {name}!</div>
}

Page.getInitialProps = async () => {
  const name = await fetch("http://example.com").then(it => it.text());
  return { name };
}

export default Page;
```

### what is zheleznaya?

See [document](https://naoki-tomita.github.io/zheleznaya/dist/).

#### [next ->](./getting-started)
