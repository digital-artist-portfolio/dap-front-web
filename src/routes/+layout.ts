import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { setLocale } from '$i18n/i18n-svelte';
import { detectLocale } from '$i18n/i18n-util';

export const load: LayoutLoad = async ({ data }) => {
	const locale = detectLocale(() => [data.currentLocale ?? '']);
	await loadLocaleAsync(locale);
	setLocale(locale);
	return data;
};
