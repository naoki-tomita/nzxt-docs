# Pages

A page is a zheleznaya component exported from a `.tsx` file in the `pages` directory. Each page routing is filename based.

## Routing generation

You can create page routing by `pages` directory tree. If you create pages like below,

```
.
└── pages
    ├── foo.tsx
    ├── index.tsx
    └── bar
        ├── foo.tsx
        └── index.tsx
```

Then nzxt create routing like below.

* `/` renders `./pages/index.tsx`
* `/foo` renders `./pages/foo.tsx`
* `/bar` renders `./pages/bar/index.tsx`
* `/bar/foo` renders `./pages/bar/foo.tsx`

> To learn more about filename based routing, check the [Routing](./routing)

## Pre-rendering

By default, nzxt pre-renders every page. This means that nzxt generates rendered html with for each page on server side, not only client side rendering. This is good at SEO and user experience improvement.

T.B.D
