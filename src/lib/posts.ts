type PostMetadata = {
	title: string;
	date: string;
	description?: string;
};

type PostModule = {
	metadata: PostMetadata;
	default: unknown;
};

const postModules = import.meta.glob('/src/content/posts/*.sveltex', { eager: true }) as Record<
	string,
	PostModule
>;

const postEntries = Object.entries(postModules);

const posts = postEntries.map((entry) => {
	const path = entry[0];
	const post = entry[1];

	// Get the filename from the path
	const filename = path.split('/').pop();

	// Remove the file extension to make the slug
	let slug = '';
	if (filename) {
		slug = filename.replace('.sveltex', '');
	}

	// Return a clean post object
	return {
		slug,
		title: post.metadata.title,
		date: post.metadata.date,
		description: post.metadata.description
	};
});

// Sort posts by date (newest first)
posts.sort((a, b) => {
	if (a.date < b.date) {
		return 1;
	}
	return -1;
});

export { posts };

export const postBySlug = (slug: string) => postModules[`/src/content/posts/${slug}.sveltex`];
