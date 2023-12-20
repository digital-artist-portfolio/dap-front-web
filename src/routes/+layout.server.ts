import { InfoService } from '../services';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async ({ url }) => {
	console.log('hello', url);
	const locales = await InfoService.getLocales();
	const info = await InfoService.getBasicInfo();

	return { info, locales };
};
