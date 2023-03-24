# Introduction

T.B.D

## what is nzxt?

A server side rendering framework for [zheleznaya](https://zheleznaya.netlify.app/#index))

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

React like frontend framework.

See [document](https://zheleznaya.netlify.app/#index))
