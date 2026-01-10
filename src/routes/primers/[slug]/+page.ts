import { error } from '@sveltejs/kit';
import { primerBySlug, primers } from '$lib/primers';

export const entries = () => {
	return primers.map((primer) => ({ slug: primer.slug }));
};

export const load = ({ params }) => {
	const primer = primerBySlug(params.slug);

	if (!primer) {
		throw error(404, 'Primer not found');
	}

	return {
		primer: {
			...primer.metadata,
			component: primer.default
		}
	};
};
