/** Ambient types for non-TS imports (CSS side-effect imports and css-modules). */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
