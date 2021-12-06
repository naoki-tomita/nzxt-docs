# Routing

As explained in the Pages section, nzxt has dynamic routing, so if you put page components in the `pages` directory, nzxt will generate the routing.

## Dynamic routing

You might thought, How do I route dynamic routing. No problem! You can route like below.

```
.
└── pages
    └── bar
        ├── _id_.tsx
        └── index.tsx
```

Then nzxt create routing like belows.

* `/bar` renders `./pages/bar/index.tsx`
* `/bar/:id` renders `./pages/bar/_id_.tsx`. `id` will be pass to Component.getInitialProps by using props.

You should write `_id_.tsx` like belows.

```tsx
// _id_.tsx
const Bar: Component<{ bar: any }> = ({ bar }) => {
  // you can use named parameter.
  return (
    <div>
      {bar}
    </div>
  );
};

Bar.getInitialProps = async ({ params }) => {
  const { id } = params; // params includes id.
  const response = await fetch(`https://example.com/bar/${id}`); // fetch some request using id.
  const result = await response.json();
  return { bar: result }; // return object and named response.
};
```
