import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vitest/config';
// import { paraglide } from '@inlang/paraglide-sveltekit/vite';

export default defineConfig({
	resolve: {
		alias: { $src: path.resolve('./src') }
	},
	plugins: [
		// paraglide({
		// 	project: './project.inlang',
		// 	outdir: './src/lib/paraglide'
		// }),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
