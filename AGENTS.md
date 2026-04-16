<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## SCSS Rules

When working with SCSS in this project, use the modern Sass module system at all times. Prefer `@use` and `@forward` where appropriate, and do not introduce deprecated `@import` statements.

### Sass + BEM

Each component ships with a Sass module using the BEM naming convention (`.select`, `.select__trigger`, `.select--small`). Style module file names must follow camelCase (`visuallyHidden.module.scss`). Keep one block per component file and name the block after the component. Do not mix BEM with utility-style or ad-hoc class names. Keep selectors flat; modifiers must not rely on ancestor context.

#### Do

```scss
.block {
  // styles
  &--modifier {
    // styles
  }
}

.block__element {
  // styles
  &--modifier {
    // styles
  }
}
```

#### Don't

```scss
.block {
  &__element {
    // styles — nesting hides the generated class name, avoid this
  }

  &.block__element {
    // styles
  }

  &.block--modifier {
    // styles
  }
}
```

#### Caution

```scss
.block {
  // Try to avoid targeting elements directly due to performance issues.
  // Prefer adding a CSS class.
  div {
    // styles
  }
}
```

## Responsive Styles / Media Queries

Never write raw `@media` rules directly. Always use the mixins defined in `src/styles/mediaQueries.scss` by adding `@use "src/styles/mediaQueries" as mq;` at the top of the SCSS file.

Available mixins:

- `@include mq.mq("md")` — min-width (mobile-first, styles from breakpoint and up)
- `@include mq.mq-max("md")` — max-width (styles up to, but not including, the breakpoint)
- `@include mq.mq-between("sm", "lg")` — styles within a range of two breakpoints

Named breakpoints are `xs`, `sm`, `md`, `bmd`, `lg`, `xl`, `xxl`. A raw pixel number may also be passed instead of a name.

## Design Token Rules

When implementing a Figma design, do not hardcode color values in component styles. If a color is defined as a variable in Figma but is not yet defined as a CSS custom property in the codebase, add it to the relevant token file under `src/styles/` (e.g. `colors.scss`). If the appropriate file does not exist (for example `colors.scss`), create it and `@use` it from `src/styles/globals.scss`. Reference the value from component SCSS via `var(--token-name)` rather than inlining the literal.
