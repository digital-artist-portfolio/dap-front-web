import { dev } from '$app/environment';
import type { Locales } from '$i18n';
import type { TTheme } from '$types/theme.types';
import type { Cookies } from '@sveltejs/kit';

export class CookieStorage {
	static getLocale(cookies: Cookies) {
		return cookies.get('locale');
	}

	static setLocale(cookies: Cookies, locale: Locales) {
		cookies.set('locale', locale, {
			sameSite: 'strict',
			httpOnly: false,
			maxAge: 30 * 24 * 60 * 60 /* 1 month */,
			secure: !dev
		});
	}

	static getTheme(cookies: Cookies) {
		return cookies.get('theme');
	}

	static setTheme(cookies: Cookies, theme: TTheme) {
		return cookies.set('theme', theme, {
			sameSite: 'strict',
			httpOnly: false,
			maxAge: 30 * 24 * 60 * 60 /* 1 month */,
			secure: !dev
		});
	}
}
