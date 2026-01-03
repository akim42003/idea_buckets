import adapter from '@sveltejs/adapter-static';
import { sveltex } from '@nvl/sveltex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// For GitHub Pages: repository name becomes the base path
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
						type: 'hybrid',
						cdn: 'jsdelivr'
					}
				}
			}
		)
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: basePath
		},
		prerender: {
			entries: ['*'],
			handleHttpError: 'warn'
		}
	}
};

export default config;
