// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '*.sveltex' {
	export const metadata: {
		title: string;
		date: string;
		description?: string;
	};

	const component: unknown;
	export default component;
}

export {};
