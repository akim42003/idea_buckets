import { posts } from '$lib/posts';
import { readingList } from '$lib/reading-list';

export const load = () => {
	return {
		posts,
		readingList
	};
};
