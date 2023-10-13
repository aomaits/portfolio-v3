import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x',
    })
  },
  preprocess: vitePreprocess()
};

config.paths = { base: process.argv.includes('/portfolio-v3/') ? '' : process.env.BASE_PATH }

export default config;