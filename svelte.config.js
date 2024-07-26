import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.KENER_BASE_PATH || ""
		}
	},

	preprocess: [vitePreprocess({})]
};

export default config;