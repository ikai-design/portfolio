import { copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * GitHub Pages has no server rewrites: a hard refresh on /projects/miro requests that path as a file.
 * Serving the SPA shell as 404.html makes GH Pages return the app for unknown paths so React Router can run.
 */
function copyIndexAs404() {
  return {
    name: 'copy-index-as-404',
    closeBundle() {
      const dist = resolve(__dirname, 'dist');
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), copyIndexAs404()],
});
