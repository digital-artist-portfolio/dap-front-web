import { detectLocale, i18n, isLocale } from '$i18n';
import type { Locales } from '$i18n/i18n-types';
import { loadAllLocales } from '$i18n/i18n-util.sync';
import { isTheme } from '$themes';
import type { Handle, RequestEvent } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { CookieStorage } from './storage';

loadAllLocales();
const L = i18n();

const handleLanguage: Handle = async ({ event, resolve }) => {
	const lang = event.url.searchParams.get('locale');

	let locale: Locales;

	/* user gave a valid lang param */
	if (lang && isLocale(lang)) {
		locale = lang;
	} else {
		locale = getPreferredLocale(event);
	}

	/* give the server access to the user's locale */
	const LL = L[locale];
	event.locals.locale = locale;
	event.locals.LL = LL;

	/* set the cookie to the new locale */
	CookieStorage.setLocale(event.cookies, locale);

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
};

const handleTheme: Handle = async ({ event, resolve }) => {
	const currentTheme = CookieStorage.getTheme(event.cookies);

	if (!currentTheme || !isTheme(currentTheme)) {
		return resolve(event);
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%theme%', currentTheme)
	});
};

export const handle = sequence(handleLanguage, handleTheme);

function getPreferredLocale({ cookies, request }: RequestEvent) {
	/* Check cookies for user preferences */
	const cookieLocale = CookieStorage.getLocale(cookies);

	if (cookieLocale && isLocale(cookieLocale)) {
		return cookieLocale;
	}

	/* Check browser preferences */
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);
	return detectLocale(acceptLanguageDetector);
}
