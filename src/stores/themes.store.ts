import { browser } from '$app/environment';
import { fallbackTheme, isTheme, type TTheme } from '$themes';
import { writable } from 'svelte/store';

export interface IThemesStore {
	theme: TTheme;
}

const { subscribe, set, update } = writable<IThemesStore>(getInitialValue());

export const themesStore = {
	subscribe,
	set,
	setTheme(newTheme: TTheme) {
		/* set browser cookie and update DOM */
		const maxAge = 60 * 60 * 24 * 30; /* 1 month */
		const path = '/';
		const strict = 'strict';

		document.cookie = `theme=${newTheme}; max-age=${maxAge}; path=${path}; strict=${strict}`;
		document.documentElement.setAttribute('data-theme', newTheme);

		/* finally, update store */
		update((currentValue) => ({ ...currentValue, theme: newTheme }));
	}
};

function getInitialValue() {
	if (browser) {
		const currentTheme = document.documentElement.getAttribute('data-theme');

		if (!currentTheme || !isTheme(currentTheme)) {
			return { theme: fallbackTheme };
		}

		return { theme: currentTheme };
	}

	return { theme: fallbackTheme };
}
