import type { Locales } from '$i18n';
import type { ILocale } from '$models';
import { getSingletonContext } from '$utils';
import { writable } from 'svelte/store';

const LOCALES_STORE_KEY = 'locales_store';
export interface ILocalesStore {
	locales: ILocale[];
	locale: Locales;
}

function createLocalesStore(value?: ILocalesStore) {
	const { subscribe, update } = writable<ILocalesStore>(value);

	return {
		subscribe,
		setLocales(locales: ILocale[], locale: Locales) {
			update((currentValue) => ({ ...currentValue, locales, locale }));
		}
	};
}

export function getLocalesStore() {
	return getSingletonContext(LOCALES_STORE_KEY, createLocalesStore, {
		locales: [],
		locale: 'pt-BR'
	});
}
