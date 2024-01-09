import type { Locales } from '$i18n';
import { InfoService } from '../services';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async ({ locals }) => {
	const locales = await InfoService.getLocales();
	const info = await InfoService.getBasicInfo({ locale: locals.locale });
	const locale = locals.locale as Locales;

	return { info, locales, locale };
};
