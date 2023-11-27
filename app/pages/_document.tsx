import { h, Component, SsrStyle } from "nzxt/h";

const Document: Component = (_, children) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-okaidia.min.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-core.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js"></script>
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <SsrStyle />
        <title>nzxt document</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J0MJBS66XD"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments)};
          gtag('js', new Date());

          gtag('config', 'G-J0MJBS66XD');
          `}
        </script>
        <style>
          {`
          body {
            max-width: 1024px;
          }
          pre {
            background-color: #272822;
          }
          `}
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

export default Document;
