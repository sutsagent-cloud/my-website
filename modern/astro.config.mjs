import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: process.env.GITHUB_ACTIONS ? '/my-website' : undefined,
  site: process.env.SITE_URL,
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
