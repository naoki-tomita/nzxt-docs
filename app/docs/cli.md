# CLI

```bash
> yarn nzxt
# or
> npx nzxt
# or, on Deno
> deno run --allow-all node_modules/nzxt/bin/nzxt.js
```

Commands:

* `start` (default)
    * build the client code, then serve.
* `build`
    * build the client code only.
* `serve`
    * serve without building.

You can use special environment parameter.

* `PORT`
    * specify port number.
