import { mdsvex } from 'mdsvex';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	alias: { $src: path.resolve('./src') },
	kit: {
		adapter: adapter({ precompress: true })
	},
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
