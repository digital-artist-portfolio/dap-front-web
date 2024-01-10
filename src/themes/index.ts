import { browser } from '$app/environment';

export const themes = ['dark', 'light'] as const;

export type TTheme = (typeof themes)[number];

export function getFallbackTheme(): TTheme {
	if (browser) {
		const systemPref = window.matchMedia('(prefers-color-scheme: dark)');
		return systemPref.matches ? 'dark' : 'light';
	}

	return 'dark';
}

export function isTheme(theme: string): theme is TTheme {
	return (themes as readonly string[]).includes(theme);
}
