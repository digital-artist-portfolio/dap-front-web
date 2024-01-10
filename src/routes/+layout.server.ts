import type { Locales } from '$i18n';
import type { TTheme } from '$themes';
import { InfoService } from '../services';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async ({ locals }) => {
	const locales = await InfoService.getLocales();
	const info = await InfoService.getBasicInfo({ locale: locals.locale });
	const locale = locals.locale as Locales;
	const theme = locals.theme as TTheme | undefined;

	return { info, locales, locale, theme };
};
