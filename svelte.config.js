import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      target: '#svelte',
      strict: false,
    })
  },
  preprocess: vitePreprocess()
};
export default config;