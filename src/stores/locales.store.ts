import type { ILocale } from '$models';
import { writable } from 'svelte/store';

export type TLocales = ILocale[];

const { subscribe, set } = writable<TLocales>([]);

export const localesStore = {
	subscribe,
	set
};
