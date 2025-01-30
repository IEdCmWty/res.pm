import { config } from '@sitis/config__tailwind';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [config],
	theme: {
		extend: {}
	},
	plugins: [containerQueries]
};
