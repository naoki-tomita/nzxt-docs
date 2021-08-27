# Static image serving

nzxt can serve static image file. If you put images in `/public/images/:filename` then nzxt serve at `/images/:filename` path.

```
.
├── pages
│   └── index.tsx
└── public
    └── images
        ├── favicon.jpg
        ├── logo.png
        └── logo_dark.svg
```
