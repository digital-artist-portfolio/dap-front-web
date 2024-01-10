import type { LayoutLoad } from './$types';
import { loadLocaleAsync, setLocale } from '$i18n';

export const load: LayoutLoad = async ({ data }) => {
	await loadLocaleAsync(data.locale);
	setLocale(data.locale);
	return data;
};
