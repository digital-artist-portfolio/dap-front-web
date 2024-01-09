import type { Locales } from '$i18n';
import type { ILocale } from '$models';
import { writable } from 'svelte/store';
export interface ILocalesStore {
	locales: ILocale[];
	locale: Locales;
}

const { subscribe, update } = writable<ILocalesStore>({ locales: [], locale: 'pt-BR' });

export const localesStore = {
	subscribe,
	setLocales(locales: ILocale[], locale: Locales) {
		update((currentValue) => ({ ...currentValue, locales, locale }));
	}
};
