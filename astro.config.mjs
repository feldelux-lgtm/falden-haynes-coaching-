import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

function getAllYaml(dir) {
  try {
    return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) return getAllYaml(full);
      if (entry.name.endsWith('.yaml')) return [full.replace(/\\/g, '/')];
      return [];
    });
  } catch {
    return [];
  }
}

export default defineConfig({
  site: 'https://feldonhaynes.com',
  output: 'server',
  adapter: vercel({
    includeFiles: getAllYaml('src/data'),
  }),
  compressHTML: true,
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/privacy') &&
        !page.includes('/terms') &&
        !page.includes('/start') &&
        !page.includes('/lp') &&
        !page.includes('/keystatic'),
    }),
    keystatic(),
  ],
});
