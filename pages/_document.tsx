import { h, Component } from "nzxt/h";

const Document: Component = (_, children) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-okaidia.min.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-core.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js"></script>
        <title>nzxt document</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

export default Document;
