import { ArtService } from '$services';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ url }) => {
	const id = url.searchParams.get('id');
	const intId = parseInt(id ?? '');

	const arts = await ArtService.getArts();

	if (!isNaN(intId)) {
		const art = await ArtService.getArtById({ id: intId });
		return { arts, art };
	}

	return { arts };
};
