import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Paths that must return HTTP 200 on GitHub Pages (not the SPA 404.html fallback).
 * Keep in sync with `public/sitemap.xml` and `src/App.tsx` routes.
 */
const SPA_SHELL_ROUTES = [
  'about',
  'contact',
  'projects/miro',
  'projects/wix-groups',
  'projects/star-global',
  'projects/simple-screen-recorder',
] as const;

/**
 * GitHub Pages has no server rewrites. Two things are required:
 * 1) 404.html = SPA shell for unknown paths (client NotFound still works).
 * 2) Real route/index.html files for known routes so Google gets HTTP 200, not 404.
 *    (Serving only via 404.html keeps a 404 status — Search Console marks those as Not found.)
 */
function emitSpaShellsForGitHubPages() {
  return {
    name: 'emit-spa-shells-for-github-pages',
    closeBundle() {
      const dist = resolve(__dirname, 'dist');
      const indexHtml = resolve(dist, 'index.html');

      copyFileSync(indexHtml, resolve(dist, '404.html'));

      for (const route of SPA_SHELL_ROUTES) {
        const dir = resolve(dist, route);
        mkdirSync(dir, { recursive: true });
        copyFileSync(indexHtml, resolve(dir, 'index.html'));
      }
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), emitSpaShellsForGitHubPages()],
});
