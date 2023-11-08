# Document template

When you want to customize html template. You can customize template by create special file named `pages/_document.tsx`.

The default template is as follows.

Props is empty object. Children are your page component will injected.

```tsx
import { h, SsrStyle } from "nzxt/h";

const Document = (_: {}, children: Component[]) => {
  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {<SsrStyle /> /* if you want to use zstyl in ssr */}
      <title>Document</title>
    </head>
    <body>
      {children}
    </body>
    </html>
  );
}
```
