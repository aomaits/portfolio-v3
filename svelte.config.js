import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      target: '#svelte',
      // strict: false,
    }),
    // paths: {
    //   base: process.env.NODE_ENV === 'production' ? '/aomaits.github.io/portfolio-v3' : '',
    // }
  },
  preprocess: vitePreprocess()
};
export default config;