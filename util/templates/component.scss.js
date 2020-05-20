module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@import "../style/variables.scss";
@import "../style/typography.scss";

.foo-bar {
  @include font-defaults;
  color: $harvey-green;
}
`,
  extension: `.scss`
});
