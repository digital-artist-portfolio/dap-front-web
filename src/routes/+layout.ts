import type { LayoutLoad } from './$types';
import { loadLocaleAsync, setLocale } from '$i18n';
import { browser } from '$app/environment';

export const load: LayoutLoad = async ({ data }) => {
	await loadLocaleAsync(data.locale);
	setLocale(data.locale);

	/* if (browser) {
		const x = window.matchMedia('(prefers-color-scheme: dark)');
		console.log('match', x.matches);
	} */

	return data;
};
