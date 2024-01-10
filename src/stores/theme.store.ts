import type { TTheme } from '$themes';
import { writable } from 'svelte/store';

export interface IThemeStore {
	theme?: TTheme;
}

const { subscribe, set, update } = writable<IThemeStore>({ theme: undefined });

export const themeStore = {
	subscribe,
	set,
	setThemeAndUpdate(newTheme: TTheme) {
		setThemeCookie(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		update((currentValue) => ({ ...currentValue, theme: newTheme }));
	}
};

function setThemeCookie(newTheme: TTheme) {
	const maxAge = 60 * 60 * 24 * 30; /* 1 month */
	const path = '/';
	const strict = 'strict';
	document.cookie = `theme=${newTheme}; max-age=${maxAge}; path=${path}; strict=${strict}`;
}
