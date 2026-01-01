import adapter from '@sveltejs/adapter-auto';
import { sveltex } from '@nvl/sveltex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: ['.svelte', '.sveltex'],
	preprocess: [
		vitePreprocess(),
		await sveltex(
			{
				markdownBackend: 'markdown-it',
				mathBackend: 'mathjax'
			},
			{}
		)
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
