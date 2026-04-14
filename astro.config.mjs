import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://runguide.vercel.app',
  prefetch: {
    prefetchAll: true,
  },
});
