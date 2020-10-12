# API References | Error handling

When error has occured at fetching `getInitialProps` then nzxt shows special page named `pages/_error.tsx`.
If page does not exist then you can see default browser error page.

`_error.tsx` is rendering only on server-side-rendering.

The types of Props are as follows. (* This feature will be implemented.)

```typescript
interface ErrorComponentProps {
  error: Error;
}
```

#### [<- back](./api-references-data-fetching) / [next ->](./api-references-document)
