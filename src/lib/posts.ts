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

export const posts = Object.entries(postModules)
	.map(([path, post]) => ({
		slug: path.split('/').pop()?.replace('.sveltex', '') ?? '',
		...post.metadata
	}))
	.sort((a, b) => (a.date < b.date ? 1 : -1));

export const postBySlug = (slug: string) => postModules[`/src/content/posts/${slug}.sveltex`];
