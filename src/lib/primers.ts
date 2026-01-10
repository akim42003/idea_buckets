type PrimerMetadata = {
	title: string;
	description?: string;
};

type PrimerModule = {
	metadata: PrimerMetadata;
	default: unknown;
};

const primerModules = import.meta.glob('/src/content/primers/*.sveltex', { eager: true }) as Record<
	string,
	PrimerModule
>;

const primerEntries = Object.entries(primerModules);

const primers = primerEntries.map((entry) => {
	const path = entry[0];
	const primer = entry[1];

	const filename = path.split('/').pop();

	let slug = '';
	if (filename) {
		slug = filename.replace('.sveltex', '');
	}

	return {
		slug,
		title: primer.metadata.title,
		description: primer.metadata.description
	};
});

primers.sort((a, b) => a.title.localeCompare(b.title));

export { primers };

export const primerBySlug = (slug: string) => primerModules[`/src/content/primers/${slug}.sveltex`];
