---
name: aeo-accessibility
description: Technical spec for making portfolio pages extractable by AI answer engines (ChatGPT, Perplexity, Claude, Google AI Overviews) and accessible per WCAG 2.1 AA. Use this whenever writing or editing a case study, page template, layout, or any user-facing content on the portfolio site — schema.org markup, content structure, robots.txt, heading patterns, and the full accessibility checklist all live here. Trigger even if the user just says "write the case study" or "build the project page" without mentioning AEO or accessibility explicitly.
---

# AEO & Accessibility Spec

Both aims reinforce each other: semantic HTML and clear extractable content serve screen readers and AI crawlers at the same time. Apply this whenever touching a page template or writing content, not just when explicitly asked.

## Content structure

**Answer-first pattern** — every heading is a real question someone searches, answered in the first 1-2 sentences, then expanded:

```markdown
## How do you integrate Yandex Maps in React Native 0.83?

Yandex MapKit requires native Swift injection on iOS and patching
react-native-yamap's Kotlin source for Kotlin 2.1 compatibility on
Android. [expansion follows]
```

Not: "Yandex Maps Integration" as a heading with the answer buried three paragraphs down.

Rules:
- One `<h1>` per page, headings never skip a level (`h2` → `h4` is wrong)
- Line length under 80 characters in rendered body text
- `dateModified` set programmatically at build time, never by hand

## Schema.org (JSON-LD)

**Homepage — Person:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mamuka Anjaparidze",
  "jobTitle": "Senior React Native & Full-Stack Developer",
  "url": "https://[domain]",
  "sameAs": ["[LinkedIn]", "[GitHub]"],
  "knowsAbout": ["React Native", "Expo", "Node.js", "MongoDB", "TypeScript", "Cybersecurity"]
}
```

**Case study pages — TechArticle:**
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "[title]",
  "datePublished": "[date]",
  "dateModified": "[build-time date]",
  "author": { "@type": "Person", "name": "Mamuka Anjaparidze" },
  "about": "[tech topic]"
}
```

**Any FAQ-style section:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question", "name": "...",
    "acceptedAnswer": { "@type": "Answer", "text": "..." }
  }]
}
```

Validate everything at validator.schema.org before considering a page done.

## Crawlability

`robots.txt` must explicitly allow AI crawlers — many sites block these by accident:

```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /
```

That covers training (GPTBot, ClaudeBot, Google-Extended), search indexing (OAI-SearchBot, Claude-SearchBot, PerplexityBot) and user-triggered fetches (ChatGPT-User, Claude-User, Perplexity-User). Blocking any group removes the site from that surface.

All content must be server-rendered — Astro does this by default, but verify nothing depends on client-side JS to appear. Generate `sitemap.xml` at build time. Canonical URL on every page.

## Accessibility (WCAG 2.1 AA)

Mandatory on every page:
- Semantic HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<header>` — not `<div>` standing in for these
- Skip-to-content link as the first focusable element
- Every interactive element keyboard-reachable with a visible focus indicator
- Alt text on meaningful images; `alt=""` on decorative ones
- Color contrast ≥ 4.5:1 body text, ≥ 3:1 large text
- Real `<label>` elements on form inputs — placeholder text is not a label
- `prefers-reduced-motion` respected — no animation forced on users who've opted out
- `prefers-color-scheme` supported — light and dark variants
- `lang` attribute on `<html>`
- Usable down to 320px viewport, no content loss at 200% zoom

Test with: axe DevTools (zero violations), Lighthouse accessibility ≥ 95, full keyboard-only pass (Tab/Shift+Tab/Enter/Escape), and ideally a screen reader pass (VoiceOver or NVDA).

## Freshness

Commercial/technical content gets cited far more when recently updated — treat anything older than 6 months as due for review. Show a visible "Last updated" date on case studies.
