// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The deployed origin. Set SITE_URL in CI when the custom domain lands; nothing else changes.
const site = process.env.SITE_URL || 'https://manjaparidze.github.io';

// https://astro.build/config
export default defineConfig({
  site,
  // English at /, Georgian at /ka/ (PLAN.md → Georgian translation).
  i18n: {
    locales: ['en', 'ka'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [mdx(), sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ka: 'ka' } } })],
  markdown: {
    // Both themes are emitted as CSS variables; global.css picks one with the same rule as the color tokens.
    shikiConfig: {
      themes: { light: 'github-light-default', dark: 'github-dark-default' },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rolldownOptions: {
        // Astro marks MDX content modules with "use astro:head-inject"; Rolldown warns it may drop the directive.
        // Harmless here (no MDX component has scoped styles), so only this exact warning is silenced.
        onwarn(warning, defaultHandler) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('astro:head-inject')) return;
          defaultHandler(warning);
        },
      },
    },
  },
  // Self-hosted at build time from Fontsource; Astro also generates metric-matched fallbacks.
  fonts: [
    // Georgian-only subsets, loaded on /ka/ pages: they cover Georgian letters and nothing else,
    // so Latin text there keeps Newsreader and Plex. No fallbacks: the Latin stacks follow them.
    {
      provider: fontProviders.fontsource(),
      name: 'Noto Serif Georgian',
      cssVariable: '--font-noto-serif-georgian',
      weights: [500],
      styles: ['normal'],
      subsets: ['georgian'],
      fallbacks: [],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Noto Sans Georgian',
      cssVariable: '--font-noto-sans-georgian',
      weights: [400, 600],
      styles: ['normal'],
      subsets: ['georgian'],
      fallbacks: [],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: ['400 600'],
      styles: ['normal'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-plex-sans',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
