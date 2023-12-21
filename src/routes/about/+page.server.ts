import type { PageServerLoad } from './$types';
import { InfoService } from '$services';

export const prerender = true;

export const load: PageServerLoad = async ({ url }) => {
	const currentLocale = url.searchParams.get('locale');

	const {
		data: {
			attributes: { text }
		}
	} = await InfoService.getAbout({ locale: currentLocale });

	return { text };
};
