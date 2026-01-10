import { posts } from '$lib/posts';

export const trailingSlash = 'always';

export const load = () => {
	return {
		posts
	};
};
