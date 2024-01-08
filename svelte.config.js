import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    adapter: adapter(
      {
        pages: 'docs',
        assets: 'docs',
        fallback: null,
        precompress: false,
        domain: '',
        jekyll: 'false'
      }
    ),
    files: {
      assets:'docs',
      hooks: 'docs/hooks',
      lib: 'docs/lib',
      routes: 'docs/routes',
      serviceWorker: 'docs',
      setup: 'docs/setup',
      static: 'docs/static'
    },
  },
  preprocess: vitePreprocess(),
  paths: '/amazingly-awesome-portfolio',
  appDir: 'internal',
};


export default config;