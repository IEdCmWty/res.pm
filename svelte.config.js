import { mdsvex } from 'mdsvex';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	alias: { $src: path.resolve('./src') },
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({ precompress: true })
	},
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
