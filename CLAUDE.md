@AGENTS.md

## Spacing

Never hardcode spacing values (padding, margin, gap, etc.) as raw pixel or rem literals. Always use the fluid spacing map defined in `src/styles/spacing.scss`.

Import the module and retrieve values with `map.get`:

```scss
@use "sass:map";
@use "src/styles/spacing" as sp;

.block {
  padding: map.get(sp.$spacing, 2);      // fluid, keeps growing beyond xl
  margin-bottom: map.get(sp.$cappedSpacing, 4); // fluid, clamped at xl breakpoint
}
```

- `sp.$spacing` — fluid `calc()` values that scale between the `xs` and `xl` breakpoints.
- `sp.$cappedSpacing` — same, but wrapped in `clamp()` so the value stops growing outside the breakpoint range.
- Step keys are numbers from `-32` to `32` in `0.5` increments (e.g. `0.5`, `1`, `1.5`, `2` …). Positive steps produce positive spacing; negative steps produce negative spacing (useful for pull/bleed effects).
- Choose the step that matches the design intent — do not reach for an arbitrary pixel value.

## Design Token Rules

When implementing a Figma design, do not hardcode color values in component styles. If a color is defined as a variable in Figma but is not yet defined as a CSS custom property in the codebase, add it to the relevant token file under `src/styles/` (e.g. `colors.scss`). If the appropriate file does not exist (for example `colors.scss`), create it and `@use` it from `src/styles/globals.scss`. Reference the value from component SCSS via `var(--token-name)` rather than inlining the literal.

## Responsive Styles / Media Queries

Never write raw `@media` rules directly. Always use the mixins defined in `src/styles/mediaQueries.scss` by adding `@use "src/styles/mediaQueries" as mq;` at the top of the SCSS file.

Available mixins:

- `@include mq.mq("md")` — min-width (mobile-first, styles from breakpoint and up)
- `@include mq.mq-max("md")` — max-width (styles up to, but not including, the breakpoint)
- `@include mq.mq-between("sm", "lg")` — styles within a range of two breakpoints

Named breakpoints are `xs`, `sm`, `md`, `bmd`, `lg`, `xl`, `xxl`. A raw pixel number may also be passed instead of a name.

## Sass + BEM

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
