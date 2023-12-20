import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export interface ICustomStorage {
	getItem: (key: string) => string;
	setItem: (key: string, value: string) => void;
}

export type TStorage = ICustomStorage | 'local' | 'session';

export interface IPersistableOptions {
	storage?: TStorage;
}

function getStorage(storage?: TStorage) {
	if (browser) {
		if (!storage) return localStorage;

		if (storage === 'local') {
			return localStorage;
		} else if (storage == 'session') {
			return sessionStorage;
		} else {
			return storage;
		}
	}
}

export function persistable<T>(
	key: string,
	defaultValue: T,
	options?: IPersistableOptions
): Writable<T> {
	const storage = getStorage(options?.storage);

	const getFromStorage = () => {
		if (browser) {
			const storageValue = storage?.getItem(key);

			if (storageValue) {
				return JSON.parse(storageValue);
			}
		}

		return undefined;
	};

	const initialValue = getFromStorage() ?? defaultValue;

	const { subscribe, set, update } = writable<T>(initialValue);

	subscribe((newValue) => {
		if (browser) storage?.setItem(key, JSON.stringify(newValue));
	});

	return {
		subscribe,
		set,
		update
	};
}
