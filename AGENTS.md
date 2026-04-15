<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## SCSS Rules

When working with SCSS in this project, use the modern Sass module system at all times. Prefer `@use` and `@forward` where appropriate, and do not introduce deprecated `@import` statements.

Follow the BEM naming convention for class names: `block`, `block__element`, `block--modifier`, and `block__element--modifier`. Keep one block per component file and name the block after the component. Do not mix BEM with utility-style or ad-hoc class names.

## Design Token Rules

When implementing a Figma design, do not hardcode color values in component styles. If a color is defined as a variable in Figma but is not yet defined as a CSS custom property in the codebase, add it to the relevant token file under `src/styles/` (e.g. `colors.scss`). If the appropriate file does not exist (for example `colors.scss`), create it and `@use` it from `src/styles/globals.scss`. Reference the value from component SCSS via `var(--token-name)` rather than inlining the literal.
