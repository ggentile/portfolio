import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.gianni-gentile.com',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
