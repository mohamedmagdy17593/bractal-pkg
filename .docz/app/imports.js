export const imports = {
  'docs/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-home" */ 'docs/Home.mdx'),
  'docs/coreUI/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-core-ui-button" */ 'docs/coreUI/Button.mdx'),
}
