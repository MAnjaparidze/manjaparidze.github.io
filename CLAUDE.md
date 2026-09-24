# CLAUDE.md — Portfolio Website

## Context

Mamuka's portfolio site. Senior React Native / full-stack dev (React Native, Expo, Node.js, MongoDB, React), cybersecurity background. This is a proving-ground project — quality over speed. See `PLAN.md` for content architecture and phase status; it changes, this file shouldn't.

## Stack

- Astro 7 (static-first, islands for interactivity), TypeScript strict, Tailwind 4 via `@tailwindcss/vite` (config in CSS `@theme`, no `tailwind.config.mjs`)
- Content as Markdown with frontmatter under `src/content/`
- Deploy: GitHub Pages via GitHub Actions for now; see `PLAN.md` → Domain & Hosting

## File Structure

```
src/
├── components/   # Reusable UI
├── layouts/      # Base, Article, Project layouts
├── pages/        # File-based routing
├── content/      # Case studies, blog posts (Markdown)
├── styles/       # Global CSS, design tokens as custom properties
└── lib/          # Utilities, schema generators, types
public/           # Static assets, robots.txt
```

## Code Standards

- TypeScript everywhere, no `any`
- Functional components, explicit prop types
- Tailwind utility classes; extract a component for anything repeated 3+ times
- kebab-case files, PascalCase components
- No inline styles, no unused CSS/JS, no `div` where a semantic element exists

## Skills to Use

- Design direction for visual/layout work lives in `PLAN.md` → Design Direction
- `aeo-accessibility` (`.claude/skills/`) — before writing case study content or page templates (schema, WCAG, content structure)

## Working Patterns

- Plan before executing on anything non-trivial
- Show real state (file contents, errors, screenshots) — don't describe, show
- Push back on mistakes, including Claude's own
- One change at a time; verify before building on top of prior work
- No placeholder content ("Lorem ipsum", "description goes here") — use real project details or mark `[MAMUKA: write this]`
- State why before installing a package

## Quality Gates Before Any Deploy

- `astro build` — zero warnings
- Lighthouse: Performance/Accessibility/SEO/Best Practices all ≥ 90
- Schema validates at validator.schema.org
- axe DevTools — zero violations
- Full keyboard navigation works
- Both light and dark mode tested
- Responsive at 320/375/768/1024/1440px
