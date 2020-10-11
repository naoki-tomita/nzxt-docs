# API References | Data fetching

Page component has `getInitialProps` function that is data fetch means during server-side-rendering.

The function `getInitialProps` is one argument function.

`Props` that brought by `getInitialProps` are injected on SSR and SPA.

```tsx
interface Props {
  name: string;
}

const App: Component<Props> = ({ name }) => {
  return <div>{name}</div>
}

App.getInitialProps = async ({ params }) => {
  // params is { [key: string]: string } object.
  // this is url parameter.
  // when application path is /foo/_id_/bar
  // then params type is { id: string }.
  const result = await fetch(`http://example.com/foo/${params.id}/bar`);
  const json = await result.json();
  return {
    name: json.name,
  }
}

export default App;
```

> This is inspired by Next.js

#### [<- back](./api-references-cli) / [next ->](./api-references-error)
