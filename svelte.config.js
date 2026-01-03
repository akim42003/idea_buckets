import adapter from '@sveltejs/adapter-static';
import { sveltex } from '@nvl/sveltex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const basePath = process.env.NODE_ENV === 'production' ? '/idea_buckets' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.sveltex'],
	preprocess: [
		vitePreprocess(),
		await sveltex(
			{
				markdownBackend: 'markdown-it',
				mathBackend: 'mathjax'
			},
			{
				math: {
					css: {
						type: 'cdn', // Use CDN instead of local files
						cdn: 'jsdelivr'
					}
				}
			}
		)
	],
	kit: {
		adapter: adapter(),
		paths: {
			base: basePath
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
