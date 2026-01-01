import { error } from '@sveltejs/kit';
import { postBySlug } from '$lib/posts';

export const load = ({ params }) => {
	const post = postBySlug(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post: {
			...post.metadata,
			component: post.default
		}
	};
};
