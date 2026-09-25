/** Light/dark theme state, shared by the pre-paint script in Base.astro and ThemeToggle. */

export type Theme = 'light' | 'dark';

/** localStorage key. Present only while the visitor's choice differs from their OS setting. */
export const THEME_STORAGE_KEY = 'theme';
