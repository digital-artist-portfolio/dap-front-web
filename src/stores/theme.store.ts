import type { TTheme } from '$themes';
import { getSingletonContext } from '$utils';
import { writable } from 'svelte/store';

const THEME_STORE_KEY = 'theme_store';

export interface IThemeStore {
	theme?: TTheme;
}

function createThemeStore(value?: IThemeStore) {
	const { subscribe, set, update } = writable<IThemeStore>(value);

	return {
		subscribe,
		set,
		setThemeAndUpdate(newTheme: TTheme) {
			setThemeCookie(newTheme);
			document.documentElement.setAttribute('data-theme', newTheme);
			update((currentValue) => ({ ...currentValue, theme: newTheme }));
		}
	};
}

function setThemeCookie(newTheme: TTheme) {
	const maxAge = 60 * 60 * 24 * 30; /* 1 month */
	const path = '/';
	const strict = 'strict';
	document.cookie = `theme=${newTheme}; max-age=${maxAge}; path=${path}; strict=${strict}`;
}

export function getThemeStore() {
	return getSingletonContext(THEME_STORE_KEY, createThemeStore, { theme: undefined });
}
