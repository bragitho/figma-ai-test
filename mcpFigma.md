# Figma MCP — Value for Our Development Process

## Goals

- Minimize friction between design and development
- Increase development speed for simpler pages and solutions
- Deliver better, more consistent experiences to our customers

---

## What AI + Figma MCP Enables

### Code Generation
- Generate code directly from Figma designs
- Generate design scaffolding from existing code
- Generate design concepts from natural language prompts
- Map and connect Figma components to their corresponding code components

### Design Token Integrity
- Generated code references design tokens rather than hardcoded values
- Missing tokens are identified and added during generation, keeping the token system up to date
- Enforces consistency between what designers define and what ships in production

### Reduced Design-to-Development Drift
- Code is derived directly from the source of truth in Figma, reducing the interpretation gap that typically accumulates over iterations
- Designers and developers work from the same reference, making design reviews faster and more objective

---

## Benefits

### Speed
- Static content pages can be produced as fast as no-code tools like Webflow, without sacrificing code ownership
- Repetitive implementation work (spacing, layout, token application) is handled by generation, freeing developers to focus on logic and interactivity

### Ownership
- UI elements live in our own codebase rather than a third-party platform
- Components are reusable across all our products and solutions
- We retain full control over accessibility, performance, and quality

### Collaboration
- Strengthens co-working between designers and developers by creating a shared, automated bridge between the two disciplines
- Reduces back-and-forth caused by ambiguity — the design file becomes directly actionable
- Lowers the barrier for developers to understand and work within the design system

---

## Status

This is an evolving practice. We expect to discover trade-offs as we integrate Figma MCP more deeply into our workflow, but the expectation is that the benefits will significantly outweigh the costs. Findings and adjustments will be documented here as we learn.
