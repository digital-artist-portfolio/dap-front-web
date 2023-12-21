import { InfoService } from '../services';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async ({ url }) => {
	const currentLocale = url.searchParams.get('locale');
	const locales = await InfoService.getLocales();
	const info = await InfoService.getBasicInfo({ locale: currentLocale });
	return { info, locales };
};
