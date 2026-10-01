---
title: 'How this site is built to rank on Google and be cited by AI'
summary: 'This portfolio is also a working demo of what I do for clients: a fast, accessible site that search engines and AI assistants can read, trust and recommend. Every claim on this page can be checked with free tools.'
role: 'Design, development, SEO and AEO'
stack: ['Astro 7', 'TypeScript', 'Tailwind CSS 4', 'schema.org JSON-LD', 'GitHub Pages']
status: 'Live'
topics: ['Search engine optimization', 'Answer engine optimization', 'Structured data', 'Web performance', 'Accessibility']
datePublished: 2026-09-27
---

## What does it take for Google and AI assistants to recommend a site?

Four things: they must be allowed in, they must be able to read the page without running scripts, they must
understand what the page is about, and they must find a clear answer to the question someone asked. Speed and
accessibility are how Google measures whether people will have a good time once they arrive.

Most sites miss at least one of these. Many block AI crawlers by accident, hide content behind JavaScript, or
answer questions three paragraphs after the heading. This site is built to get all four right, and the rest of
this page shows how.

## How fast is it?

Google's PageSpeed Insights scores the homepage **100** in all four categories: Performance, Accessibility, Best
Practices and SEO. The whole homepage is small:

| What | Size |
| --- | --- |
| HTML | 14 KB compressed |
| CSS | 5.8 KB compressed |
| JavaScript | About 1 KB, inline, only for the light/dark switch |

Every page is plain HTML generated ahead of time, so there's nothing to wait for. Fonts are self-hosted, with
the two that appear first preloaded and fallback fonts sized to match, so text doesn't jump when they arrive.
Images are converted at build time to AVIF and WebP at the exact sizes they're shown.

## How do AI assistants get in?

By being invited. `robots.txt` names the crawlers behind ChatGPT, Claude, Perplexity and Google's AI features,
and allows each one:

```text
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://manjaparidze.github.io/sitemap-index.xml
```

That covers all three kinds: crawlers that train models, crawlers that index for AI search, and fetches made when
a user asks an assistant about a page. Blocking any of them removes the site from that surface. The sitemap is
generated on every build, so new pages are listed automatically.

## How do machines know what each page is about?

Every page carries structured data in schema.org JSON-LD, the format Google and AI systems read:

- the homepage describes a **Person**, with job title, skills and profiles;
- About is a **ProfilePage**, Contact is a **ContactPage**;
- each case study is a **TechArticle**, with its author and its publish and update dates.

They all point to one Person by the same ID, so machines see one author across the site, not five strangers. Each
case study's "Last updated" date is read from the project's history at build time, never typed by hand, so it's
always true. Every page passes validator.schema.org with no errors or warnings.

## How does it serve two languages?

Every main page and case study exists in English and in Georgian, and each version tells search engines about
the other with `hreflang` links, so Google shows people the one in their language. Each language has its own
address (Georgian under `/ka/`), its own `lang` attribute, preview card and sitemap entry, and the structured
data says which language a page is in. Georgian text uses fonts made for Georgian, loaded only on Georgian pages.

## How is the writing structured?

Answer first. Headings are the questions people actually ask, and the first sentence under each one answers it.
That's the format answer engines lift into their replies, and it's easier for people too. Each page also has a
single main heading, a real description, and one canonical URL.

## What happens when someone shares a link?

It shows a proper preview. Every page gets its own 1200×630 preview card, generated at build time in the site's
fonts and colours, so links on LinkedIn, Slack or WhatsApp show the page's title instead of a bare URL. New pages
get a card automatically.

## Is it accessible?

Yes, to WCAG 2.1 AA. Automated checks with axe find no issues on any page, in light and dark mode, from a 320px
phone to a wide desktop. Everything works with a keyboard alone, with a visible focus ring. Text contrast is at
least 6:1, motion is off for people who ask for less of it, and the site follows the system's light or dark
setting, with a switch to override it.

## What's still on the list?

Two things, in the open:

- **A Content Security Policy**, as a meta tag, because GitHub Pages can't send security headers.
- **A custom domain.** Moving is a one-line change, because the site's address comes from one setting.

## How can you check all of this yourself?

With free tools, in about five minutes:

1. **Speed:** paste the address into [PageSpeed Insights](https://pagespeed.web.dev/).
2. **Structured data:** paste any page into the [Schema Markup Validator](https://validator.schema.org/).
3. **AI access:** open [/robots.txt](/robots.txt) and see who's allowed, and [/llms.txt](/llms.txt) for the short guide to the site for AI tools.
4. **Link previews:** paste a page into LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/).
5. **Accessibility:** run the free axe DevTools browser extension on any page.

If your own site fails some of these, that's the work I do.
