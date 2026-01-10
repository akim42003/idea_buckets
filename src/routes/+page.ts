import { posts } from '$lib/posts';
import { primers } from '$lib/primers';
import { readingList } from '$lib/reading-list';

export const load = () => {
	return {
		posts,
		primers,
		readingList
	};
};
