import { error } from '@sveltejs/kit';
import { postBySlug, posts } from '$lib/posts';

export const entries = () => {
	return posts.map((post) => ({ slug: post.slug }));
};

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
