@AGENTS.md

## Design Token Rules

When implementing a Figma design, do not hardcode color values in component styles. If a color is defined as a variable in Figma but is not yet defined as a CSS custom property in the codebase, add it to the relevant token file under `src/styles/` (e.g. `colors.scss`). If the appropriate file does not exist (for example `colors.scss`), create it and `@use` it from `src/styles/globals.scss`. Reference the value from component SCSS via `var(--token-name)` rather than inlining the literal.
