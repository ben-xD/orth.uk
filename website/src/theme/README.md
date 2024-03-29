# Docusaurus Swizzle

Originally, I tried using docusaurus' swizzle functionality. For example, by running `pnpm run swizzle @docusaurus/theme-classic` and selecting `MDXPage` to be swizzled. See https://docusaurus.io/docs/2.x/swizzling for more information.

However, it generates `.js` and `.d.ts` instead of `.tsx` files. Instead, I just clone docusaurus, check out the git tag corresponding to the version I'm using, and then copy the typescript file.

Files here will be used by docusaurus automatically. I previously did:
```
// This allows me to add comments to any page if `isCommentsEnabled: true` is in the header.
mdxPageComponent: path.resolve(__dirname, 'src/components/mdxPageComponent.tsx')
```

and

```js
blogPostComponent: path.resolve(__dirname, 'src/components/BlogPostPage.tsx')
```